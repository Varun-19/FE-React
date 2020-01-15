import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ButtonCard.module.css'

const buttonCard = (props) => { 
    let btnStyle = styles.btn;
    if(props.disabled) {
        btnStyle = styles.disabled;
    }
    return (
    <div className={styles.nav}>
        <button className={styles.btnNav} onClick={props.clickedLeft}>
            <FontAwesomeIcon icon="chevron-left"/>
        </button>
        <button className={btnStyle} onClick={props.select} disabled = {props.disabled}>
            <span><FontAwesomeIcon icon="search-location"/></span>
        </button>
        <button className={styles.btnNav} onClick={props.clickedRight}>
            <FontAwesomeIcon icon="chevron-right"/>
        </button>
    </div>
    )
}
export default buttonCard;