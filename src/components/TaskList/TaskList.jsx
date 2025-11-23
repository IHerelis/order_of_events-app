import React, { useState } from 'react';
import './TaskList.css';
import { useSelector } from 'react-redux';
import TaskAdd from '../Forms/task-form/task-add';
import TaskItem from './TaskItem';
import TaskFilterStatus from '../Filters/TaskFilterStatus';


const filterStatusMap = {
  All: () => true,
  TaskNew: (task) => task.status === "new",
  Progress: (task) => task.status === "progress",
  TaskImportant: (task) => task.taskImportant,
  NotDone: (task) => !task.done,
  Done: (task) => task.done,
};



const TaskList = () => {

  const {taskList} = useSelector((state) => (state.tasks));
  // console.log("taskList", taskList);

  const [filterStatus, setFilterStatus] = useState('All');

  const updateFilterStatus = (itemState) => {
    setFilterStatus(itemState);
  }


  return (
    <div className='task-list__container'>
      <TaskAdd /> 
      {!taskList.length &&
        <h2 className='todo-promotion'>Додавайте завдання і вперед !</h2>
      }
      {taskList.length &&
        <>
          <TaskFilterStatus updateFilterStatus={updateFilterStatus} filterStatusMap={filterStatusMap} filterStatus={filterStatus} />
          <ul className='task-list'>
            {taskList && taskList.filter(filterStatusMap[filterStatus]).map((item) => <TaskItem {...item}
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
