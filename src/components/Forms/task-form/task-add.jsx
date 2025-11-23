import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import './task-add.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../slices/tasksSlice';


const TaskAdd = () => {
  // console.log("TaskAdd");
  const dispatch = useDispatch();


  const initialValues = {
      taskTitle: "",
      taskNote: "",
      taskImportant: false,
      done: false,
      status: "new",                    /* "new", "progress" , "not_done", "done" */
      group: "",                        /* "...user task group" */
  }

  const submitHandler = (values, formikBag) => {
    console.log("submit values", values);
    dispatch(addTask(values));
    formikBag.resetForm();   
  };

  const TaskSchema = Yup.object().shape({
    taskTitle: Yup.string().min(3, 'Too short').required('task is required'),
    taskNote: Yup.string().min(3, 'Too short'),
  });

  
  return (
    <div className="task-add__container">
      <div className='task-form'>
        <Formik
          initialValues={initialValues}
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
                <label htmlFor="form__field__task-important">Важливе ?</label>
              </div>
              
              <div className='task-form__add'>
                <Field type='submit' value='add task' id='addTask'
                  className={'task-btn__submit'}
                />
              </div>

            </Form> 
          )}
        </Formik>
      </div>
    </div>
  );
}

export default React.memo(TaskAdd);
