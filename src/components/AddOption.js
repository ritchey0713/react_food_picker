import React from 'react';

export default class AddOption extends React.Component {
  constructor(props){
    super(props)
    // use of this inside func, must bind this
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.state = {
      error: undefined
    }
  }
  
  handleFormSubmit(e) {
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
          this.state.error && <p>{this.state.error}</p>
        }
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="option" />
          <button> Submit</button>
        </form>
      </div>
    );
  }
}

