import React from 'react';
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div>
            <ul className="un-list">
                <div className="li-item-container">
                    <li className="li-list">
                        <Link className="link" to="/">
                            Home
                        </Link>
                    </li>
                </div>
            </ul>
            
        </div>
    )
}

export default Nav
