console.log('app.js loaded')

let template = (
    <div>
        <h1>Food Picker</h1> 
        <p>this is my info</p>
    </div>
);

let templateTwo = (
    <div>
        <h1>Dj</h1>
        <p>Location: Ohio</p>
    </div>
)

let appRoot = document.getElementById("app")

ReactDOM.render(templateTwo, appRoot)

