import { useEffect, useState } from "react";
import data from '../data/monsters.json';

function Image ({arrayIndex}) {

    const [imageName, setImageName] = useState(0);

    useEffect(() => {
        setImageName(data[arrayIndex].image);
    }, [arrayIndex]);

    return (
        <>
            <img src={`images/${imageName}`} alt="display name not found" />
        </>
    )
}

export default Image;