import React from 'react';

const InfoWindow = (props) => {
  return (
    <div id={props.data.id}>
      <h2>{props.data.name}</h2>
      <p>Address: {props.data.location.formattedAddress.join(' ')}</p>
      {props.data.categories[0] &&
          <p>This Venue is an {props.data.categories[0].name}</p>
      }
      {props.photo &&
        <img className="info-img" src={`${props.photo.prefix}original${props.photo.suffix}`} alt={`${props.data.name} by Foresquare`}/>
      }

      <p className="api-attribution">Information provided by Foresquare</p>
    </div>
  )
}

export default InfoWindow;
