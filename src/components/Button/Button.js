import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Button.module.css';

const button = () => (
    <div>
        <NavLink className = {styles.button} to="/search">
            Let's Begin
        </NavLink>
    </div>
    
)

export default button;