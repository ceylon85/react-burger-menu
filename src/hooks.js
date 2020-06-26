import { useEffect } from 'react';

export const useOnClickOutside = (ref, handler) => {
    //함수 반환(componentWillMount 대체)
    useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};