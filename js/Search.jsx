import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowCard from './ShowCard';

class Search extends Component {
  state = {
    searchTerm: ''
  };
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>s video</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  shows: PropTypes.shape([{
    title: PropTypes.string,
    description: PropTypes.string,
    year: PropTypes.string,
    imdbID: PropTypes.string,
    poster: PropTypes.string,
    trailer: PropTypes.string
  }])
};
Search.defaultProps = {
  shows: [
    {
      title: null,
      description: null,
      year: null,
      imdbID: null,
      poster: null,
      trailer: null
    }
  ]
};

export default Search;
