import React, { useState } from 'react';
import './TaskList.css';
import { useSelector } from 'react-redux';
import TaskAdd from '../Forms/task-form/task-add';
import TaskItem from './TaskItem';
import BlockSettingTaskList from '../Filters/BlockSettingTaskList';


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



const TaskList = () => {

  const {taskList} = useSelector((state) => (state.tasks));
  // console.log("taskList", taskList);

  const [filterStatus, setFilterStatus] = useState('All');
  const [filterImportant, setFilterImportant] = useState('All');

  const updateFilterStatus = (itemState) => {
    setFilterStatus(itemState);
  }

  const updateFilterImportant = (itemState) => {
    setFilterImportant(itemState);
  }


  return (
    <div className='task-list__container'>
      <TaskAdd /> 
      {!taskList.length &&
        <h2 className='todo-promotion'>Додавайте завдання і вперед !</h2>
      }
      {taskList.length > 0 && 
      <>
          <BlockSettingTaskList 
            updateFilterStatus={updateFilterStatus} filterStatusMap={filterStatusMap} filterStatus={filterStatus}
            updateFilterImportant={updateFilterImportant} filterImportantMap={filterImportantMap} filterImportant={filterImportant}
          />
          <ul className='task-list'>
            {taskList && 
              taskList.filter(filterStatusMap[filterStatus])
                .filter(filterImportantMap[filterImportant])
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
