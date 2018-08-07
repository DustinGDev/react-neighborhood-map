import React from 'react';

const ListItem = (props) => {

  const clickMarker =  () => {
    document.querySelector(`[data-id="${props.data.id}"]`).click();
  }

  return (
    <div className='list-item' onClick={clickMarker}>
      <p>{props.data.name}</p>
    </div>
  )
}

export default ListItem;
