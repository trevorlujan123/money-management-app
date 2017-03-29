import React, {PropTypes} from 'react';

/* eslint-disable max-len*/
const FindAverage = props => {
  if (props.averageMonthly === '') {
    return (
      <div>
        <h2>{null}</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Average is ${props.averageMonthly} per hour</h2>
    </div>
  );
};

export default FindAverage;

FindAverage.propTypes = {
  averageMonthly: PropTypes.string.isRequired
};
