import React from "react"
import './Die.css';

export default function Die(props) {

    const styles = {"backgroundColor": props.isHeld ? "greenyellow" : "whitesmoke"}

    return (
        <main>
            <div className="cube-face"
                 style={styles}
                 onClick={props.holdDice}
            >
                <p className="cube">{props.value}</p>
            </div>
        </main>
    )
}