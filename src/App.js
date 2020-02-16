import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
  return (
      <BrowserRouter>
        <div className='wrapper'>
          <Header/>
          <Nav/>
          <main className='main'>
            <Route path='/profile' component={Profile}/>
            <Route /*exact*/ path='/dialogues' component={Dialogues}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
  );
};

export default App;
