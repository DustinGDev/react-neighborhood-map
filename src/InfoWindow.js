import React from 'react';

const InfoWindow = (props) => {
  let pictureWidth =  document.documentElement.clientWidth / 10;
  let pictureHeight =  document.documentElement.clientHeight / 5 / 4;
  return (
    <div id={props.data.id}>
      <h2>{props.data.name}</h2>
      <p>Address: {props.data.location.formattedAddress.join(' ')}</p>
      {props.data.categories[0] &&
          <p>This Venue is an {props.data.categories[0].name}</p>
      }
      {props.photo &&
        <img src={`${props.photo.prefix}${pictureWidth}x${pictureHeight}${props.photo.suffix}`} alt={`${props.data.name} by Foresquare`}/>
      }

      <p className="api-attribution">Information provided by Foresquare</p>
    </div>
  )
}

export default InfoWindow;
