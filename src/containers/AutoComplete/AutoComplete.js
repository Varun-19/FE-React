import React from 'react';
import { connect } from 'react-redux';

import * as actionCreatorsPlanet from '../../store/actions/Planet';
import * as actionCreatorsVehicle from '../../store/actions/Vehicle';
import swal from 'sweetalert';
import { selectPlanet, planet } from '../../store/actions/actionTypes';

class AutoComplete extends React.Component {

    render() {
        const autoComplete = () => {
            let selectedPlanet = this.props.planet.selectedPlanet;
            let selectedVehicle = this.props.vehicle.selectedVehicle;
            let index = selectedPlanet.length - selectedVehicle.length;
            let vehicleLength = selectedVehicle.length;
            let planetLength = selectedPlanet.length;

            if(vehicleLength === 4) {
                swal('All places are successfully selected!!!');
                return;
            }
            
            if(index !== 0) {
                let planet = selectedPlanet[selectedPlanet.length-1];
                let planetArray = this.props.init.planet.filter(el => el.name === planet);
                let distance = planetArray[0]['distance'];
                selectVehicle(distance);
            }
                
            if(planetLength < 4) {
                var availablePlanet = removeUnaccessiblePlanets();
            }
            
            for(let i = planetLength; i < 4; i++ ) {
                let index = Math.floor(Math.random() * availablePlanet.length);
                let [name,distance] = [availablePlanet[index]['name'], availablePlanet[index]['distance']];
                this.props.selectPlanet(name,distance);
                selectVehicle(distance);
                availablePlanet.splice(index, 1);
            }
        }

        const selectVehicle = (distance) => {
            let vehicleArray = this.props.init.vehicle.filter(el => el['total_no'] !==0);
            let endValue = 600;
            let name;
            vehicleArray.map((el) => {
                let dist = el['max_distance'] - distance;
                if(dist < endValue && dist >= 0){
                    endValue = dist;
                    name = el['name'] ;
                }
            })
            this.props.selectVehicle(name);
            this.props.decVehicleCount(name);
        }
    
        const removeUnaccessiblePlanets = () => {
            let selectedPlanet = this.props.planet.selectedPlanet;
            let planet = this.props.init.planet.filter(el => !(selectedPlanet.includes(el['name'])));
            let vehicleArray = this.props.init.vehicle;
            let [,,spaceShuttle,spaceShip] = vehicleArray;
            let shuttleNos = spaceShuttle['total_no'];
            let shipNos = spaceShip['total_no'];  

            for(let i = shipNos; i < 2; i++) {
                let index = planet.findIndex(el => el['distance'] > 400);
                planet.splice(index,1); 
            }

            if(shipNos === 0 && shuttleNos === 0) {
                let index = planet.findIndex(el => el['distance'] === 400);
                planet.splice(index,1); 
            } 

            if(planet.length !== 0) {
                return planet;
            }

            swal('Available vehicle can\'t reach the planets. Modify selections');

        }

        return (
            <button onClick={autoComplete}>Auto Complete</button>
        )
    }
}

const mapStateToProps = state => {
    return {
        init : state.initialState,
        planet: state.planet,
        vehicle : state.vehicle
    }
}

const mapDisptacherToProps = dispatch => {
    return {
        selectPlanet : (name,distance) => dispatch(actionCreatorsPlanet.selectPlanet(name,distance)),
        selectVehicle : (name) => dispatch(actionCreatorsVehicle.selectVehicle(name)),
        decVehicleCount : (name) => dispatch(actionCreatorsVehicle.decVehicleCount(name))
    }
}

export default connect(mapStateToProps,mapDisptacherToProps)(AutoComplete);