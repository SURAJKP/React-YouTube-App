import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './component/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './component/videoList';
import VideoDetail from  './component/videoDetails';
const API_KEY = 'create your YouTube API Key';

class App extends Component {
    constructor(props){
      super();
      this.state={
        videos:[],
        selectedVideos:null
      }
    }

  videoSearch(term) {
      YTSearch({key: API_KEY, term: term }, (videos) => {
        this.setState({
          videos,
          selectedVideos: videos[0]
        });
      });
    }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch.bind(this)}/>
        <VideoDetail video={this.state.selectedVideo} />
      <VideoList
      onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
      videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
