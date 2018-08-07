import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './Map.js';
import Navigation from './Navigation.js'
import './App.css';

// Enter your foresquare credentials here
const foursquare = require('react-foursquare')({
  clientID: '1I34DCFI2OSGBL3D0MUGX2RYJXNKVEAR5ARYD5DPNETHNF2I',
  clientSecret: 'UDPZGP0PSA5A0344VE44O2ZJRDW4RUKPRSUVJ1DLL1QNRYBB'
});

const params = {
  "query": 'Bremen Paddys'
};

class App extends Component {
  constructor() {
    super();

    // This Value is the Center of the Map
    this.lat = 53.079296;
    this.lng = 8.801694;

    this.state = {
      mapStats: {
          center: {
            lat: this.lat,
            lng: this.lng
          },
          zoom: 11
        },
        placesArr: [
          {
            "ll": `${this.lat},${this.lng}`,
            "query": 'Tower Musicclub'
          }, {
            "ll": `${this.lat},${this.lng}`,
            "query": 'Paddys'
          } ,{
            "ll": `${this.lat},${this.lng}`,
            "query": 'Dannys'
          } ,{
            "ll": `${this.lat},${this.lng}`,
            "query": 'Übersee Museum'
          } ,{
            "ll": `${this.lat},${this.lng}`,
            "query": 'Universum Bremen'
          }
        ]
      }
 }

  componentDidMount() {
      const newArr =  [];
      const promisesArr = this.state.placesArr.map(place => {
         return foursquare.venues.getVenues(place)
                          .then(res => {
                            if(res.meta.code === 200)
                            newArr.push(res.response.venues[0])
                          })
      });

      Promise.all(promisesArr)
              .then(() => this.setState({
                placesData: newArr
              }))
  }

  render() {
    return (
      <div className="App">
        <Navigation/>
        <Map mapStats={this.state.mapStats} placesData={this.state.placesData}/>
      </div>
    );
  }
}

export default App;
