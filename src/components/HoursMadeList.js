import React, {PropTypes} from 'react';
import HoursMadeListItem from './HoursMadeListItem';

const HoursMadeList = props => {
  return (
    <div>
      <h2>Log</h2>
      <ul className="hours-made-list">
        {props.newHourlyWageList.map( listItem => {
          return (
            <HoursMadeListItem
              key={listItem._id}
              date={listItem.date}
              newHourlyWageString={listItem.newHourlyWageString}
              onSelectClick={() => props.onSelectListItem(listItem)}
            />
          );
        })}
      </ul>
    </div>
  );
};

HoursMadeList.propTypes = {
  newHourlyWageList: PropTypes.array.isRequired,
};

export default HoursMadeList;
