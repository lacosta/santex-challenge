// @packages
import { useState, useEffect } from 'react';

const getLocalStorage = (item: string, initialValue: unknown) => {
  const localStorageContent = localStorage.getItem(item);

  if (localStorageContent) {
    return JSON.parse(localStorageContent);
  } else {
    return initialValue;
  }
};

function useStateWithStorage(
  item: string,
  initialValue: unknown,
) {
  const [value, setValue] = useState(() => {
    return getLocalStorage(item, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(item, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export default useStateWithStorage;