import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";

type ProtectedPageProps = {
  getServerSideProps?: (
    context: GetServerSidePropsContext
  ) => Promise<GetServerSidePropsResult<any>>;
};

export const withAuthProtection = ({
  getServerSideProps,
}: ProtectedPageProps = {}) => {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<any>> => {
    const session = await getSession(context);

    if (!session) {
      return {
        redirect: {
          destination: "/Home/Signin",
          permanent: false,
        },
      };
    }

    if (getServerSideProps) {
      return getServerSideProps(context);
    }

    return {
      props: { session },
    };
  };
};
