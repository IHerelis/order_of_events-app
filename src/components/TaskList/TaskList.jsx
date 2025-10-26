import React from 'react';
import './TaskList.css';
import { useSelector } from 'react-redux';
import TaskAdd from '../Forms/task-form/task-add';


const TaskList = () => {

  const {taskList} = useSelector((state) => (state.tasks));
  // console.log("taskList", taskList);

  return (
    <div className='task-list__container'>
      <TaskAdd /> 
      <h1>Task list</h1>
      <ul className='task-list'>
        {taskList && taskList.map((item) => (
          <li key={item.id}>
            {item.taskTitle}
            {item.taskNote && <span>"{item.taskNote}"</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
