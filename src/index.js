import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import APIKey from './../APIKEY';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: []};

		YTSearch({key: APIKey, term: 'cat video'}, (videos) => {
			this.setState({ videos });
		});
  }

	render() {
	  return (
	  	  <div>
	  	    <SearchBar />
	  	    <VideoList videos={this.state.videos} />
	  	  </div>
	  	);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));