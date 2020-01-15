import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const header = (props) => {
    const style = {
        color: `${props.fontColor}`
    };
    return(
    <nav className = {styles.navigation}>
        <Link style = {style} to="/">Home</Link> 
        <Link style = {style} to="/search">Search</Link>
    </nav>
    )
}

export default header;