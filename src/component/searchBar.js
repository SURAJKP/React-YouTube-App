import React, { Component } from 'react';

class searchBar extends Component {
    constructor(props){
        super(props);
        this.state={
            term:""
        }
    }

    render() {
        return (
            <div className="searchBar">
                <input type="text" 
                       value={this.state.value} 
                       onChange={event=>this.onInputChange(event.target.value)} 
                       />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(this.state.term);
    }
}

export default searchBar;