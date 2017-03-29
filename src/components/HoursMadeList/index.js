import React, {PropTypes} from 'react';
import HoursMadeListItem from '../HoursMadeListItem/index';
import './HoursMadeList.css';
import {Col} from 'react-bootstrap';

/* eslint-disable max-len */
const HoursMadeList = props => {
  return (
    <Col sm={4} className="hours-made-list">
      <h2>Log</h2>
      <ul>
        {props.newHourlyWageList.map( listItem => {
          return (
            <HoursMadeListItem
              key={listItem._id}
              date={listItem.date}
              newHourlyWageString={listItem.newHourlyWageString}
              onSelectClick={() => props.onSelectListItem(listItem)}
              onRemoveClick={() => props.onRemoveListItem(listItem._id)}
            />
          );
        })}
      </ul>
      <button className="add-all" onClick={() => props.onAddAllClick()}>Add All</button>
    </Col>
  );
};

HoursMadeList.propTypes = {
  newHourlyWageList: PropTypes.array.isRequired,
  onAddAllClick: PropTypes.func.isRequired
};

export default HoursMadeList;
