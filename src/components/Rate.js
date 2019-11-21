// import logo from './logo.svg';
import './RateStyle.js';

import React from 'react';
import { View, Text } from 'react-native';
import ReactDOM from 'react-dom';

import { Icon } from 'react-native-elements';

{/*}
import { Star } from 'react-native-vector-icons';
import { FiThumbsUp, FiThumbsDown } from 'react-native-vector-icons';

const Star = ({ selected = false, onSelect = f => f }) => (
  selected ?
  <FaStar style={{color: 'red', onClick: onSelect}} /> :
  <FaStar style={{color: 'gray', onClick: onSelect}} />
);
*/}

const createArray = length => [...Array(length)];

function StarRating({ totalStars = 5 }) {
  return createArray(totalStars).map((n, i) => <Star key={i} />);
}

class Rate extends React.Component {
  constructor(props) {
    super(props);
    let rate = this.props.initialRate != null ? this.props.initialRate : 4;
    this.state={ currentRate: rate};
  }

  setSelectedStars(i) {
    this.setState({currentRate : i});
  }

  setCurrentRate = (rate) => {
    let limitedRate = Math.max(Math.min(rate,this.props.totalStars),0);
    console.log("Limitedrate=" + limitedRate)
    this.setState({currentRate : limitedRate});
  }

  render() {
    return (
      <View>
      <Text>T{this.state.currentRate}
{/*}      <FiThumbsUp
        onClick={() => this.setCurrentRate(this.state.currentRate +1)}
      />

      {createArray(this.props.totalStars).map((n,i) => (
        Per<Icon name='rowing'/>Kåre
        */}
        {/*}
          key={i}
          selected={this.state.currentRate > i}
          onSelect={() => this.setSelectedStars(i + 1)}
        />
      ))}
      <FiThumbsDown
        onClick={() => this.setCurrentRate(this.state.currentRate -1)}
      />
      */}
      Render in Rate {this.state.currentRate}</Text>
      </View>
    );
  }
}

export {Rate};
