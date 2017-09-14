import React, { Component } from 'react';
import styles from '../styles/App.css';
import EarthquakeList from '../components/EarthquakeList.js'
import EarthquakeInfo from '../components/EarthquakeInfo.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
        <div className="my-header">"Earthquakes!"</div>
        <EarthquakeList />
        <EarthquakeInfo />
        </div>
      </div>
    );
  }
}

export default App;
