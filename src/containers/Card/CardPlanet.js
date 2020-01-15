import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/Planet';

import ButtonCard from '../../components/Button/ButtonCard/ButtonCard';
import styles from './CardPlanet.module.css';

class CardPlanet extends Component {
    render() {
        if(this.props.init.planet) {
            let index = this.props.planet.currentPlanet;
            let name = this.props.init.planet[index].name;
            let distance = this.props.init.planet[index].distance;
            let disabled = false;

            if(this.props.planet.selectedPlanet.includes(name)){
                disabled = true;
            }

            if(this.props.planet.selectedPlanet.length === 4) {
                disabled = true;
            }
            
            return(
                <div className={styles.card}>
                    <div className={styles.imgSection}/>
                    <h4 className={styles.heading}>
                        <span> 
                            <FontAwesomeIcon className={styles.icon} icon="globe"/>
                            &nbsp;{name}
                        </span>   
                    </h4>
                    <p className={styles.content}> 
                        From Lengaburu
                        <span className={styles.distance}>{distance}</span>
                        MegaMiles
                    </p> 
                    <ButtonCard 
                        clickedLeft={this.props.navigateLeft} 
                        clickedRight={this.props.navigateRight} 
                        select={() => {this.props.select(name,distance)} }
                        disabled = {disabled}/>
                </div>  

            )
        }
        return(
            <div className={styles.card}>
                <div className={styles.imgSection}/>
                <h4 className={styles.heading}>
                    <span> <FontAwesomeIcon className={styles.icon} icon="globe"/> Donlon</span>   
                </h4>
                <p className={styles.content}> 
                    From Lengaburu
                    <span className={styles.distance}>100</span>
                    MegaMiles
                </p> 
                <ButtonCard />             
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        init : state.initialState,
        planet : state.planet
    }
}

const mapDisptacherToProps = dispatch => {
    return {
        navigateLeft : () => dispatch(actionCreators.navLeft()),
        navigateRight : () => dispatch(actionCreators.navRight()),
        select : (name,distance) => dispatch(actionCreators.selectPlanet(name,distance))
    }
}

export default connect(mapStateToProps,mapDisptacherToProps)(CardPlanet);