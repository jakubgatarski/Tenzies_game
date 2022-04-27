import './App.css';
import React from "react"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import { useElapsedTime } from 'use-elapsed-time'
import Die from './Die.js'
import Timer from './Timer'

function App() {
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [buttonText, setButtonText] = React.useState("rOLL@")
    const [time, setTime] = React.useState(true)
    //const [newTime, setNewTime] = React.useState("0")

    React.useEffect(()=>{
        //console.log("State changed")
        let checkValue = dice[0].value
        if(dice.every(die => die.value == checkValue)&&
            (dice.every(die => die.isHeld === true)))
        {
            setTenzies(true)
            setTime(false) //stop the time after win !
            //setNewTime(new Date().getTime())
            setButtonText("nEW gAME#")

        }
    }, [dice])

    function allNewDice() {
        let newDice = []
        for (let i = 0; i < 2; i++) {
            let die = {

                "value": Math.floor(Math.random() * 6 + 1),
                "isDieClicked": false,
                id: nanoid()
            }
            newDice.push(die)
        }
        return newDice
    }

    function rollDice(){
        //setDice(allNewDice())
        if(tenzies == false) {
            setDice(oldDice => oldDice.map(die => {
                if (die.isHeld === true) {
                    return die
                } else
                    return {...die, value: Math.floor(Math.random() * 6 + 1), isHeld: false, id: nanoid()}
            }))
        }
        else {
            setTenzies(false)
            setButtonText("ROLL!!!")//set tenzies to fals eto start new game

            setDice(allNewDice())   //generate new dice
            setTime(true)

        }
    }


    function holdDice(id){
        console.log(id)
        setDice(oldDice => oldDice.map(die=>{
            return die.id === id ?
                {...die, isHeld: !die.isHeld}:
                die
        }))
    }

    const diceList = dice.map(die=> (<Die value={die.value} isHeld={die.isHeld} key={die.id} holdDice={() => holdDice(die.id)} />))
    //holdDice(diceList)

    // timerrr============================================================================================================================




    return (
        <div className="App">

            {tenzies == true && <Confetti />}
            <h1 className="game-title">TENZIES</h1>
            <div className="cubes-div">
                {diceList}
            </div>
            <Timer isPlaying={time}  />
            <button className="roll-button" onClick={rollDice}>{buttonText}</button>


        </div>
    );
}

export default App;
