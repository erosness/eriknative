import React, { Component } from 'react';
import ShowUnits from '../components/ShowUnits'
import { connect } from "react-redux";

import { smStyles } from '../styles/SmFrameStyle';


class SmInfo extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  render() {
    return (
      <ShowUnits unitList={this.props.unitList} />
    );
  };
}

const mapStateToProps = state => {
  return { unitList : state.unitList };
};

export default connect(mapStateToProps)(SmInfo);
