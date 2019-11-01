import React from 'react';
import Option from './Option'

const Options = (props) => {
  return (
    <div>
        <button
         className="button--link"
         onClick={props.handleDeleteOptions}
        >
         Remove all options!
        </button>
        {
          props.options.length < 1 && <p>Please add some restaurants!</p>
        }
        {
          props.options.map((option) => {
            return <Option
               key={option} 
               optionText={option} 
               handledeleteOption={props.handledeleteOption} 
               />
          })
        }
        {/* 
          without constructor
          <button onClick={this.handleRemoveAll.bind(this.props)}>Remove all options!</button>  */
        }
      </div>
  )
}

export default Options