import React from 'react';
import './wrapper.css';

const Wrapper = ({children}) => {
  return (
    <div className="container">
      {children}
    </div>
  );
}

export default Wrapper;