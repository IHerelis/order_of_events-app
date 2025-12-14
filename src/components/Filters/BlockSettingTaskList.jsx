import React from 'react';
import './BlockSettingTaskList.css';
import TaskFilterStatus from './TaskFilterStatus';
import TaskFilterImportant from './TaskFilterImportant';



const BlockSettingTaskList = ({updateFilterStatus, filterStatusMap, filterStatus, updateFilterImportant, filterImportantMap, filterImportant}) => {

  return (
    <div className='setting-list__wrapper'>
      <TaskFilterStatus updateFilterStatus={updateFilterStatus} filterStatusMap={filterStatusMap} filterStatus={filterStatus} />
      <TaskFilterImportant updateFilterImportant={updateFilterImportant} filterImportantMap={filterImportantMap} filterImportant={filterImportant} />
    </div>
  );
}

export default React.memo(BlockSettingTaskList);
