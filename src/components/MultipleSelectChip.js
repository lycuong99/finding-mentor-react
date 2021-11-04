import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  { id: 1, name: 'One', },
  { id: 2, name: 'Two', },
  { id: 3, name: 'Three', },
  { id: 4, name: 'Four', },
  { id: 5, name: 'Five', },
  { id: 6, name: 'Six', }

];



export default function MultipleSelectChip(props) {
  const theme = useTheme();
  // const [values, setValues] = React.useState([]);
  const { fullWidth, values, onChange } = props;
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    // setValues(
    //   // On autofill we get a the stringified value.
    //   typeof value === 'string' ? value.split(',') : value,
    // );
    onChange(typeof value === 'string' ? value.split(',') : value)
  };

  const handleDelete = (id) => {
    console.log(id);
    console.log(values);

    let newValues = values.filter(e => e !== id);
    console.log(newValues);
    onChange(newValues);
  }

  return (
    <Select
      labelId="demo-multiple-chip-label"
      id="demo-multiple-chip"
      multiple
      fullWidth
      value={values}
      onChange={handleChange}
      input={<OutlinedInput id="select-multiple-chip" />}
      renderValue={(selected) => {
        // console.log(names.find(e => e.id == 1));
        return (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {

              selected.map((value) => (
                <Chip key={value} label={names.find(e => e.id == value).name}
                  sx={{ zIndex: 2100 }}
                  onDelete={(event) => {
                    // event.stopPropagation();
                    // if (event.currentTarget != event.target) return;
                    handleDelete(value);
                  }} />
              ))
            }
          </Box>
        )
      }}
      MenuProps={MenuProps}
    >
      {names.map((name) => (
        <MenuItem
          key={name.id}
          value={name.id}
          style={{
            fontWeight: 500,
            paddingTop: '10px',
            paddingBottom: '10px'
          }}
        >
          {name.name}
        </MenuItem>
      ))}
    </Select>
  );
}