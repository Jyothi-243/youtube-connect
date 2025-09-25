import React from 'react';
import ButtonCom from './ButtonCom';

const ButtonList = () => {
  const listOfButtons = ["All", "Music", "Sports", "Live", "News", "Comedy", "Subscriptions", "Gaming"];

  return (
    <div className='button-list'>
      {listOfButtons.map((buttons) => <ButtonCom key={buttons} name={buttons} />)}
    </div>
  )
}

export default ButtonList;