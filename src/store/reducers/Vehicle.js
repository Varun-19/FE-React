import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentVehicle : 0,
    selectedVehicle : [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.navLeftVehicle : {
            if(state.currentVehicle === 0) {
               return {
                ...state,
                currentVehicle : 3
               } 
            } 
            else {
                return {
                    ...state,
                    currentVehicle : state.currentVehicle - 1
                }
            }
        }

        case actionTypes.navRightVehicle : {
            if(state.currentVehicle === 3) {
               return {
                ...state,
                currentVehicle : 0
               } 
            } 
            else {
                return {
                    ...state,
                    currentVehicle : state.currentVehicle + 1
                }
            }
        }

        case actionTypes.selectVehicle : {
            let vehicleList = state.selectedVehicle.concat(action.name);
            return {
                ...state,
                selectedVehicle : vehicleList
            }
        }

        case actionTypes.delVehicle : {
            let vehicleList = state.selectedVehicle.filter( (el,index) => index !== action.index);
            return {
                ...state,
                selectedVehicle : vehicleList
            }
        }

        default: return state
    }

}

export default reducer;