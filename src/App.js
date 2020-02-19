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
import state from "./redux/state";


const App = (props) => {
  console.log(props);
  return (
      <BrowserRouter>
        <div className='wrapper'>
          <Header/>
          <Nav users={props.state.sidebarBlock.users}/>
          <main className='main'>
            <Route path='/profile' render={() => <Profile posts={props.state.dialoguesPage.posts}/>}/>
            <Route /*exact*/ path='/dialogues' render={() => <Dialogues dialogues={props.state.messagesPage.dialogues} messages={props.state.messagesPage.messages}/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
  );
};

export default App;
