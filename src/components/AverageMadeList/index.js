import React, {PropTypes} from 'react';
import AverageMadeListItem from '../AverageMadeListItem/index';
import './AverageMadeList.css';

/* eslint-disable max-len */
const AverageMadeList = props => {
  return (
    <div className="average-made-list">
      <h2>Find your average</h2>
      <ul>
        {props.averageMadeList.map( listItemSelected => {
          return (
            <AverageMadeListItem
              key={listItemSelected._id}
              date={listItemSelected.date}
              newHourlyWageString={listItemSelected.newHourlyWageString}
              onUnselectClick={() => props.onUnselectListItem(listItemSelected)}
            />
          );
        })}
      </ul>
      <button className="average-button" onClick={() => props.onFindMonthlyAverageClick()}>Find Average</button>
    </div>
  );
};

export default AverageMadeList;

AverageMadeList.propTypes = {
  averageMadeList: PropTypes.array.isRequired,
  onFindMonthlyAverageClick: PropTypes.func.isRequired
};
