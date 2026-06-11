import { useEffect, useRef } from "react";

const Animation = () => {
    const ref = useRef(null);
    useEffect(() => {
        const node = ref.current;
        node.style.opacity = 1;

        return () => node.style.opacity = 0;
    },[])
    return (
        <div>
            <h3 ref={ref}>Here is an animation</h3>
        </div>
    );
};

export default Animation;