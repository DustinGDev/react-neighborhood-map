import React, { Component } from 'react';
import Map from './Map.js';
import Navigation from './Navigation.js'
import './App.css';
import escapeRegExp from 'escape-string-regexp';
import Header from './Header.js';

// Enter your foresquare credentials here
const foursquare = require('react-foursquare')({
  clientID: '1I34DCFI2OSGBL3D0MUGX2RYJXNKVEAR5ARYD5DPNETHNF2I',
  clientSecret: 'UDPZGP0PSA5A0344VE44O2ZJRDW4RUKPRSUVJ1DLL1QNRYBB'
});

class App extends Component {
  constructor() {
    super();

    // This Value is the Center of the Map and the search location for foresquare
    // Change this value to the center of your Neigbhorhood
    this.lat = 53.079296;
    this.lng = 8.801694;
    this.zoom = 13;

    this.state = {
      mapStats: {
          center: {
            lat: this.lat,
            lng: this.lng
          },
          zoom: this.zoom
        },
        // This Array contains the location Foresquare looks for. Add and delete locations as you like.
        placesArr: ['Tower Musicclub',
                    'Paddys',
                    'Dannys',
                    'Übersee Museum',
                    'Universum Bremen',
                    'DMK Hauptverwaltung',
                    'Tattoo',
                    'Sportradar'
        ],
        searchQuery:  ''
      }
 }

  // Fetches all the data from Foresquare via the Foresquare API
  componentDidMount() {
      const newArr =  [];
      const promisesArr = this.state.placesArr.map(place => {
         return foursquare.venues.getVenues({"ll": `${this.lat},${this.lng}`,
                                            "query": place})
                                            .then(res => {
                                              if(res && res.meta.code === 200 &&  res.response.venues[0])
                                              newArr.push(res.response.venues[0])
                                              else if (!res.response.venues[0]) {
                                                console.log(`venue ${place} not found`)
                                              }
                                              else {
                                                console.log(res) // Api Errors are shown in the console
                                              }
                                            })
      });

      Promise.all(promisesArr)
              .then(() => this.setState({
                placesData: newArr
              }))
  }

  // Update function for the search query in the Navigation
  updateQuery = (target) => {
    this.setState({
      searchQuery: target.value
    })
  }

  render() {
    let filteredPlaces;
    if(this.state.searchQuery) {
      const match = new RegExp(escapeRegExp(this.state.searchQuery), 'i');
      if(this.state.placesData)
      filteredPlaces = this.state.placesData.filter((place) => match.test(place.name));
    } else {
      filteredPlaces = this.state.placesData;
    }
    return (
      <div className="App">
        <Header/>
        <Navigation searchQuery={this.state.searchQuery}
                    updateQuery={this.updateQuery}
                    placesData={filteredPlaces}/>
        <Map mapStats={this.state.mapStats}
             placesData={filteredPlaces}
             foresquare={foursquare}/>
      </div>
    );
  }
}

export default App;
