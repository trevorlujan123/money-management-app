import React from 'react';

const HoursMadeListItem = props => {
  return (
    <li>
      <div>
        <p>
          hourly wage - {props.newHourlyWageString}
        </p>
        <p>
          date - {props.date}
        </p>
      </div>
    </li>
  );
};

export default HoursMadeListItem;
