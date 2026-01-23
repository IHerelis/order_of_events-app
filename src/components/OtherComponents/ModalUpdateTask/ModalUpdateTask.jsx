import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import TaskAdd from '../../Forms/task-form/task-add';


const ModalUpdateTask = ({task, showModal, handleShowModal}) => {
  // console.log("task on Modal", task);

  return (
    <div className='update-task__wrapper'>
      <Dialog
        open={showModal}
        onClose={handleShowModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        // maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">
          {"Update task"}
        </DialogTitle>
        <DialogContent>
          <TaskAdd task={task} handleShowModal={handleShowModal} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleShowModal}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default React.memo(ModalUpdateTask);