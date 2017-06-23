const React = require('react');
const ReactDOM = require('react-dom');
const jsonp = require('jsonp');

const CardGrid = require('./components/CardGrid');

require('./style.css');

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null
    }
  }

  componentDidMount() {
    const API = "http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&format=json";
    let results = null;

    jsonp(API, 
      {param: "jsoncallback"},
      (err, data) => {
        results = data.items;
        this.setState({ results: results });    
      });
  }

  render() {
    return(
        <div className="container">
          {!this.state.results
            ? <p>Loading...</p>
            : <CardGrid results={this.state.results} />}
        </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));
