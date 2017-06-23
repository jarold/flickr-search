const React = require('react');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    }
  }

  render() {
    <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        placeholder="tag"
        value={this.state.term}
        onChange={this.handleChange}
      />
      <input type="submit" value="Search" />
    </form>
  }
}