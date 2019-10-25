console.log('app.js loaded')

let app = {
    title: "Food Picker",
    subtitle: "Find a place to eat!",
    options: ["one", "two"]
}

const onFormSubmit = (e) => {
    e.preventDefault();
    let option = e.target.elements.option.value

    if(option) {
        app.options.push(option)
        e.target.elements.option.value = ''
    }
}

let template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'here are your options' : 'No options'}</p>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" placeholder="Enter here"></input>
            <button>Submit</button>
        </form>
    </div>
);


let appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
