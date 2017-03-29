import React, {PropTypes} from 'react';
import {Col} from 'react-bootstrap';
import './FindAverage.css';

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
    <Col sm={12} className="find-average">
      <h2>Your Average is ${props.averageMonthly} per hour</h2>
    </Col>
  );
};

export default FindAverage;

FindAverage.propTypes = {
  averageMonthly: PropTypes.string.isRequired
};
