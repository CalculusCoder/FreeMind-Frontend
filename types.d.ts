// import type { DefaultUser } from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     user?: DefaultUser & {
//       id: string;
//     };
//   }
// }

// declare module "next-auth/jwt/types" {
//   interface JWT {
//     uid: string;
//   }
// }

import type { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: DefaultUser & {
      id: string;
      username: string;
      profile_pic_id: string;
      stripe_customer_id: string;
      fullName: any;
      isRegistered: any;
    };
  }
}

declare module "next-auth/jwt/types" {
  interface JWT {
    uid: string;
    uname: string;
    pic_id: string;
    ucustomer_id: string;
  }
}

declare module "next-auth" {
  interface User {
    username: string;
    profile_pic_id: string;
    stripe_customer_id: string;
    isRegistered: any;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}
