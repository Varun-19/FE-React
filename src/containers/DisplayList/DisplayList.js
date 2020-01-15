import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/List';

import styles from './DisplayList.module.css';
import { vehicle } from '../../store/actions/actionTypes';


class DisplayList extends React.Component {
    render() {
        let planetList = [ ...this.props.planet.selectedPlanet];
        let vehicleList = [ ...this.props.vehicle.selectedVehicle];
        let planetLength = planetList.length;
        let vehicleLength = vehicleList.length;
        for(let i = 0; i < 4 - planetLength; i++) {
            planetList.push(' --- ');
        }
        for(let i = 0; i < 4 - vehicleLength; i++) {
            vehicleList.push(' --- ');
        }
        
    return (
        <div className={styles.list}>
            <h3 className={styles.heading}>List of Selected Planets</h3>
            <ul>
                <li>
                    <span><FontAwesomeIcon icon="globe"/> {planetList[0]}</span>
                    <span><FontAwesomeIcon icon="rocket"/> {vehicleList[0]}</span>
                    <span><FontAwesomeIcon onClick={() => { this.props.delList(0,vehicleList[0])}} className={styles.icon} icon={['far','minus-square']}/></span>
                </li>
                <li>
                    <span><FontAwesomeIcon icon="globe"/> {planetList[1]}</span>
                    <span><FontAwesomeIcon icon="rocket"/> {vehicleList[1]}</span>
                    <span><FontAwesomeIcon onClick={() => { this.props.delList(1,vehicleList[1])}} className={styles.icon} icon={['far','minus-square']}/></span>
                </li>
                <li>
                    <span><FontAwesomeIcon icon="globe"/> {planetList[2]}</span>
                    <span><FontAwesomeIcon icon="rocket"/> {vehicleList[2]}</span>
                    <span><FontAwesomeIcon onClick={() => { this.props.delList(2,vehicleList[2])}} className={styles.icon} icon={['far','minus-square']}/></span>
                </li>
                <li>
                    <span><FontAwesomeIcon icon="globe"/> {planetList[3]}</span>
                    <span><FontAwesomeIcon icon="rocket"/> {vehicleList[3]}</span>
                    <span><FontAwesomeIcon onClick={() => { this.props.delList(3,vehicleList[3])}} className={styles.icon} icon={['far','minus-square']}/></span>
                </li>                                    
            </ul>
        </div>
    )
    }
}

const mapStateToProps = state => {
    return {
        planet : state.planet,
        vehicle : state.vehicle
    }
}

const mapDispatcherToProps = dispatch => {
    return {
        delList : (index,name) => {
            dispatch(actionCreators.delPlanet(index))
            dispatch(actionCreators.delVehicle(index))
            dispatch(actionCreators.incVehicleCount(name))
        }
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(DisplayList);