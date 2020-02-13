import React from 'react';
import './App.css';
import Header from "./components/header";
import Nav from "./components/nav";
import Home from "./components/home";
import Footer from "./components/footer";


const App = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
};

export default App;
