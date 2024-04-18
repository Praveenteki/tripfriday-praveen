import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import './userListStyles.css'

export default function MouseOverPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <ListItemText className='userList_Name'
       aria-owns={open ? 'mouse-over-popover' : undefined}
       aria-haspopup="true"
       onMouseEnter={handlePopoverOpen}
       onMouseLeave={handlePopoverClose}
          onClick={()=>props.handleUserDetails(props.item.id)}
          primary={props.item.name}          
        />
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div className='popupContent'>
        <Typography sx={{ p: 1 }}>{props.item.name}</Typography>
        <Typography sx={{ p: 1 }}>{props.item.email}</Typography>
        </div>
       
      </Popover>
    </div>
  );
}