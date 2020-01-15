import * as actionTypes from '../actions/actionTypes';

const initialState = {
    
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.planet :
            return {
                ...state,
                planet: action.payload
            }
        case actionTypes.vehicle :
            return {
                ...state,
                vehicle: action.payload
            }
        case actionTypes.decVehicleCount :
            let vehicle = [{...state.vehicle[0]}, {...state.vehicle[1]},
                            {...state.vehicle[2]}, {...state.vehicle[3]},];
            vehicle = vehicle.map( el => {
                if(el.name === action.name) {
                    el['total_no'] -= 1;
                }
                return el;
            })
            
            return {
                ...state,
                vehicle : vehicle
            }

            case actionTypes.incVehicleCount :
                let vehicleList = [{...state.vehicle[0]}, {...state.vehicle[1]},
                            {...state.vehicle[2]}, {...state.vehicle[3]},];
                vehicleList = vehicleList.filter( el => {
                    if(el.name === action.name) {
                        el['total_no'] += 1;
                    }
                    return el;
                })
                
                return {
                    ...state,
                    vehicle : vehicleList
                }

        default : return state;
    }
 
}
export default reducer;