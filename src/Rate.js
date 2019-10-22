// import logo from './logo.svg';
import './Rate.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { FaStar } from 'react-icons/fa';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';


const Star = ({ selected = false, onSelect = f => f }) => (
  selected ?
  <FaStar color={"red"} onClick={onSelect} /> :
  <FaStar color={"grey"} onClick={onSelect} />
);


const createArray = length => [...Array(length)];

function StarRating({ totalStars = 5 }) {
  return createArray(totalStars).map((n, i) => <Star key={i} />);
}

/*
  LessRating ( Icon = FiThumbsDown, onSelect = f ) {
    <Icon
      class="rateless"
      onClick={() => this.state.currentRate - 1}
    />
  }
*/

class Rate extends React.Component {
  constructor(props) {
    super(props);
    let rate = this.props.initialRate != null ? this.props.initialRate : 4;
    this.state={ currentRate: rate};
  }

  setSelectedStars(i) {
    this.setState({currentRate : i});
  }

  render() {
    return (
      <div className="ratearea">
      <FiThumbsUp
        className="ratemore"
        onClick={() => this.setState({currentRate : this.state.currentRate +1})}
      />
      {createArray(this.props.totalStars).map((n,i) => (
        <Star
          key={i}
          selected={this.state.currentRate > i}
          onSelect={() => this.setSelectedStars(i + 1)}
        />
      ))}
      <FiThumbsDown
        className="rateless"
        onClick={() => this.setState({currentRate : this.state.currentRate -1})}
      />
      <h2>Render in Rate {this.state.currentRate}</h2>
      </div>
    );
  }
}

export {Rate};
