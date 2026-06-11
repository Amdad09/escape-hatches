import { useRef } from "react";

export default function Form() {
    const myRef = useRef(null);
    
    const handleClick = () => {
        console.log(myRef.current);
        myRef.current.focus();
    }

    return (
        <>
            <input  ref={myRef}/>
            <button onClick={handleClick}>Focus the input</button>
        </>
    );
}
