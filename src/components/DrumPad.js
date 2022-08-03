import React, { useEffect, useState, useRef, useContext } from "react";
import './../App.css'
import { DisplayContext } from "../DisplayContext";

export default function DrumPad({ letter, audioLink, title , trig}) {

    const audioRef = useRef(null);
    const setDisp = useContext(DisplayContext);
    const [trigger, setTrigger] = useState(false);
    useEffect(() => {
        if (trigger || trig) {
            playAudio()
            console.debug(`Triggered ${letter} pad`);
        }else{
            audioRef.current.currentTime = 0;
        }
    }, [trigger,trig])

    const playAudio = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setTrigger(false)
        setDisp(title);
    }

    return (
        <div
            onClick={()=>{setTrigger(true)}}
            className='drum-pad'
            id={`${title}`}
        >
            {letter}
            <audio preload='auto' className="clip" id={`${letter}`} ref={audioRef} src={audioLink} />
        </div>
    );
}
