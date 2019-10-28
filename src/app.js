class FoodPickerApp extends React.Component {
    render(){
        const title = "Food Picker"
        const subTitle =  "Find a place to snack!"
        let options = ["thing 1", "thing 2", "thing 4"]
        return (
            <div>
                <Header title={title} subtitle={subTitle} />
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        
        return (
           <div>
               <h1>
                {this.props.title}
               </h1>
               <h2>
                {this.props.subtitle}
               </h2>
           </div> 
        ) 
    }

}

class Action extends React.Component {
    handlePicker() {
        alert("Handle picker")
    }

    render() {
        return (
        <div>
            <button onClick={this.handlePicker}>What should I eat?</button>
        </div>)
    }
}

class Options extends React.Component {
    // set this properly
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        // alert("removed!")
        console.log(this.props.options)
    }
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => {
                        return <Option key={option} optionText={option} />
                    })
                }
                <button onClick={this.handleRemoveAll}>Remove all options!</button> 
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
    render(){
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
                    <input type="text" name="option"/>
                    <button> Submit</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<FoodPickerApp />, document.getElementById("app"))