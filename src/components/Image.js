import { useEffect, useState } from "react";
import data from '../data/monsters.json';

function Image ({arrayIndex}) {

    const [imageName, setImageName] = useState(0);

    useEffect(() => {
        setImageName(data[arrayIndex].image);
    }, [arrayIndex]);

    return (
        <>
            <img src={`images/${imageName}`} alt="display name not found" style={{border: '4px solid black'}}  
            // Q: how do I make the image stretch to fit the div?
            // A: https://stackoverflow.com/questions/318630/get-real-image-width-and-height-with-javascript-in-safari-chrome
            />

        </>
    )
}

export default Image;