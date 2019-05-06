import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSido} from '../actions';
import {bindActionCreators} from 'redux';

class SidoList extends Component {
  renderList(sidos) {
    return sidos.map(sido => (
      <li
        key={sido.name}
        onClick={() => this.props.selectSido(sido)}
        className='list-group-item'
      >
        {sido.name}
      </li>
    ));
  }

  render() {
    if (!this.props.sidos) {
      return <div> Nothing </div>;
    }
    return (
        <ul className='list-group'>
          {this.renderList(this.props.sidos)}
        </ul>
    );
  }
}

function mapStateToProps({sidos}) {
  return{
    sidos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectSido}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SidoList);