import App from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

let reRenderEntireTree = () => {

  ReactDOM.render(
      <BrowserRouter>
        <App state={store.getState()} addPost={store.addPost.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store)}
             addMessage={store.addMessage.bind(store)}
             updateNewMessageText={store.updateNewMessageText.bind(store)}
        />
      </BrowserRouter>, document.getElementById('root'));
};

reRenderEntireTree(store.getState());

store.subscribe(reRenderEntireTree);


serviceWorker.unregister();
