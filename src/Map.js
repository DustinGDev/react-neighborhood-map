import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarkers from './MapMarkers.js';

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

  render() {
    return(
      <main>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.mapStats.center}
          defaultZoom={this.props.mapStats.zoom}
          onClick={this.refresh}
          options={{disableDoubleClickZoom: true}}
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
