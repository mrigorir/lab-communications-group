import React from 'react';
import Home from './components/Home/index';

const App = () => {
  const arr = [1, 2, 3];
  const handleClick = () => {
    alert('REACT RULES');
  }
  return (
    <>
      <h1> HELLO AGAIN, MY FRIEND!! </h1>
      <br />
      <Home name={'Marco'} click={handleClick} />
      {arr.map((number) => (
        <p> {number * 2} </p>
      ))}
    </>
  )
}

export default App;
