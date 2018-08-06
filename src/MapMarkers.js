import React, { Component } from 'react';
import InfoWindow from './InfoWindow.js'

class MapMarkers extends Component {
  state = {
     classNames: ['map-marker'],
     infoOpen: false
  }

  toggleInfoWindow = () => {
    const currentInfoWindow = document.querySelector('.info-window');
    if (currentInfoWindow && !(this.refs.ref === currentInfoWindow)) currentInfoWindow.click();
    this.setState((prevState) => {
      classNames: prevState.classNames.includes('info-window') ?
                  prevState.classNames.splice(prevState.classNames.indexOf('info-window', 1)) :
                  prevState.classNames.push('info-window');
      infoOpen: prevState.infoOpen ? false : true
    });
  }

  render() {
    return (
      <div className={this.state.classNames.join(' ')} data-id={this.props.data.id} onClick={this.toggleInfoWindow} ref='ref'>
        {
          this.state.infoOpen ? <InfoWindow data={this.props.data}/> : <p>{this.props.data.name}</p>
        }
      </div>
    )
  }
}

export default MapMarkers
