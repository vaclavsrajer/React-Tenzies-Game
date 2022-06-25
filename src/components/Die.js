import React from "react"
import "./Die.css"

export default function Die({dice, toggleHeldOn}) {
    return (
        <div  onClick={() => toggleHeldOn(dice.id)}className={dice.isHeld ? "die-face held" : "die-face"}>
            <h2 className="die-num">{dice.number}</h2>
        </div>
    )
}