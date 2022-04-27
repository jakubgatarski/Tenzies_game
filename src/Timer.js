import {useElapsedTime} from "use-elapsed-time";
import React from "react";


export default function Timer(props) {

    const options = {
        isPlaying: props.isPlaying
        //duration: 4,
        //onComplete: () => ({ shouldRepeat: props.isPlaying, newStartAt: 0})
    };
    const { elapsedTime , reset} = useElapsedTime(options);
    //React.useEffect(reset(2),[])
    //{elapsedTime.toFixed(2)}
    return <div style={{ fontSize: 46 }}>{elapsedTime.toFixed(2)+" seconds"}</div>;
};