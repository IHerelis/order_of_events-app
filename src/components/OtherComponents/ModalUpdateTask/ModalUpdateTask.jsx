// import { Box, Button, Modal, Typography } from '@mui/material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import TaskAdd from '../../Forms/task-form/task-add';




const ModalUpdateTask = ({task}) => {
  // console.log("task on Modal", task);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};

  return (
    <div className='update-task__wrapper'>
      <div onClick={handleClickOpen}>Update</div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">
          {"Update task"}
        </DialogTitle>
        <DialogContent>
          <TaskAdd task={task} handleClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalUpdateTask;



      // <Modal
      //   open={open}
      //   onClose={handleClose}
      //   // aria-labelledby="modal-modal-title"
      //   // aria-describedby="modal-modal-description"
      // >
      //   <Box sx={style}>
      //     <Typography id="modal-modal-update">
      //       <TaskAdd />
      //     </Typography>
      //     {/* <Typography id="modal-modal-title" variant="h6" component="h2">
      //       Text in a modal
      //     </Typography>
      //     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      //       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      //     </Typography> */}
      //   </Box>
      // </Modal>