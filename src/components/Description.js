import { useEffect, useState } from "react";
import rooms from '../data/rooms.json';

function Description({arrayIndex}) {
    const [text, setText] = useState('');

    useEffect(() => {
        setText(rooms[arrayIndex].description)
    }, [arrayIndex])

    return (
        <div>
            <p>{text}</p>
        </div>
    )
}

export default Description;