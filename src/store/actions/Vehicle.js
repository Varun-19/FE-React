import * as actionTypes from './actionTypes';

export const navLeftVehicle = () => {
    return {
        type : actionTypes.navLeftVehicle
    }
}

export const navRightVehicle = () => {
    return {
        type : actionTypes.navRightVehicle
    }
}

export const selectVehicle = (name) => {
    return {
        type : actionTypes.selectVehicle,
        name: name
    }
}

export const decVehicleCount = (name) => {
    return {
        type : actionTypes.decVehicleCount,
        name: name
    }
}