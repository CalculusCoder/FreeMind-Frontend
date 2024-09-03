import NextAuth, { Session } from "next-auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { API_BASE_URL } from "../../../../config";

if (!API_BASE_URL) {
  throw new Error(
    "API_BASE_URL is not defined. Check your environment variables."
  );
}

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,

  pages: {
    signIn: "/Home/Signin",
  },

  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials as any;
        const res = await fetch(`${API_BASE_URL}/Signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        const user = await res.json();

        if (res.status === 200 && user) {
          return user;
        } else if (res.status === 401) {
          throw new Error("Invalid Email or Password");
        } else if (res.status === 402) {
          throw new Error(
            "User used Google authentication to register. Please sign in with Google."
          );
        } else if (res.status === 404) {
          throw new Error("Invalid Email or Password");
        } else if (res.status === 400) {
          throw new Error("User email not verified.");
        } else {
          throw new Error("Unknown error occurred");
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      profile: (async (profile: any, tokens: any) => {
        const lowercasedEmail = profile.email.toLowerCase();
        const res = await fetch(
          `${API_BASE_URL}/getUser?email=${lowercasedEmail}`
        );
        const user = await res.json();

        if (res.status === 404) {
          const registerRes = await fetch(`${API_BASE_URL}/Register/Google`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: lowercasedEmail,
              fullName: profile.name,
            }),
          });

          const registerResJson = await registerRes.json();

          if (registerRes.ok) {
            return {
              id: registerResJson.user.id.toString(),
              name: registerResJson.user.name,
              email: registerResJson.user.email,
              image: registerResJson.user.profile_pic_id,
              username: registerResJson.user.username,
              stripe_customer_id: registerResJson.user.stripe_customer_id,
              isRegistered: false,
            };
          } else {
            console.error("Registration Failed");
            return null;
          }
        }

        if (res.status === 200 && user) {
          return {
            id: user.id.toString(),
            name: user.name,
            email: user.email,
            image: user.profile_pic_id,
            username: user.username,
            stripe_customer_id: user.stripe_customer_id,
            isRegistered: true,
          };
        }

        return null;
      }) as any,
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
        session.user.username = token.uname;
        session.user.profile_pic_id = token.pic_id;
        session.user.stripe_customer_id = token.ucustomer_id;
        session.user.email = token.email; // Google Auth email
        session.user.fullName = token.fullName;
        session.user.isRegistered = token.isRegistered;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
        token.uname = user.username;
        token.pic_id = user.profile_pic_id;
        token.ucustomer_id = user.stripe_customer_id;
        token.email = user.email ? user.email.toLowerCase() : undefined; // Google Auth email
        token.fullName = user.name;
        token.isRegistered = user.isRegistered;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
