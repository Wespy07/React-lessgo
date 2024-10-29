import React from 'react';
import { useSelector } from 'react-redux';

function Counter() {
  const count = useSelector(state => state.myCounter);
  return (
    <div>
        <h1>{count}</h1>
    </div>
  );
}

export default Counter;
