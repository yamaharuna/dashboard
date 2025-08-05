import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

export default function Pulldownweek() {
  const [selectedValue, setSelectedValue] = useState('');

  const options = [
    { label: '2週間ごと', value: '2' },
    { label: '4週間ごと', value: '4' },
    { label: '6週間ごと', value: '6' },
    { label: '8週間ごと', value: '8' },
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel id="week-interval-label">期間</InputLabel>
      <Select
        labelId="week-interval-label"
        value={selectedValue}
        label="期間"
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}









