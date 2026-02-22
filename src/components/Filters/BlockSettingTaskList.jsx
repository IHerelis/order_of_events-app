import React from 'react';
import './BlockSettingTaskList.css';
import TaskFilterStatus from './TaskFilterStatus';
import TaskFilterImportant from './TaskFilterImportant';
import ClearFilter from './ClearFilterBtn/ClearFilter';
import TaskGroupFilter from './TaskGroupFilter';
// import { useSelector } from 'react-redux';



const BlockSettingTaskList = ({resetAllFilters, updateFilterStatus, filterStatusMap, filterStatus, updateFilterImportant, filterImportantMap, filterImportant, filterGroup, setFilterGroup}) => {

  // const {settingTaskList} = useSelector((state) => (state.tasks));


  return (
    <div className='setting-list__wrapper'>
      <ClearFilter resetAllFilters={resetAllFilters} />
      <TaskFilterStatus updateFilterStatus={updateFilterStatus} filterStatusMap={filterStatusMap} filterStatus={filterStatus} />
      <TaskFilterImportant updateFilterImportant={updateFilterImportant} filterImportantMap={filterImportantMap} filterImportant={filterImportant} />
      <TaskGroupFilter currentGroup={filterGroup} setFilterGroup={setFilterGroup} />
    </div>
  );
}

export default React.memo(BlockSettingTaskList);
