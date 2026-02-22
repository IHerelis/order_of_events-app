import React, { useEffect } from 'react';
import './TaskGroupFilter.css';
import { useSelector } from 'react-redux';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const TaskGroupFilter = ({currentGroup, setFilterGroup}) => {

  const {taskGroupsList} = useSelector((state) => (state.tasks));
  const [group, setGroup] = React.useState(currentGroup);

  useEffect(() => {
    setGroup(currentGroup);
  }, [currentGroup]);


  const handleChange = (event) => {
    setFilterGroup(event.target.value);
    setGroup(event.target.value);
  }

  return (
    <div className='filter-group__wrapper'>
      <FormControl sx={{ m: 0, minWidth: 200 }} size="small">
        <InputLabel id="demo-select-small-label">group</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={group}
          label="group"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {taskGroupsList && 
            taskGroupsList.map((item, index) => {
              return <MenuItem value={item} key={index}>{item}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </div>
  );
}

export default TaskGroupFilter;
