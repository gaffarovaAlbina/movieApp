import React from "react";
import "./Navigation.css";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <div className="nav__container">
            <Link to="/">Главная</Link>
            <Link
                to="/about"
                state={{
                    fromLocation: true,
                }}
            >
                О проекте
            </Link>
        </div>
    )
}

export default Navigation;