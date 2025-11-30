import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import './task-add.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, upDateTask } from '../../../slices/tasksSlice';

const initialValues = {
  taskTitle: "",
  taskNote: "",
  taskImportant: false,
  done: false,
  status: "new",                    /* "new", "progress" , "not_done", "done" */
  group: "",                        /* "...user task group" */
}                   


const TaskAdd = ({task, handleClose}) => {
  // console.log("TaskAdd");
  // console.log("task on TaskAdd", task);
  const dispatch = useDispatch();

  const [currentValues, setCarrentValues] = useState(!task ? initialValues :
     {
      id: task.id,
      taskTitle: task.taskTitle,
      taskNote: task.taskNote,
      taskImportant: task.taskImportant,
      done: task.done,
      status: task.status,                 
      group: task.group,                      
    }
  );


  const submitHandler = (values, formikBag) => {

    if (!values.id) {
        // console.log("submit values", values);
        dispatch(addTask(values));
        formikBag.resetForm(); 
      } else {
          // console.log("update values", values);
          dispatch(upDateTask(values));
          formikBag.resetForm();  
          handleClose();
        }  
  };

 
  const TaskSchema = Yup.object().shape({
    taskTitle: Yup.string().min(3, 'Too short').required('task is required'),
    taskNote: Yup.string().min(3, 'Too short'),
  });

  
  return (
    <div className="task-add__container">
      <div className='task-form'>
        <Formik
          initialValues={currentValues}
          onSubmit={submitHandler}
          validationSchema={TaskSchema}
        >

        { () => ( <Form>

              <div className='task-form__field'>
                <label htmlFor="form__field__task">Task:</label>
                <Field type='text' name='taskTitle' id='form__field__task' placeholder='Щоплануєте робити ?' />
              </div>
              <ErrorMessage name="taskTitle" component="div" className='task-form-error' />

              <div className='task-form__field'>
                <label htmlFor="form__field__task-note">Task note:</label>
                <Field as='textarea' type='text' name='taskNote' id='form__field__task-note' placeholder='Додайте коментар до завдання !' />
              </div>
              <ErrorMessage name="taskNote" component="div" className='task-form-error' />

              <div className='task-form__field-important'>
                <Field type='checkbox' name='taskImportant' id='form__field__task-important' />
                <label htmlFor="form__field__task-important">Важливе ?!.</label>
              </div>

              {!task ? 
                <div className='task-form__add'>
                  <Field type='submit' value='add task' id='addTask'
                    className={'task-btn__submit'}
                  />
                </div>
                :
                <div className='task-form__update'>
                  <Field type='submit' value='update task' id='upDateTask'
                    className={'task-btn__update'}
                  />
                </div>
              }

            </Form> 
          )}
        </Formik>
      </div>
    </div>
  );
}

export default React.memo(TaskAdd);
