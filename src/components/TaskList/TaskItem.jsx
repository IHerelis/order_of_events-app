import React, { useState } from 'react';
import './TaskItem.css';
import { completeTask, progressTask, removeTask } from '../../slices/tasksSlice';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';


const TaskItem = (item) => {

  const dispatch = useDispatch();

  const [isDone, setIsDone] = useState(item.done);


  const delTask = (task) => {
    let conf = confirm("You sure what want remove task ?");
    if (conf) {
      dispatch(removeTask(task));
    }
  }

  const doneTask = (task) => {  
    if (!item.done) {
      dispatch(completeTask(task));
    }
    if (!isDone) {
      setIsDone(!isDone);
    }
  }

  const processingTask = (task) => {
    if (!item.done && item.status !== "progress") {
      dispatch(progressTask(task));
    }
  }


  return (
    <li className={classNames('task-item', {'task--done' : isDone, 'task--processing' : item.status === "progress"})}>
      <div className="task-item__data">
        <div className={classNames('task-item__data__title', {'task--done' : isDone, 'task--processing' : item.status === "progress"})}>
          {item.taskTitle}
        </div>
        {item.taskNote && 
          <div className={classNames('task-item__data__note', {'task--done' : isDone})}>
            "{item.taskNote}"
          </div>}
      </div>
      <div className="task-item__management">
        <button 
          className={classNames('task-btn__progress', {'task--done' : item.done, 'task--processing' : item.status === "progress"})}
          onClick={() => processingTask(item)}
        >
          in progress
        </button>
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

export default React.memo(TaskItem);
