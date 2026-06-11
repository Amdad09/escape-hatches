import { useEffect, useRef } from "react";

const Dialogue = () => {
    const dialogRef = useRef(null);
    useEffect(() => {
        const dilog = dialogRef.current
        if (!dilog) return;

        dilog.showModal();

        return () => dilog.close();
    },[])
    return (
        <dialog ref={dialogRef}>This is an open dialog window</dialog>
    );
};

export default Dialogue;