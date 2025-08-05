import React, { useEffect } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

export default function YearMonthDropdown({ onMonthChange, selectedMonth }) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;

  const initialValue = `${currentYear}-${String(currentMonth).padStart(2, '0')}`;

  // 初回マウント時に初期値を親に通知（初期選択されていない場合のみ）
  useEffect(() => {
    if (!selectedMonth && onMonthChange) {
      onMonthChange(initialValue);
    }
  }, [selectedMonth, onMonthChange, initialValue]);

  // 年月リスト作成
  const yearMonthList = [];
  for (let y = 2024; y <= currentYear; y++) {
    const startMonth = 1;
    const endMonth = y === currentYear ? currentMonth : 12;
    for (let m = startMonth; m <= endMonth; m++) {
      yearMonthList.push({ year: y, month: m });
    }
  }

  const handleChange = (event) => {
    const value = event.target.value;
    if (onMonthChange) {
      onMonthChange(value);
    }
  };

  return (
    <FormControl sx={{ minWidth: 200 }} size="small">
      <InputLabel id="year-month-label">年月</InputLabel>
      <Select
        labelId="year-month-label"
        value={selectedMonth || ''}
        label="年月"
        onChange={handleChange}
      >
        {yearMonthList.map(({ year, month }) => {
          const value = `${year}-${String(month).padStart(2, '0')}`;
          return (
            <MenuItem key={value} value={value}>
              {year}年 {month}月
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}