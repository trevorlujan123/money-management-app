import React, {PropTypes} from 'react';
import './HoursMadeListItem.css';

const HoursMadeListItem = props => {

  const newDate = props.date.split('-');

  const monthNumber = newDate[1];
  let month = '';

  switch (monthNumber) {
    case '01':
      month = 'January';
      break;
    case '02':
      month = 'Febuary';
      break;
    case '03':
      month = 'March';
      break;
    case '04':
      month = 'April';
      break;
    case '05':
      month = 'May';
      break;
    case '06':
      month = 'June';
      break;
    case '07':
      month = 'July';
      break;
    case '08':
      month = 'August';
      break;
    case '09':
      month = 'September';
      break;
    case '10':
      month = 'October';
      break;
    case '11':
      month = 'November';
      break;
    case '12':
      month = 'December';
      break;
    default:
      month = 'Error';
  }

  return (
    <li className="list-item">
      On {month} {newDate[2]}, {newDate[0]} you made {props.newHourlyWageString} per hour.
      <button className="remove" onClick={props.onRemoveClick}>X</button>
      <button onClick={props.onSelectClick}>Select</button>
    </li>
  );
};

export default HoursMadeListItem;

HoursMadeListItem.propTypes = {
  date: PropTypes.string.isRequired,
  newHourlyWageString: PropTypes.string.isRequired,
  onSelectClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};
