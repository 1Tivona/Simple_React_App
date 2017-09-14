import React, { Component } from 'react';
import moment from 'moment';
import earthquakes from '../data/earthquakes.js';

export default class EarthquakeList extends Component {
  render(){
    let ListOfEarthquakes = earthquakes.features.map((earthquakes) => {
        return (
          <div className="col-sm-6" {earthquakes.features.id}>
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">{earthquakes.features.place}</h4>
                <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquakes.features.mag}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquakes.features.time).format('llll')}</h6>
                <p className="card-text">Coordinates: {earthquakes.geometry.coordinates}</p>

                <a href={"https://earthquake.usgs.gov/earthquakes/eventpage/ci37702767"} className="card-link">USGS Event Link</a>
                  <div className="quake-list">
                  </div>
              </div>
            </div>
          </div>
        )
    });
        return(
          <div className="row">
              {ListOfEarthquakes}
          </div>

        );
  }
}
