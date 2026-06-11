import { useRef, useState } from "react";

export default function Stopwatch() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);

    let intervalrRef = useRef(null);

    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

       intervalrRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    let secondPass = 0;
    if (startTime != null && now != null) {
        secondPass = (now - startTime) / 1000;
    }

    function handleStop() {
        clearInterval(intervalrRef.current);
    }

    
    return (
        <>
            <h1>Time passed: {secondPass.toFixed(3)}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    );
}
