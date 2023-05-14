import { useEffect, useState } from "react";
import data from '../data/monsters.json';

function Description({arrayIndex}) {
    const [text, setText] = useState('');

    useEffect(() => {
        setText(data[arrayIndex].description)
    }, [arrayIndex])

    return (
        <div style={{border: '4px solid black'}} >
            {text}
        </div>
    )
}

export default Description;