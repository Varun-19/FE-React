import * as actionTypes from './actionTypes';

export const delPlanet = (index) => {
    return {
        type : actionTypes.delPlanet,
        index : index
    }
}

export const delVehicle = (index) => {
    return {
        type : actionTypes.delVehicle,
        index : index
    }
}

export const incVehicleCount = (name) => {
    return {
        type : actionTypes.incVehicleCount,
        name : name
    }
}