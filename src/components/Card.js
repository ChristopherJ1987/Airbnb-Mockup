import React from "react";
import "./Card.css";

export default function Card() {
    return (
        <div className="card">
            <img src={require ("../images/zaferes.jpeg")} className="card--image"></img>
            <div className="card--stats">
                <img src={require ("../images/star.png")} className="card--star"></img>
                <span>5.0</span>
                <span className="gray">(6) ● </span>
                <span className="gray"> USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}