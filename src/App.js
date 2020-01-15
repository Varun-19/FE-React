import React, { Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import Search from './containers/Search/Search';
import HomePage from './components/HomePage/HomePage';
import * as actionTypes from './store/actions/actionTypes';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faRocket, faGlobe, faSearchLocation, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { faMinusSquare } from '@fortawesome/free-regular-svg-icons';

library.add(faRocket, faGlobe, faSearchLocation, faMinusSquare, faChevronLeft, faChevronRight)

class App extends Component {

  componentDidMount () {
    axios(`https://findfalcone.herokuapp.com/vehicles`).then( response => {
      this.props.updateVehicle(response.data);
    })

    axios(`https://findfalcone.herokuapp.com/planets`).then( response => {
      this.props.updatePlanet(response.data);
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={Search} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatcherToProps = dispatch => {
  return {
    updateVehicle: (vehicleObject) => dispatch({type:actionTypes.vehicle, payload:vehicleObject}),
    updatePlanet: (planetObject) => dispatch({type:actionTypes.planet, payload:planetObject})
  }
}


export default connect(null,mapDispatcherToProps)(App);
