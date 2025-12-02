import { ClickAwayListener, Grow, IconButton, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import React, { useState } from 'react';
import styles from './MoreOptions.module.css';
import { useDispatch } from 'react-redux';
import ModalUpdateTask from '../ModalUpdateTask/ModalUpdateTask';
import { removeTask } from '../../../slices/tasksSlice';


const MoreOptions = ({item}) => {

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  }


  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleMenu = (e) => {
    setOpen((open) => !open);
  };

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  };


  const handleDeleteTask = (e) => {
    handleClose(e);
    const userSure = confirm("Confirm deletion");

    if (userSure) {
      dispatch(removeTask(item))
      console.log("deleteItem", item);
    }
  };


  return (  
    <div className={styles.more__options__wrapper}>
      <div className={styles.more__options}>
        <IconButton
          onClick={handleMenu}
          size="large"
          color="inherit"
          ref={anchorRef}
          id="more-actions-button"
          aria-label="display more actions"
          aria-controls={open ? 'more-actions-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
        >
          <MoreIcon />
        </IconButton>
        <ModalUpdateTask task={item} showModal={showModal} handleShowModal={handleShowModal} />
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-end"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-end' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="more-actions-menu"
                    aria-labelledby="more-actions-button"
                  >
                    <MenuItem onClick={() => handleShowModal()}>Update</MenuItem>
                    <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
                    {/* <MenuItem onClick={handleClose}>Cancel</MenuItem> */}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default MoreOptions;
