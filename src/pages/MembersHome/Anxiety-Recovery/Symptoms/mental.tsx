import Link from "next/link";
import symptomsData from "../../../../data/MembersHome/mentalsymptoms.json";
import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";

const MentalSymptoms = () => {
  return (
    <NavbarLayout>
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-4xl font-bold text-center mb-8">
            Mental Symptoms
          </header>
          <div className="flex flex-col gap-12 items-center">
            {symptomsData.map((symptom) => (
              <Link
                key={symptom.id}
                href={`/MembersHome/Anxiety-Recovery/Symptoms/Mental/${symptom.id}`}
              >
                <div className="w-80 md:w-[500px] bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 dark:from-purple-900 dark:via-blue-900 dark:to-cyan-900 text-white text-center text-2xl p-4 rounded-xl shadow-lg">
                  {symptom.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
};

export default MentalSymptoms;
