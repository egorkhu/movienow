import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";

export const Header = () => (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <Link className="header_link" to="/">
                        <p className="header_logo">#Movienow</p>
                    </Link>
                </div>
            </div>
        </header>
)