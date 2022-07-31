import React, { useEffect, useState, useRef } from "react";
import './../App.css'

export default function DrumPad({ letter, audioLink, title }) {

    const audioRef = useRef(null);

    const [trigger, setTrigger] = useState(false);
    useEffect(() => {
        if (trigger) {
            playAudio()
            console.debug(`Triggered ${letter} pad`);
        }
    }, [trigger, letter])

    const playAudio = () => {
        console.debug('in play audio');
        // const audioPromise = audio.play()
        // if (audioPromise !== undefined) {
        //     audioPromise
        //         .then(_ => {
        //             // autoplay started
        //             console.info('audio started');

        //         })
        //         .catch(err => {
            //             // catch dom exception
            //             console.error(err)
            //         })
            // }

            audioRef.current.currentTime = 0;

            audioRef.current.play();
            setTrigger(false)
    }

    const onKey = (e) => {
        console.debug(`Key ${e.key} was pressed.`);

        if (e.key === letter.toLowerCase())
            setTrigger(true);
    }
    return (
        <div
            onClick={()=>{setTrigger(true)}}
            onKeyDown={onKey}
            className='drum-pad'
            id={`${title}`}
            >
            {letter}
            <audio preload='auto' className="clip" id={`${letter}`} ref={audioRef} src={audioLink} />
        </div>
    );
}
