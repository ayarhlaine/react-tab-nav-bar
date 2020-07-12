import React,{ FC } from 'react';
import NavBar from './NavBar/NavBar';
import Page from './Page/Page';
import Footer from './Footer/Footer';
export const App:FC<{}> = () => {
  return (
    <div className="App">
      <NavBar />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
