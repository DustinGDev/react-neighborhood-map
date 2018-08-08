import React, { Component } from 'react';
import InfoWindow from './InfoWindow.js'

class MapMarkers extends Component {
  constructor() {
    super();
    this.state = {
       classNames: ['map-marker'],
       infoOpen: false
    }
  }

  componentDidMount() {
    this.getPicture();
  }

  toggleInfoWindow = () => {
    const currentInfoWindow = document.querySelector('.info-window');
    if (currentInfoWindow && !(this.refs.ref === currentInfoWindow)) currentInfoWindow.click();
    this.setState((prevState) => {
      prevState.classNames.includes('info-window') ?
                  prevState.classNames.splice(prevState.classNames.indexOf('info-window', 1)) :
                  prevState.classNames.push('info-window');
      return {
        classNames: prevState.classNames,
        infoOpen:   prevState.infoOpen ? false : true
      }
    });
  }

  getPicture = () => {
    this.props.foresquare.venues.getVenuePhotos({'venue_id':this.props.data.id})
                      .then(res => {
                        if (res.meta.code === 200 && res.response.photos.count > 0) {
                          this.setState({
                            photo: res.response.photos.items[0]
                          });
                        }
                      });
  }

  render() {
    return (
      <div className={this.state.classNames.join(' ')} data-id={this.props.data.id} onClick={this.toggleInfoWindow} ref='ref'>
        {
          this.state.infoOpen ? <InfoWindow data={this.props.data} photo={this.state.photo}/> : <p className="marker-text">{this.props.data.name}</p>
        }
      </div>
    )
  }
}

export default MapMarkers
