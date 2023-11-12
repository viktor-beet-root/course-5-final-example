import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from "prop-types";
import { inputStyle } from "../config/config";
import { useId } from 'react';

SelectField.propTypes = {
    value: PropTypes.string,
    optionsList: PropTypes.array,
    handleChange: PropTypes.func,
    text: PropTypes.string
};

function SelectField({ value, optionsList, handleChange, text = 'Sort by' }) {
    const labelId = useId();

    return (
        <FormControl>
            <InputLabel sx={{
                color: '#fff',
            }} id={labelId}>{text}</InputLabel>
            <Select
                labelId={labelId}
                id="demo-simple-select"
                sx={{
                    '.MuiSelect-select': {
                        ...inputStyle.input
                    }
                }}
                value={value}
                label="Age"
                onChange={handleChange}
            >
                {
                    optionsList.map((option) => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>)
                }
            </Select>
        </FormControl>
    );
}

export default SelectField;
