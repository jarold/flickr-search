import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import CardGrid from './CardGrid';

class App extends Component {
  componentDidMount() {
    this.props.fetchResults('dog');
  }

  handleChange = event => {
    const value = event.target.value;
    this.props.updateInput(value);
  };

  handleSubmit = event => {
    event.preventDefault();
    const searchTerm = this.props.textInput;
    this.props.fetchResults(searchTerm);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="tag"
            value={this.props.textInput}
            onChange={this.handleChange}
          />
          <input type="submit" value="Search" />
        </form>

        {!this.props.results ? (
          <p>Loading...</p>
        ) : (
          <CardGrid results={this.props.results} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    textInput: state.search.textInput,
    results: state.search.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateInput: input => dispatch(actions.updateInput(input)),
    fetchResults: input => dispatch(actions.fetchResults(input))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
