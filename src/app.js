class FoodPickerApp extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    options: ["thing 1", "thing 2", "thing 4"]
  }
  this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
  this.handlePick = this.handlePick.bind(this)
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
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {

    return (
      <div>
        <h1> {this.props.title} </h1>
        <h2> {this.props.subtitle} </h2>
    </div>
    )
  }
}

class Action extends React.Component {

  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}>
          What should I eat?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {

  render() {
    return (
      <div>
        {
          this.props.options.map((option) => {
            return <Option key={option} optionText={option} />
          })
        }
        <button onClick={this.props.handleDeleteOptions}>Remove all options!</button>
        {/* 
          without constructor
          <button onClick={this.handleRemoveAll.bind(this.props)}>Remove all options!</button>  */
        }
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {

  handleFormSubmit(e) {
    e.preventDefault();
    let data = e.target.elements.option.value.trim()
    if (data) {
      alert(data)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="option" />
          <button> Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<FoodPickerApp />, document.getElementById("app"))