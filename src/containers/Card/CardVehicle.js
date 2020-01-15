import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import swal from 'sweetalert';

import * as actionCreators from '../../store/actions/Vehicle';
import ButtonCard from '../../components/Button/ButtonCard/ButtonCard';
import styles from './CardPlanet.module.css';

class cardVehicle extends Component {

    render () {
        if(this.props.init.vehicle) {
            let index = this.props.vehicle.currentVehicle;
            let name = this.props.init.vehicle[index].name;
            let maxDistance = this.props.init.vehicle[index].max_distance;
            let speed = this.props.init.vehicle[index].speed;
            let totalNo = this.props.init.vehicle[index].total_no;
            let disabled = false;
            let vehicleList = this.props.vehicle.selectedVehicle;

            if(vehicleList.length === 4) {
                disabled = true;
            }

            if(totalNo === 0) {
                disabled = true;
            }

            const checkDistance = (name,maxDistance) => {
                let planetList = this.props.planet.selectedPlanetDistance;
                let length = planetList.length - vehicleList.length;
                let index = vehicleList.length;

                switch(length) {
                    case 0 :
                        swal("Please select a Planet first!");
                        break;
                    default :
                        if(planetList[index] > maxDistance) {
                            swal("Space Vehicle cannot reach there!");
                        } else {
                            this.props.select(name);
                            this.props.decVehicleCount(name);
                        }    
                }
                
            }

            
            return (
                <div className={styles.card}>
                    <div className={styles.imgSection}/>
                    <h4 className={styles.heading}>
                        <span>
                            <FontAwesomeIcon className={styles.icon} icon="rocket"/>&nbsp;{name}
                        </span> 
                    </h4>
                    <ul>
                        <li><span className={styles.miniHeading}>Max Distance</span></li> 
                        <li>{maxDistance}</li>
                        <li><span className={styles.miniHeading}>Speed</span> </li>
                        <li>{speed} Megamiles/hr</li>
                        <li>Available : {totalNo}</li>
                    </ul>
                    <ButtonCard 
                    clickedLeft = {this.props.navigateLeft} 
                    clickedRight = {this.props.navigateRight}
                    select = {() => {checkDistance(name,maxDistance)}}
                    disabled = {disabled} />
                </div>
                )
        }
        else {
            return (
                <div></div>
            )
        }
    }
   
}

const mapStateToProps = state => {
    return {
        init : state.initialState,
        planet : state.planet,
        vehicle : state.vehicle
    }
}

const mapDisptacherToProps = dispatch => {
    return {
        navigateLeft : () => dispatch(actionCreators.navLeftVehicle()),
        navigateRight : () => dispatch(actionCreators.navRightVehicle()),
        select : (name) => dispatch(actionCreators.selectVehicle(name)),
        decVehicleCount : (name) => dispatch(actionCreators.decVehicleCount(name))
    }
}

export default connect(mapStateToProps,mapDisptacherToProps)(cardVehicle);