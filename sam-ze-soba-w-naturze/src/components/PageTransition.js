import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="transition-wrapper">
      {children}
    </div>
  );
};

export default PageTransition; 