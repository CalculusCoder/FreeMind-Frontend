import { useRouter } from 'next/router';

interface Props {
  audios: { fileName: string; displayName: string; }[];
}
const AudioList: React.FC<Props> = ({audios}) => {
  const router = useRouter();

  const handleClick = (fileName: string) => {
    const audioId = fileName.split("/").pop()?.replace(/\./g, '-');
    router.push(`/MembersHome/Relaxation-Audio/${audioId}`);
  };
  
  return (
    <div className='mt-10 flex flex-wrap gap-10 justify-around'>
  {audios.map((audio, idx) => (
    <button 
      key={idx} 
      onClick={() => handleClick(audio.fileName)}
      className='w-1/2 mb-5 mr-2 ml-2 px-8 py-3 border border-transparent font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-blue-500 text-center hover:from-cyan-300 hover:to-purple-500 text-2xl hover:transition-all hover:ease-in hover:duration-300'
    >
      
      {audio.displayName}
    </button>
  ))}
</div>

  
  );
};

export default AudioList;
