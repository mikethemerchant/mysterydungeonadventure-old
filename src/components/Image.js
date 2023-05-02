import { useEffect } from "react";
import { useState } from "react";

function Image ({imageId}) {
    const [image, setImage] = useState(16)

    useEffect(() => {
        getImage(imageId)
    }, [imageId])

    async function getImage(id) {
        // set image name from json file
        // const data = await loadJson('./monsters.json', id);
        // setImage('img/' + data[0].image);
        setImage('Dragon.png');
    }

    // async function loadJson(file, id) {
    //     try {
    //         const response = await fetch(file);
    //         const data = await response.json();
    //         return data.filter(data => data.id === id);
    //     } catch (error) {
    //         console.error('Error loading JSON file:', error);
    //     }
    // }

    return (
        <div>
            <img alt="center image" src="img/Dragon.png" width="500" height="500"></img>
        </div>
    )
}

export default Image;