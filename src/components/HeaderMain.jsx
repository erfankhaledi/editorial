import React from "react"
import "../styles.css"

export default function HeaderMain(){
    return (
        <header id="header">
            <a href="#" className="logo">
                <strong>Editorial </strong>
                by HTML5 UP
            </a>
            <ul className="icons">
                <li>
                    <a href="#" className="icon brands fa-twitter">
                        <i className="bi bi-twitter"></i>
                        <span className="label">Twitter</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon brands fa-facebook-f">
                        <i className="bi bi-facebook"></i>
                        <span className="label">Facebook</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon brands fa-snapchat-ghost">
                        <i className="bi bi-snapcchat-fill"></i>
                        <span className="label">Snapchat</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon brands fa-instagram">
                        <i className="bi bi-instagram"></i>
                        <span className="label">Instagram</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon brands fa-medium-m">
                        <i className="bi bi-medium"></i>
                    </a>
                </li>
            </ul>
        </header>
    )
}