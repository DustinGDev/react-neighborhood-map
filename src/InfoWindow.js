import React from 'react';

const InfoWindow = (props) => {
  return (
    <div>
      <h2>{props.data.name}</h2>
      <p>Address: {props.data.location.formattedAddress.join(' ')}</p>
      {props.data.categories[0] &&
          <p>This Venue is an {props.data.categories[0].name}</p>
      }
    </div>
  )
}

export default InfoWindow;
