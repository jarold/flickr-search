const React = require('react');
const PropTypes = require('prop-types');

function CardGrid(props) {
  return (
    <ul className="card-grid">
      {props.results.map(result => (
        <li className="card" key={result.link}>
          <img alt={result.title} src={result.media.m} />
        </li>
        ))}
    </ul>
  );
}

CardGrid.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

module.exports = CardGrid;
