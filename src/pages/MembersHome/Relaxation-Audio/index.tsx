import AudioList from "@/components/MembersHome/Relaxation-Audio/AudioList";
import { withAuthProtection } from "../../../../withAuthProtection";
import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Head from "next/head";

const audios = [
  {
    fileName:
      "https://res.cloudinary.com/dlogcew99/video/upload/v1686321656/ArcticWind_fhoip6.mp3",
    displayName: "Arctic Wind",
  },
  {
    fileName:
      "https://res.cloudinary.com/dlogcew99/video/upload/v1686321685/CalmWaves_slnihk.mp3",
    displayName: "Calm Waves",
  },
  {
    fileName:
      "https://res.cloudinary.com/dlogcew99/video/upload/v1686321705/Fireplace_u0clvi.mp3",
    displayName: "Fire Place",
  },
  {
    fileName:
      "https://res.cloudinary.com/dlogcew99/video/upload/v1686321733/ForestStream_qi8xil.mp3",
    displayName: "Forest Stream",
  },
  {
    fileName:
      "https://res.cloudinary.com/dlogcew99/video/upload/v1686321754/LightRainThunder_it3odw.mp3",
    displayName: "Light Rain and Thunder",
  },
  {
    fileName:
      "https://res.cloudinary.com/dlogcew99/video/upload/v1686321781/WaterStream_bitro6.mp3",
    displayName: "Bamboo Water Stream",
  },
];

const RelaxationAudio = () => {
  return (
    <NavbarLayout>
      <Head>
        <title>Relaxation Audio - FreeMind Anxiety Recovery</title>
        <meta
          name="description"
          content="Relaxation Audio - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:title"
          content="Relaxation Audio - FreeMind Anxiety Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, recovery, anxiety disorders, treatment strategies, mental health, FreeMind, support"
        />

        <meta
          property="og:description"
          content="Relaxation Audio - FreeMind Anxiety Recovery"
        />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div>
        <h1 className="text-center text-4xl font-semibold mt-8">
          Select an Audio to Play
        </h1>
        <AudioList audios={audios} />
      </div>
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default RelaxationAudio;
