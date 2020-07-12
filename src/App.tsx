import React,{ FC } from 'react';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
export const App:FC<{}> = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
