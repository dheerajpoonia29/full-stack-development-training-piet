// importing react-dom module
import ReactDOM from 'react-dom/client';
import { MyComponent } from './MyComponent';

// getting division tag by id 'root'
const divTag = document.getElementById('root');

// creating react dom which use to connect/render our component on browser
const myDom = ReactDOM.createRoot(divTag);

// rendering component
// myComponent is our react component
// index.js can only render a single component
myDom.render(<MyComponent />)

