import React from 'react';

const geoLocOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 1800000 // What?
};

const error = function(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      coords: {longitude: 0, latitude: 0}
    };
    this.setCoords = this.setCoords.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }
  componentDidMount(){
    this.getLocation();
  }

  render() {
    console.log(this.state.coords);
    let {latitude, longitude} = this.state.coords;
    return(
      <div>{latitude}, {longitude}</div>
    );
  }
  setCoords(pos){
    let {coords} = pos;
    this.setState({coords});
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(this.setCoords, error, geoLocOptions);
  }
}

export default Weather;
