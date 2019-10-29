class FoodPickerApp extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    options: []
  }
  this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
  this.handlePick = this.handlePick.bind(this)
  this.handleAddOption = this.handleAddOption.bind(this)
}

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick() {
    alert(this.state.options[Math.floor(Math.random() * this.state.options.length)])
  }

  handleAddOption(option){
    if(!option){
      return "enter valid restuarant";
    } else if(this.state.options.indexOf(option) > -1){
      return "This option already exists!"
    } else {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        }
        
      })
    }
    
  }

  render() {
    const title = "Food Picker"
    const subTitle = "Find a place to snack!"
    return (
      <div>
        <Header title={title} subtitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
        <h1> {props.title} </h1>
        <h2> {props.subtitle} </h2>
    </div>
  )
}

const Action = (props) => {
  return (
    <div>
        <button
          onClick={props.handlePick}
          disabled={!props.hasOptions}>
          What should I eat?
        </button>
      </div>
  )
}

const Options = (props) => {
  return (
    <div>
        {
          props.options.map((option) => {
            return <Option key={option} optionText={option} />
          })
        }
        <button onClick={props.handleDeleteOptions}>Remove all options!</button>
        {/* 
          without constructor
          <button onClick={this.handleRemoveAll.bind(this.props)}>Remove all options!</button>  */
        }
        <Option />
      </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
    </div>
  )
}

class AddOption extends React.Component {
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
    e.target.elements.option.value = ""
    const error = this.props.handleAddOption(data)

    this.setState(() => {
      return {
        // short hand error => error: error === error
        error: error 

      }
      
    })
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

ReactDOM.render(<FoodPickerApp />, document.getElementById("app"))