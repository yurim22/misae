import React, {Component} from 'react';
import { connect } from 'react-redux';

class WeatherDetails extends Component {
  render() {
    if(!this.props.selected) {
      return <div> No Sido Selected </div>;
    }

    return (
      <div className='list-group'>
        {this.props.selected.name}
        엑ㅇ겍
      </div>
    );
  }
}

function mapStateToProps({selected}) {
  return {
    selected: selected
  };
}

export default connect(mapStateToProps)(WeatherDetails);

// import React from 'react';

// const Weather = ({cityName}) => {
//   return(
//     <div>
//       <p>{cityName}</p>
//     </div>
//   );
// }

// export default Weather;
