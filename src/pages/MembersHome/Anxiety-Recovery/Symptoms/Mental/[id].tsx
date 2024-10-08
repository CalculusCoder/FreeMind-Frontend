import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import symptomsData from "../../../../../data/MembersHome/mentalsymptoms.json";
import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";

interface Symptom {
  id: string;
  title: string;
  description: string;
  cause: string;
  treatment: string;
  myexperience: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = symptomsData.map((symptom: Symptom) => ({
    params: { id: symptom.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const params = context.params as { id: string };

  const symptom = symptomsData.find(
    (symptom: Symptom) => symptom.id === params.id
  );

  if (!symptom) {
    return {
      notFound: true,
    };
  }

  return {
    props: { symptom },
  };
};

const Symptom = ({ symptom }: { symptom: Symptom }) => {
  return (
    <NavbarLayout>
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center">{symptom.title}</h1>
          <header className="text-center text-3xl mt-24">Description</header>
          <p className="text-lg text-center mt-8">{symptom.description}</p>
          <header className="text-center text-3xl mt-24">Cause</header>
          <p className="text-lg mt-8 text-center">{symptom.cause}</p>
          <header className="text-center text-3xl mt-24">
            How to Overcome it
          </header>
          <p className="text-lg mt-8 text-center">{symptom.treatment}</p>
          <header className="text-center text-3xl mt-24">My experience</header>
          <p className="text-lg mt-8 text-center">{symptom.myexperience}</p>
          <div className="max-w-4xl mx-auto border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-10">
            <p className="text-lg mt-4 text-center">
              Some symptoms may outlast others. You may recover from several
              symptoms and then experience new symptoms in the following days or
              weeks; this is normal.
            </p>
          </div>
          <div className="max-w-4xl mx-auto border-2 border-purple-500 p-6 rounded-lg shadow-lg mt-10">
            <p className="text-lg mt-4 text-center">
              Remember, our goal is to eliminate anxiety, fix underlying issues,
              and let our nervous system recover. Once dealt with, all symptoms
              will subside. If we focus too much on individual symptoms, our
              efforts will be for nothing. Always ensure you keep up with all of
              the FreeMind techniques: relaxation techniques, stress management
              techniques, meditation, regular exercise, R.A.R.L.M, etc.
            </p>
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
};

export default Symptom;
