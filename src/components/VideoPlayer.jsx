import { useEffect, useRef } from 'react';

export default function VideoPlayer({ isPlaying, src }) {
    const videoRef = useRef(null);
    console.log("VideoPlayer Render");
    useEffect(() => {
         console.log('Effect Running');
        if (isPlaying) {
            console.log('Rendering play ....');
            videoRef.current.play();
        } else {
            console.log('Rendering pause....');
            videoRef.current.pause();
        }
    }, [isPlaying]);

    return <video ref={videoRef} src={src}></video>;
}
