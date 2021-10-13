import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function SelectFilter(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { selectList, selected, lable, keyAttribute, onChange, prefix } = props;


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
          fontWeight: '500',
          '&:hover': {
            borderWidth: 2,
          }

        }}
        onClick={handleClick}>

        {
          `${prefix ? prefix : ''} ${selected[lable]}`
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
            selectList.map((e, index) => (
              <ListItem disablePadding key={index} >
                <ListItemButton selected={selected[keyAttribute] === e[keyAttribute]}
                  onClick={() => {
                    console.log(selected[keyAttribute]);
                    onChange(e);
                  }}>
                  <ListItemText primary={e[lable]} sx={{
                    fontWeight: selected[keyAttribute] === e[keyAttribute] ? 'bolder' : 'inherit',
                  }} />
                </ListItemButton>
              </ListItem>))
          }
        </List>
      </Popover>
    </div>
  );
}