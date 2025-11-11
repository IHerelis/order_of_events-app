import React from 'react';
import './TaskItem.css';
import {removeTask } from '../../slices/tasksSlice';
import { useDispatch } from 'react-redux';


const TaskItem = (item) => {

  const dispatch = useDispatch();

  const delTask = (task) => {
    let conf = confirm("You sure what want remove task ?");
    if (conf) {
      dispatch(removeTask(task));
      // console.log("removeTask", task);
    }
  }


  return (
    <li className='task-item'>
      <div className="task-item__data">
        <div className='task-item__data__title'>
          {item.taskTitle}
        </div>
        {item.taskNote && <div className='task-item__data__note'>"{item.taskNote}"</div>}
      </div>
      <div className="task-item__management">
        <button className='task-btn__progress'>in progress</button>
        <button className='task-btn__done'>to complete</button>
        <button 
          className='task-btn__del'
          onClick={() => delTask(item)}
        >
          delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
