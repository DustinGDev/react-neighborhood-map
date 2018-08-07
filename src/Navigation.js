import React, { Component } from 'react';
import ListItem from './ListItem.js'

class Navigation extends Component {
  render() {
    return (
      <nav>
        <input type="text"
                value={this.props.searchQuery}
                placeholder="Search Here"
                onChange={evt => this.props.updateQuery(evt.target)}></input>
              { this.props.placesData &&
                this.props.placesData.map(place => {
                  return (
                    <ListItem data={place} key={place.id}/>
                  )
                })
              }
      </nav>
    )
  }
}

export default Navigation
