import { useState } from 'react';

export function useFormInput(initialValue = '') {
  let [value, setValue] = useState(initialValue);

  function handleChange(value) {
    setValue(value);
  }

  return {
    value,
    onChange: handleChange,
  };
}
