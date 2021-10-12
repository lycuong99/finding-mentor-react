import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const selectList = [
  {
    id: 0,
    lable: "Select Major"
  },
  {
    id: 1,
    lable: "UX/UI Designer"
  },
  {
    id: 2,
    lable: "Software Developer"
  }
]
export default function SelectFilter(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [selectedItem, setSelectedItem] = React.useState(selectList[0]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="outlined" size="small"
        sx={{
          borderRadius: '990px',
          paddingY: '0.75rem',
          textTransform: 'none',
          color: 'inherit',
          paddingLeft: '15px',
          fontSize: '0.85rem',
          borderWidth: 2,
          fontWeight:'500',
          '&:hover': {
            borderWidth: 2,
          }

        }}
        onClick={handleClick}>

        {
          selectedItem.lable
        }
        <span style={{ marginLeft: 5, display: 'flex' }}>
          <KeyboardArrowDownIcon color="primary" />
        </span>

      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}

      >
        <List sx={{
          minWidth: 200,
          borderRadius: 4,
          padding: 0
        }}>
          {
            selectList.map(e => (
              <ListItem disablePadding key={e.id} >
                <ListItemButton selected={selectedItem.id === e.id} onClick={() => {
                  setSelectedItem(e);
                }}>
                  <ListItemText primary={e.lable}  sx={{
                    fontWeight: selectedItem.id === e.id ? 'bolder' : 'inherit',
                  }} />
                </ListItemButton>
              </ListItem>))
          }
        </List>
      </Popover>
    </div>
  );
}