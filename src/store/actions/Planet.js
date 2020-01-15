import * as actionTypes from './actionTypes';

export const navLeft = () => {
    return {
        type : actionTypes.navLeftCard
    }
}

export const navRight = () => {
    return {
        type : actionTypes.navRightCard
    }
}

export const selectPlanet = (name,distance) => {
    return {
        type : actionTypes.selectPlanet,
        payload : {
            name : name,
            distance : distance 
        }
    }
}