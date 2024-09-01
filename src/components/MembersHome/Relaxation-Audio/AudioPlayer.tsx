import { useState } from "react";

type AudioPlayerProps = {
    audioUrl: string;
};
  
const AudioPlayer = ({ audioUrl }: AudioPlayerProps) => {
    const [isLooping, setIsLooping] = useState<boolean>(false);

    const handleLoopToggle = () => {
        setIsLooping(!isLooping)
    }
  
    return (
        <div>
            <div className="flex justify-center mt-10">
                <audio controls loop={isLooping}>
                    <source src={audioUrl} type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className="flex justify-center mt-4 pb-10">
                <button onClick={handleLoopToggle}>
                    {isLooping ? "Disable Loop" : "Enable Loop"}
                </button>
            </div>
        </div>
    );
};
  
export default AudioPlayer;
