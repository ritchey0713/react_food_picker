class FoodPickerApp extends React.Component {
    render(){
        const title = "Food Picker"
        const subTitle =  "Find a place to snack!"
        return (
            <div>
                <Header title={title} subtitle={subTitle} />
                <Action />
                <Options />
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
    render() {
        return (
        <div>
            <button>What should I eat?</button>
        </div>)
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>These are the options</p>
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                <p>an option tag</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p> add the options</p>
            </div>
        )
    }
}


ReactDOM.render(<FoodPickerApp />, document.getElementById("app"))