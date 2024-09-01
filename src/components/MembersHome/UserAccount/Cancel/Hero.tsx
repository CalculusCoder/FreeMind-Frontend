import React from "react";
import { useSession, signOut } from "next-auth/react";
import Router, { useRouter } from "next/router";
import { useCancelMembership } from "../Hooks/useCancelMembership";
import { useSubscriptionStatus } from "../Hooks/useSubscriptionStatus";

const Hero = () => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;

  const cancelMembershipMutation = useCancelMembership();

  const {
    data: status,
    isError,
    isLoading,
  } = useSubscriptionStatus({ userEmail: userEmail });

  return (
    <div className="p-8 text-center">
      <div className="max-w-4xl mx-auto">
        <header className="mt-5 text-center text-4xl font-semibold">
          Cancel FreeMind Membership
        </header>
        <p className="text-center text-2xl mt-10">
          We&apos;re really sad to see you go. Before you leave, please
          don&apos;t hesitate to get in touch with us if you have any concerns
          or issues you came across. We&apos;d also love to hear from you if you
          have any suggestions on how we can make our website even better.
        </p>
        <p className="mt-6 font-semibold text-lg">
          Subscription status: {status}
        </p>
        <button
          className="bg-black text-lg hover:bg-purple-600 hover:ease-in hover:duration-200  rounded-full py-3 px-6 mt-11 font-medium text-white w-40 xl:w-48"
          onClick={() => cancelMembershipMutation.mutate({ userEmail })}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Hero;
