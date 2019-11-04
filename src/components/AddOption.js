import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  }
  
  handleFormSubmit = (e) => {
    e.preventDefault();
    let data = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(data)

    this.setState(() => {
      return {
        // short hand error => error: error === error
        error: error 

      }
      
    })
    if(!error){
      e.target.elements.option.value = ""
    }
  }

  render() {
    return (
      <div>
        {
          this.state.error && <p className="add-option-error">{this.state.error}</p>
        }
        <form className="add-option" onSubmit={this.handleFormSubmit}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button"> Submit</button>
        </form>
      </div>
    );
  }
}

