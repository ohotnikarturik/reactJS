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


const App = (props) => {
  return (
      <div className='wrapper'>
        <Header/>
        <Nav users={props.state.sidebarBlock.users}/>
        <main className='main'>
          <Route path='/profile' render={() => <Profile addPost={props.addPost}
                                                        newPostText={props.state.dialoguesPage.newPostText}
                                                        posts={props.state.dialoguesPage.posts}
                                                        updateNewPostText={props.updateNewPostText}/>}/>
          <Route /*exact*/ path='/dialogues' render={() => <Dialogues dialogues={props.state.messagesPage.dialogues}
                                                                      messages={props.state.messagesPage.messages}
                                                                      addMassage={props.addMessage}
                                                                      newMessageText={props.state.messagesPage.newMessageText}
                                                                      updateNewMessageText={props.updateNewMessageText}/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </main>
        <Footer/>
      </div>
  );
};

export default App;
