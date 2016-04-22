import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import APIKey from './../APIKEY';

//create new component should produce some html
const App = () => {
	return (<div>
					  <SearchBar />
					</div>);
}

//Take this component's generated HTML and place it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));