import React from 'react';

const Option = (props) => {
  console.log(props)
  return (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {props.handledeleteOption(props.optionText)}}
      >Remove
      </button>
    </div>
  )
}

export default Option
