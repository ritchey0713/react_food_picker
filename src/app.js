console.log('app.js loaded')

let app = {
    title: "Food Picker",
    subtitle: "Find a place to eat!",
    options: ["one", "two"]
}

let template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'here are your options' : 'No options'}</p>
        <form>
            <input type="text" name="option" placeholder="Enter here"></input>
            <button>Submit</button>
        </form>
    </div>
);


let appRoot = document.getElementById("app")
ReactDOM.render(template, appRoot)
