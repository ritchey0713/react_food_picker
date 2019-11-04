import React from 'react';
import Option from './Option'

const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          className="button--link"
          onClick={props.handleDeleteOptions}
        >
          Remove all options!
        </button>
      </div>
      
      {
        props.options.length < 1 && <p className="widget__message">Please add some restaurants!</p>
      }
      {
        props.options.map((option, index) => {
          return <Option
              key={option} 
              optionText={option}
              count={index + 1} 
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