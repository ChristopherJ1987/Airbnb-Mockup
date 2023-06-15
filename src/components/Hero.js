import React from "react";
import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">
            <img src={require ("../images/airbnb-grid.png")} className="photoGrid"/>
            <h1 className="heroHeader">Online Experiences</h1>
            <p className="heroText">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}