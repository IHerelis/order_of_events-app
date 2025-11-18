import classNames from 'classnames';
import React from 'react';
import './TaskFilterStatus.css';

const filterAdaptive = {
  All: "всі",
  Progress: "в роботі",
  Done: "виконані",
  NotDone: "не виконані",
  TaskNew: "нові",
}

const TaskFilterStatus = ({updateFilterStatus, filterStatusMap , filterStatus}) => {
  const filterKeys = Object.keys(filterStatusMap);

  return (
    <div className='filter-status__wrapper'>
      {filterKeys.map((filterName) => (
        <button key={filterName} onClick={() => updateFilterStatus(filterName)}
        className={classNames('btn', {active: filterStatus === filterName})}
        >{filterAdaptive[filterName]}</button>
      ))}
    </div>
  );
}

export default React.memo(TaskFilterStatus);
