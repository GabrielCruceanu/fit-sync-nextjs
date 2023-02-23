import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

export default function DatePicker() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };

  return (
    <Datepicker asSingle={true} value={value} onChange={handleValueChange} />
  );
}
