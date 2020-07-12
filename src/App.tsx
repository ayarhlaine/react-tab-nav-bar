import React,{ FC } from 'react';
import NavBar from './NavBar/NavBar';
import Page from './Page/Page';
export const App:FC<{}> = () => {
  return (
    <div className="App">
      <NavBar />
      <Page />
    </div>
  );
}

export default App;
