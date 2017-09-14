import React, { Component } from 'react';
import styles from '../styles/App.css';
import EarthquakeInfo from '../components/EarthquakeInfo.js'
import EarthquakeList from '../components/EarthquakeList.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
        <div className="my-header">"Earthquakes!"</div>
        <EarthquakeInfo />
        <EarthquakeList />

        </div>
      </div>
    );
  }
}

export default App;
