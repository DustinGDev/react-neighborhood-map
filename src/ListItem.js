import React from 'react';

const ListItem = (props) => {

  const clickMarker =  () => {
    document.querySelector(`[data-id="${props.data.id}"]`).click();
  }

  // From https://stackoverflow.com/questions/39442419/reactjs-is-there-a-way-to-trigger-a-method-by-pressing-the-enter-key-inside
  const enterPressed = (event) => {
      var code = event.keyCode || event.which;
      if(code === 13) { //13 is the enter keycode
          clickMarker();
      }
  }

  return (
    <div className='list-item' onClick={clickMarker} onKeyPress={enterPressed} tabIndex="1" aria-describedby={props.data.id}>
      <p>{props.data.name}</p>
    </div>
  )
}

export default ListItem;
