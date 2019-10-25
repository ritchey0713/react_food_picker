console.log('app.js loaded')
let appRoot = document.getElementById("app");

let app = {
    title: "Food Picker",
    subtitle: "Find a place to eat!",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    let option = e.target.elements.option.value

    if(option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderApp()
    }
}

const onRemoveAll = () => {
    app.options = []
    renderApp()
}

const renderApp = () => {
    let template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'here are your options' : 'No options'}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <p>{app.options.length}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" placeholder="Enter here"></input>
                <button>Submit</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp()


