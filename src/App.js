import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Home from "./components/Main/Home";
import Footer from "./components/Footer/Footer";



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
