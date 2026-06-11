import { useEffect, useRef } from 'react';
import imageMap from '../assets/world_map-removebg-preview.png'
const Map = () => {
    const imageRef = useRef(null);

    useEffect(() => {
        imageRef.current.setZoomLevel(1.5);
    }, [])
    
    return (
        <div>
            <img ref={imageRef} src={imageMap} alt="World map"  />
        </div>
    );
};

export default Map;