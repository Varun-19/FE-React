import React , { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/HomePage/Header/Header';
import CardPlanet from '../Card/CardPlanet';
import CardVehicle from '../Card/CardVehicle';
import DisplayList from '../../containers/DisplayList/DisplayList';
import ButtonSearch from '../../components/Button/ButtonSearch/ButtonSearch';
import styles from './Search.module.css';

class Search extends Component {
        
    render () {
        return (
            <section className={styles.search}>
                <Header fontColor = "black"/>
                <div className = {styles.card}>
                    <CardPlanet />
                    <CardVehicle />
                    <DisplayList />
                    <ButtonSearch />
                </div>
            </section>
        )
    }
} 

const mapStateToProps = state => {
    return {
        planet : state.planet,
        vehicle : state.vehicle
    }
}


export default connect(mapStateToProps)(Search);