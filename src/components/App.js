import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { newSearch } from '../actions/searchActions';
const jsonp = require('jsonp');
const CardGrid = require('./CardGrid');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      results: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI() {
    const term = this.state.searchTerm;
    const API = `http://api.flickr.com/services/feeds/photos_public.gne?tags=${term}&format=json`;
    let results = [];

    jsonp(API, { param: 'jsoncallback' }, (err, data) => {
      results = data.items;
      this.setState({ results });
    });
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState(() => ({ searchTerm: value }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.newSearch(this.state.searchTerm);
    this.fetchAPI();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="tag"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <input type="submit" value="Search" onSubmit={this.handleSubmit} />
        </form>

        {!this.state.results ? (
          <p>Loading...</p>
        ) : (
          <CardGrid results={this.state.results} />
        )}
      </div>
    );
  }
}

App.propTypes = {
  newSearch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    searchTerms: state.search
  };
}

const mapDispatchToProps = dispatch => {
  return {
    newSearch: term => dispatch(newSearch(term))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
