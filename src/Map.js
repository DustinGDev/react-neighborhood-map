import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarkers from './MapMarkers.js';

window.gm_authFailure = function() {
  alert('Seems like the API didnt load correctly! Try to reload the page or contact the webmaster!')
}

class Map extends Component {
  state = {

  }

  refresh = () => {
    this.setState({
      refresh: 'refreshed'
    })

    if (document.querySelector('nav').classList.contains('active')) {
      document.querySelector('nav').classList.toggle('active');
    }
  }

  handler(evt) {
    console.log(evt)
  }

  render() {
    return(
      <main>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.mapStats.center}
          defaultZoom={this.props.mapStats.zoom}
          onClick={this.refresh}
          options={{disableDoubleClickZoom: true}}
          experimental={this.handler}
        >
          { this.props.placesData?
            this.props.placesData.map(place => {
                return (
                  <MapMarkers
                      lat={place.location.lat}
                      lng={place.location.lng}
                      data={place}
                      key={place.id}
                      foresquare={this.props.foresquare}
                    />
                )
              }) : null
          }
        </GoogleMapReact>
      </main>
    )
  }
}

export default Map
