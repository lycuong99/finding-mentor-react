import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

export function SearchSection(props) {
    const [value, setValue] = useState("");
    return (
        <TextField variant="outlined"
        fullWidth
            placeholder="Seach for anything"
            value={value}
            onChange={(e) => { setValue(e.target.value) }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }} />
    );
}