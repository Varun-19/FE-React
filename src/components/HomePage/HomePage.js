import React from 'react';

import Header from './Header/Header';
import Button from '../Button/Button';
import styles from './HomePage.module.css';

const homePage = (props) => {
    return (
        <main className = {styles.homePage}>
            <Header />
            <p> <span>L</span>orem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            <Button />
        </main>
    )
}

export default homePage;