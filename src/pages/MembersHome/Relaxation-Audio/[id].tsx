import { useRouter } from "next/router";
import AudioPlayer from "@/components/MembersHome/Relaxation-Audio/AudioPlayer";
import Image from "next/image";
import { withAuthProtection } from "../../../../withAuthProtection";
import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Head from "next/head";

// Redefine the audios array
const audios = [
  {
    fileName:
      "https://res.cloudinary.com/dlogcew99/video/upload/v1686321656/ArcticWind_fhoip6.mp3",
    displayName: "Arctic Wind",
    image: "/images/Audios/Arctic.png",
    description: "Arctic Wind - FreeMind Recovery",
  },
  {
    fileName:
      "https://res.cloudinary.com/dlogcew99/video/upload/v1686321685/CalmWaves_slnihk.mp3",
    displayName: "Calm Waves",
    image: "/images/Audios/Waves.png",
    description: "Calm Waves - FreeMind Recovery",
  },
  {
    fileName:
      "https://res.cloudinary.com/dlogcew99/video/upload/v1686321705/Fireplace_u0clvi.mp3",
    displayName: "Fire Place",
    image: "/images/Audios/Fire.png",
    description: "Fire Place - FreeMind Recovery",
  },
  {
    fileName:
      "https://res.cloudinary.com/dlogcew99/video/upload/v1686321733/ForestStream_qi8xil.mp3",
    displayName: "Forest Stream",
    image: "/images/Audios/Forest.png",
    description: "Forest Strean - FreeMind Recovery",
  },
  {
    fileName:
      "https://res.cloudinary.com/dlogcew99/video/upload/v1686321754/LightRainThunder_it3odw.mp3",
    displayName: "Light Rain and Thunder",
    image: "/images/Audios/Rain.png",
    description: "Light Rain and Thunder - FreeMind Recovery",
  },
  {
    fileName:
      "https://res.cloudinary.com/dlogcew99/video/upload/v1686321781/WaterStream_bitro6.mp3",
    displayName: "Bamboo Water Stream",
    image: "/images/Audios/Bamboo.png",
    description: "Bamboo Water Stream - FreeMind Recovery",
  },
];

const AudioPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Check if id is undefined or an array
  if (!id) return <div>Loading...</div>;

  // Find the corresponding audio object
  const audio = audios.find(
    (a) => a.fileName.split("/").pop()?.replace(/\./g, "-") === id
  );
  if (!audio) return <div>No audio found</div>;

  return (
    <NavbarLayout>
      <Head>
        <title>{audio.description}</title>
        <meta name="description" content={audio.description} />
        <meta property="og:title" content={audio.description} />
        <meta
          name="keywords"
          content="anxiety, recovery, anxiety disorders, treatment strategies, mental health, FreeMind, support"
        />

        <meta property="og:description" content={audio.description} />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div>
        <h1 className="text-center font-semibold text-4xl mt-8">
          Now Playing Audio: {audio.displayName}
        </h1>
        <div className="flex justify-center mt-20">
          <Image
            className="rounded-3xl"
            height={500}
            width={500}
            alt={audio.displayName}
            src={audio.image}
          />
        </div>
        <AudioPlayer audioUrl={audio.fileName} />
      </div>
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default AudioPage;
