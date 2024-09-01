import Link from "next/link";
import symptomsData from "../../../../data/MembersHome/visualsymptoms.json";
import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";

const VisualSymptoms = () => {
  return (
    <NavbarLayout>
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-4xl font-bold text-center mb-8">
            Visual Symptoms
          </header>
          <div className="flex flex-col gap-12 items-center">
            {symptomsData.map((symptom) => (
              <Link
                key={symptom.id}
                href={`/MembersHome/Anxiety-Recovery/Symptoms/Visual/${symptom.id}`}
              >
                <div className="w-80 md:w-[500px] bg-gradient-to-r from-teal-300 via-cyan-400 to-violet-300 dark:from-purple-900 dark:via-blue-900 dark:to-cyan-900 text-white text-center text-2xl p-4 rounded-xl shadow-lg">
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

export default VisualSymptoms;
