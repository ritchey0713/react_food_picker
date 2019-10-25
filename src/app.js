class Header extends React.Component {
    render() {
        return (
           <div>
               <h1>
                Food Picker
               </h1>
               <h2>
                Find a place to snack!
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

const jsx = (
    <div>
        <h1>TITLE</h1>
        <Header />
        <Action /> 
        <Options />
        <AddOption />
    </div>
)

ReactDOM.render(jsx, document.getElementById("app"))