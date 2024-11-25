// Changing HTML from JS
var root = document.querySelector("#root")

var h1 = document.createElement('h1')
h1.innerHTML = "Great Day"

root.appendChild(h1)

//ReactJS is JS library used for building front-end User Interface(UI) . It allows developers to create reusable UI components and efficiently update the UI in response to state changes.
//ReactDOM helps to connect React with browser DOM to display those components.

var h2 = React.createElement('h2', null, "Hello developers")
//<h2 id='fire'>Hello Developers</h2>

var parent = document.querySelector('#parent')

var display = ReactDOM.createRoot(parent)
display.render(h2)


