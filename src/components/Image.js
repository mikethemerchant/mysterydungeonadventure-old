import { useEffect, useState } from "react";
import rooms from '../data/rooms.json';

function Image ({arrayIndex}) {

    const [imageName, setImageName] = useState(0);

    useEffect(() => {
        setImageName(rooms[arrayIndex].image);
    }, [arrayIndex]);

    return (
        <>
            <img src={`images/${imageName}`} alt="display name not found" height="500" width="500" />
        </>
    )
}

export default Image;