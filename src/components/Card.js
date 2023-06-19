import React from "react";
import "./Card.css";

export default function Card(props) {
    let badgeText;
    if ( props.openSpots === 0 ) {
        badgeText = "SOLD OUT";
    } else if ( props.location === "Online" ) {
        badgeText = "ONLINE";
    }
    return (
        <div className="cardContainer">
            <div className="card">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={`../images/${props.img}`} className="card--image"></img>
                <div className="card--stats">
                    <img src="../images/star.png" className="card--star"></img>
                    <span>{props.rating}</span>
                    <span className="gray">({props.reviewCount}) ● </span>
                    <span className="gray">{props.location}</span>
                </div>
                <p className="card--title">{props.title}</p>
                <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}