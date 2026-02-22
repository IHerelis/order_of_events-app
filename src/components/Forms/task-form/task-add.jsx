import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import './task-add.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, addTaskGroup, upDateTask } from '../../../slices/tasksSlice';

const initialValues = {
  taskTitle: "",
  taskNote: "",
  taskImportant: false,
  done: false,
  status: "new",                    /* "new", "progress" , "not_done", "done" */
  group: "",                       /* "...user task group" */
}


const TaskAdd = ({task=false, handleShowModal}) => {
  
  const dispatch = useDispatch();
  
  const {taskGroupsList} = useSelector((state) => (state.tasks));


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

  const getModdedPrefixId = (task, currentID) => {
    if (!task) {
      return currentID;
    } else {
        const moddedID = `${currentID}${currentValues.id}`;
        return moddedID;
      }
  }


  const submitHandler = (values, formikBag) => {
    // console.log("onSubmit", values);

    if (!values.id) {
        // console.log("submit values", values);
        dispatch(addTask(values));
        dispatch(addTaskGroup(values));
        formikBag.resetForm(); 
      } else {
          // console.log("update values", values);
          dispatch(upDateTask(values));
          dispatch(addTaskGroup(values));
          formikBag.resetForm();  
          handleShowModal();
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
          enableReinitialize={true}
          onSubmit={submitHandler}
          validationSchema={TaskSchema}
        >

        { () => ( <Form>

              <div className='task-form__field'>
                <label htmlFor="form__field__task">Task:</label>
                <Field type='text' name='taskTitle' id='form__field__task' placeholder='Що плануєте робити ?' />
              </div>
              <ErrorMessage name="taskTitle" component="div" className='task-form-error' />

              <div className='task-form__field'>
                <label htmlFor="form__field__task-note">Task note:</label>
                <Field as='textarea' type='text' name='taskNote' id='form__field__task-note' placeholder='Додайте коментар до завдання !' />
              </div>
              <ErrorMessage name="taskNote" component="div" className='task-form-error' />

              <div className='task-form__buttons'>
                <div className='task-form__field-important'>
                  <Field 
                    id={getModdedPrefixId(task, 'form__field__task-important')} 
                    type='checkbox' 
                    name='taskImportant' 
                  />
                  <label htmlFor={getModdedPrefixId(task, 'form__field__task-important')} >Важливе ?!.</label>
                </div>
                <div className='task-form__field-group'>
                  <label htmlFor='form__field__task-group'>Додати до групи:</label>
                  <Field 
                    as='input'
                    type='text' 
                    name='group' 
                    id='form__field__task-group'
                    list='task-group'
                  />
                  <datalist id='task-group'>
                    {taskGroupsList && 
                      taskGroupsList.map((item, index) => <option value={item} key={index} />)
                    }
                    {/* <option value='власна група' />
                    <option value='загальна група' /> */}
                  </datalist>   
                </div>
              </div>

              {!task ? 
                <div className='task-form__add'>
                  <button type='submit' id='addTask' className={'task-btn__submit'}>
                    add task
                  </button>  
                </div>
                :
                <div className='task-form__update'>
                  <button type='submit' id='upDateTask' className={'task-btn__update'}>
                    update task
                  </button>
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
