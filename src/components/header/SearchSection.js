import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import history from '../../history';

export function SearchSection(props) {
    const [value, setValue] = useState("");
    const keyPress = (e) => {
        // if (e.keyCode == 13) {
        //     history.push('/mentee/search')
        // }
    }
    return (
        <TextField variant="outlined"
            fullWidth
            placeholder="Seach for anything"
            value={value}
            onChange={(e) => { setValue(e.target.value) }}
            onKeyDown={keyPress}
            onClick={() => {
                if (window.location.pathname != 'mentee/search')
                    history.push('/mentee/search');
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                sx: { borderRadius: 2, borderWidth: 2 }
            }} />
    );
}