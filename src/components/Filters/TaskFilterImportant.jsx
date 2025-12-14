import React from 'react';
import './TaskFilterImportant.css';
import classNames from 'classnames';


const filterAdaptive = {
  All: "всі",
  TaskImportant: "важливі",
  TaskDontImportant: "не важливі",
}



const TaskFilterImportant = ({updateFilterImportant, filterImportantMap, filterImportant}) => {
  const filterKeys = Object.keys(filterImportantMap);

  return (
    <div className='filter-important__wrapper'>
      {filterKeys.map((filterName) => (
        <button key={filterName} onClick={() => updateFilterImportant(filterName)}
        className={classNames('btn', {active: filterImportant === filterName})}
        >{filterAdaptive[filterName]}</button>
      ))}
    </div>
  );
}

export default React.memo(TaskFilterImportant);
