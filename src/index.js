import React from 'react';
import ReactDOM from 'react-dom';


//create new component should produce some html
const App = () => {
	return <div> Hey </div>;
}

//Take this component's generated HTML and place it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));