import React, {PropTypes} from 'react';
import AverageMadeListItem from './AverageMadeListItem';

const AverageMadeList = props => {
  return (
    <div>
      <h2>Find your average</h2>
      <ul className="average-made-list">
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
    </div>
  );
};

export default AverageMadeList;

AverageMadeList.propTypes = {
  averageMadeList: PropTypes.array.isRequired,
};
