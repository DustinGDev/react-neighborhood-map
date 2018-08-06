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
  }

  render() {
    console.log(this.props)
    return(
      <main>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.mapStats.center}
          defaultZoom={this.props.mapStats.zoom}
          onClick={this.refresh}
        >
          { this.props.placesData?
            this.props.placesData.map(place => {
                return (
                  <MapMarkers
                      lat={place.location.lat}
                      lng={place.location.lng}
                      data={place}
                      key={place.id}
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
