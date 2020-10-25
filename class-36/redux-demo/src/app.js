import React from 'react';

import './styles.scss';
import VotesCounter from './components/vote-counter'; 
import Status from './components/status'; 

export default props => {
  return (
    <>
        <VotesCounter />
        <Status />
    </>

  )
};