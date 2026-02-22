import React, { useState } from 'react';
import './TaskList.css';
import { useDispatch, useSelector } from 'react-redux';
import TaskAdd from '../Forms/task-form/task-add';
import TaskItem from './TaskItem';
import BlockSettingTaskList from '../Filters/BlockSettingTaskList';
import { resetSettingTaskList, updateSettingTaskList } from '../../slices/tasksSlice';
import CalendarBlock from '../OtherComponents/CalendarBlock/CalendarBlock';


const filterStatusMap = {
  All: () => true,
  NotDone: (task) => !task.done,
  TaskNew: (task) => task.status === "new",
  Progress: (task) => task.status === "progress",
  Done: (task) => task.done,
};

const filterImportantMap = {
  All: () => true,
  TaskImportant: (task) => task.taskImportant,
  TaskDontImportant: (task) => !task.taskImportant,
};

const filterGroupMapAction = (item, filterItem) => {
  if (filterItem === "" || filterItem === 'general') {
    return true;
  } else {return item.group === filterItem}
}


const TaskList = () => {

  const dispatch = useDispatch();

  const {taskList, settingTaskList} = useSelector((state) => (state.tasks));
  

  const [filterStatus, setFilterStatus] = useState(settingTaskList.filterStatus || 'All');
  const [filterImportant, setFilterImportant] = useState(settingTaskList.filterImportant || 'All');
  const [filterGroup, setFilterGroup] = useState('');


  const updateFilterStatus = (itemState) => {
    setFilterStatus(itemState);
    dispatch(updateSettingTaskList({...settingTaskList, filterStatus: itemState}));
  }

  const updateFilterImportant = (itemState) => {
    setFilterImportant(itemState);
    dispatch(updateSettingTaskList({...settingTaskList, filterImportant: itemState}));
  }

  const resetAllFilters = () => {
    dispatch(resetSettingTaskList());
    setFilterStatus('All');
    setFilterImportant('All');
    setFilterGroup('');
  }


  return (
    <div className='task-list__container'>
      <div className='task-list__tools'>
        <div className='tools__calendar'>
          <CalendarBlock />
        </div>
        <div className='tools__add-task'>
          <TaskAdd /> 
          {!taskList.length &&
            <h2 className='todo-promotion'>Додавайте завдання і вперед !</h2>
          }
        </div>
      </div>
    
      {taskList.length > 0 && 
      <>
          <BlockSettingTaskList 
            updateFilterStatus={updateFilterStatus} filterStatusMap={filterStatusMap} filterStatus={filterStatus}
            updateFilterImportant={updateFilterImportant} filterImportantMap={filterImportantMap} filterImportant={filterImportant}
            resetAllFilters={resetAllFilters} filterGroup={filterGroup} setFilterGroup={setFilterGroup} 
          />
          <ul className='task-list'>
            {taskList && 
              taskList.filter(filterStatusMap[filterStatus])
                .filter(filterImportantMap[filterImportant])
                .filter((item) => filterGroupMapAction(item, filterGroup))
                .map((item) => <TaskItem {...item}
                key={item.id}
                />
            )}
          </ul>
        </>
      }
    </div>
  );
}

export default TaskList;
