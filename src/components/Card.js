import React from "react";
import "./Card.css";

export default function Card() {
    return (
        <div className="cardContainer">
            <div className="card">
                <img src={require ("../images/yoga.jpg")} className="card--image"></img>
                <div className="card--stats">
                    <img src={require ("../images/star.png")} className="card--star"></img>
                    <span>5.0</span>
                    <span className="gray">(6) ● </span>
                    <span className="gray"> USA</span>
                </div>
                <p>Yoga Retreat with Denver Yogis</p>
                <p><span className="bold">From $234</span> / person</p>
            </div>
            <div className="card">
                <img src={require ("../images/boxing.jpg")} className="card--image"></img>
                <div className="card--stats">
                    <img src={require ("../images/star.png")} className="card--star"></img>
                    <span>5.0</span>
                    <span className="gray">(6) ● </span>
                    <span className="gray"> USA</span>
                </div>
                <p>You Hit Like a Bit@# Studio</p>
                <p><span className="bold">From $444</span> / person</p>
            </div>
            <div className="card">
                <img src={require ("../images/swimming.jpg")} className="card--image"></img>
                <div className="card--stats">
                    <img src={require ("../images/star.png")} className="card--star"></img>
                    <span>5.0</span>
                    <span className="gray">(6) ● </span>
                    <span className="gray"> USA</span>
                </div>
                <p>Diving with Oceanic Travel Co.</p>
                <p><span className="bold">From $136</span> / person</p>
            </div>
            <div className="card">
                <img src={require ("../images/horsebackRiding.jpg")} className="card--image"></img>
                <div className="card--stats">
                    <img src={require ("../images/star.png")} className="card--star"></img>
                    <span>5.0</span>
                    <span className="gray">(6) ● </span>
                    <span className="gray"> USA</span>
                </div>
                <p>Horseback Riding with Lucky Ranch</p>
                <p><span className="bold">From $155</span> / person</p>
            </div>
            <div className="card">
                <img src={require ("../images/hiking.jpg")} className="card--image"></img>
                <div className="card--stats">
                    <img src={require ("../images/star.png")} className="card--star"></img>
                    <span>5.0</span>
                    <span className="gray">(6) ● </span>
                    <span className="gray"> USA</span>
                </div>
                <p>Hiking Trip Along Great Smokey Trails</p>
                <p><span className="bold">From $88</span> / person</p>
            </div>
            <div className="card">
                <img src={require ("../images/moonTrip.jpg")} className="card--image"></img>
                <div className="card--stats">
                    <img src={require ("../images/star.png")} className="card--star"></img>
                    <span>5.0</span>
                    <span className="gray">(6) ● </span>
                    <span className="gray"> USA</span>
                </div>
                <p>Moon Walk at the Space Museum</p>
                <p><span className="bold">From $45</span> / person</p>
            </div>
            <div className="card">
                <img src={require ("../images/moonTrip.jpg")} className="card--image"></img>
                <div className="card--stats">
                    <img src={require ("../images/star.png")} className="card--star"></img>
                    <span>5.0</span>
                    <span className="gray">(6) ● </span>
                    <span className="gray"> USA</span>
                </div>
                <p>Moon Walk at the Space Museum</p>
                <p><span className="bold">From $45</span> / person</p>
            </div>
            <div className="card">
                <img src={require ("../images/moonTrip.jpg")} className="card--image"></img>
                <div className="card--stats">
                    <img src={require ("../images/star.png")} className="card--star"></img>
                    <span>5.0</span>
                    <span className="gray">(6) ● </span>
                    <span className="gray"> USA</span>
                </div>
                <p>Moon Walk at the Space Museum</p>
                <p><span className="bold">From $45</span> / person</p>
            </div>
        </div>
    )
}