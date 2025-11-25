import { ClickAwayListener, Grow, IconButton, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import styles from './MoreOptions.module.css';
import { useDispatch } from 'react-redux';


const MoreOptions = ({item}) => {

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleMenu = (event) => {
    setOpen((open) => !open);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };


  const handleDelete = (e) => {
    handleClose(e);
    const userSure = confirm("Confirm deletion");

    if (userSure) {
      
      console.log("deleteItem", item);
    }
  };

  const handleUpdate = (e) => {
    handleClose(e);

  };


  return (
    <div className={styles.more__options__wrapper}>
      <div className={styles.more__options__btn}>
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
                    <MenuItem onClick={handleUpdate}>Update</MenuItem>
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
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
