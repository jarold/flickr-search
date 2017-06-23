const React = require('react');

function CardGrid (props) {
  return (
    <ul className="card-grid">
      {props.results.map((result) => {
        return (
          <li className="card">
            <img src={result.media.m} />
          </li>
        )
      })}
    </ul>
  )
}

module.exports = CardGrid;