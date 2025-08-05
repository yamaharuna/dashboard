import React, { useState, useEffect } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

export default function YearMonthDropdown({ onMonthChange }) {
  // 今日の日付
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // 0-indexedなので+1
  
  // 最新の月を初期値として設定
  const initialValue = `${currentYear}-${String(currentMonth).padStart(2, '0')}`;
  const [selectedValue, setSelectedValue] = useState(initialValue);
  
  // 2024年1月〜現在の月までのリストを作成
  const yearMonthList = [];
  for (let y = 2024; y <= currentYear; y++) {
    const startMonth = y === 2024 ? 1 : 1;
    const endMonth = y === currentYear ? currentMonth : 12;
    for (let m = startMonth; m <= endMonth; m++) {
      yearMonthList.push({ year: y, month: m });
    }
  }
  
  // コンポーネントマウント時に初期値を親コンポーネントに渡す
  useEffect(() => {
    if (onMonthChange) {
      onMonthChange(initialValue);
    }
  }, []); // 依存配列を空にして、マウント時にのみ実行
  
  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onMonthChange) {
      onMonthChange(value);
    }
  };
  
  return (
    <FormControl sx={{ minWidth: 200 }} size="small">
      <InputLabel id="year-month-label">年月</InputLabel>
      <Select
        labelId="year-month-label"
        value={selectedValue}
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














