const React = require('react');
const ReactDOM = require('react-dom');
const jsonp = require('jsonp');

const CardGrid = require('./components/CardGrid');

require('./style.css');

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      term: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI() {
    const term = this.state.term;
    const API = `http://api.flickr.com/services/feeds/photos_public.gne?tags=${term}&format=json`;
    let results = [];

    jsonp(API, 
      {param: "jsoncallback"},
      (err, data) => {
        results = data.items;
        this.setState({ results: results });    
      });
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState(() => ({ term: value }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchAPI();
  }

  render() {
    return(
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="tag"
              value={this.state.term}
              onChange={this.handleChange}
            />
            <input type="submit" value="Search" onSubmit={this.handleSubmit} />
          </form>

          {!this.state.results
            ? <p>Loading...</p>
            : <CardGrid results={this.state.results} />}
        </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));
