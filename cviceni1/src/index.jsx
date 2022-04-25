import React from 'react';
import { render } from 'react-dom';
import './style.css';


import Registrace from './components/Registrace';

const App = () => {
  return (
    <>
      <h1>Práce v lekci 8</h1>
      <Registrace/>
    </>
  );
}

render(<App />, document.querySelector('#app'));
