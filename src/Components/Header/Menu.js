import React from 'react'
import classes from '../Header/Menu.module.css'
import {Link} from "react-router-dom";
const Menu = () => {
    return (
        <div className= {`${classes.Menu}`}>
            <div className = {classes.setDisplay}>
                <ul>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/Mac'>MAC</Link>
                    </li>
                    <li>
                        <Link to='/Iphone'>IPHONE</Link>
                    </li>
                    <li>
                        <a href=''>ABOUT US</a>
                    </li>
                    <li>
                        <a href=''>CONTACT</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}
export default Menu