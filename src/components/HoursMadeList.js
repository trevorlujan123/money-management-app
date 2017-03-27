import React, {PropTypes} from 'react';
import HoursMadeListItem from './HoursMadeListItem';

const HoursMadeList = props => {
  return (
    <ul className="contact-list">
      {props.newHourlyWageList.map( listItem => {
        return (
          <HoursMadeListItem
            key={listItem.id}
            date={listItem.date}
            newHourlyWageString={listItem.newHourlyWageString}
          />
        );
      })}
    </ul>
  );
};

HoursMadeList.propTypes = {
  newHourlyWageList: PropTypes.array.isRequired,
};

export default HoursMadeList;
