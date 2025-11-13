import React, { useState } from 'react';
import './TaskItem.css';
import { completeTask, removeTask } from '../../slices/tasksSlice';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';


const TaskItem = (item) => {

  const dispatch = useDispatch();

  const [isDone, setIsDone] = useState(item.done);

  const delTask = (task) => {
    let conf = confirm("You sure what want remove task ?");
    if (conf) {
      dispatch(removeTask(task));
      // console.log("removeTask", task);
    }
  }

  const doneTask = (task) => {  
    dispatch(completeTask(task));
    if (!isDone) {
      setIsDone(!isDone);
    }
    // console.log("completeTask", task);
  }


  return (
    <li className={classNames('task-item', {'task--done' : isDone})}>
      <div className="task-item__data">
        <div className={classNames('task-item__data__title', {'task--done' : isDone})}>
          {item.taskTitle}
        </div>
        {item.taskNote && 
          <div className={classNames('task-item__data__note', {'task--done' : isDone})}>
            "{item.taskNote}"
          </div>}
      </div>
      <div className="task-item__management">
        <button className='task-btn__progress'>in progress</button>
        <button 
          className={classNames('task-btn__done', {'task--done' : isDone})}
          onClick={() => doneTask(item)}
        >
          to complete
        </button>
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
