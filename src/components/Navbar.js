import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <div>
                <img src={require ("../images/airbnb-logo.png")} />
                <p>airbnb</p>
            </div>
        </nav>
    )
}