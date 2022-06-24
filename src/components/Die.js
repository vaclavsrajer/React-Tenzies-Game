import React from "react"
import "./Die.css"

export default function Die({number}) {
    return (
        <div className="die-face">
            <h2 className="die-num">{number}</h2>
        </div>
    )
}