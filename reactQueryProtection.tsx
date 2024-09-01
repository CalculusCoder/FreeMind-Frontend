//Protection Page when FreeMind is a Paid service with STRIPE
//Protected page is using react query caching and loading

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import { checkMembershipStatus } from "./checkMembership";
import { useEffect } from "react";

export const useProtectedRoute = (paymentStatus: String) => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email || "";
  const isSignedIn = !!userEmail;
  const router = useRouter();

  const {
    data: isMember,
    error,
    isLoading,
    isError,
    status,
  } = useQuery(
    "membershipStatus",
    () => {
      if (!userEmail) {
        throw new Error("No User Email");
      }
      return checkMembershipStatus(userEmail);
    },
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60 * 24,
      enabled: !!userEmail,
    }
  );

  useEffect(() => {
    if (paymentStatus === "Free") {
      if (!userEmail) {
        router.push("/Home/Payment");
        return;
      }
      if (status === "loading" || status === "idle") {
        return;
      }
    } else {
      if (!userEmail) {
        router.push("/Home/Payment");
        return;
      }
      if (status === "loading" || status === "idle") {
        return;
      }

      if (isError || !isMember) {
        router.push("/Home/Payment");
      }
    }
  }, [userEmail, isError, isMember, router, status]);

  return { isLoading, isError, isMember, isSignedIn };
};

//Protection page for when FreeMind is Free.
// import { useRouter } from "next/router";
// import { useSession } from "next-auth/react";
// import { useEffect } from "react";

// export const useProtectedRoute = () => {
//   const { data: session, status } = useSession();
//   const userEmail = session?.user?.email || "";
//   const router = useRouter();

//   // Use status to determine loading state
//   const isLoading = status === "loading";
//   const isSignedIn = !!userEmail;

//   useEffect(() => {
//     if (status === "authenticated" && !isSignedIn) {
//       router.push("/Home/Signin");
//       return;
//     }
//   }, [isSignedIn, router, status]); // Added status to dependencies

//   return { isLoading, isSignedIn };
// };
