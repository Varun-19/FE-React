import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentPlanet : 0,
    selectedPlanet : [],
    selectedPlanetDistance: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.navLeftCard : {
            if(state.currentPlanet === 0) {
               return {
                ...state,
                currentPlanet :5
               } 
            } 
            else {
                return {
                    ...state,
                    currentPlanet : state.currentPlanet - 1
                }
            }
        }

        case actionTypes.navRightCard : {
            if(state.currentPlanet === 5) {
               return {
                ...state,
                currentPlanet :0
               } 
            } 
            else {
                return {
                    ...state,
                    currentPlanet : state.currentPlanet + 1
                }
            }
        }

        case actionTypes.selectPlanet : {
            let planetList = state.selectedPlanet.concat(action.payload.name);
            let planetDistanceList = state.selectedPlanetDistance.concat(action.payload.distance);
            return {
                ...state,
                selectedPlanet : planetList,
                selectedPlanetDistance : planetDistanceList
            }
        } 

        case actionTypes.delPlanet : {
            let planetList = state.selectedPlanet.filter( (el,index) => index !== action.index );
            let planetDistanceList = state.selectedPlanetDistance.filter( (el,index) => index !== action.index );
            return {
                ...state,
                selectedPlanet : planetList,
                selectedPlanetDistance : planetDistanceList
            }
        }

        default: return state;
    }

}

export default reducer;