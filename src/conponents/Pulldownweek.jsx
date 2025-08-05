import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

export default function Pulldownweek({ setSelectedWeek }) {
  const [selectedValue, setSelectedValue] = useState('2');

  const options = [
    { label: '2週間ごと', value: '2' },
    { label: '1ヶ月ごと', value: '4' },
    { label: '2ヶ月ごと', value: '8' },
    { label: '3ヶ月ごと', value: '12' },
  ];

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    setSelectedWeek(`${newValue}week`); // ← App に伝える
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