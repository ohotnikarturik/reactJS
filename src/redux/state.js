let store = {
  _state: {
    dialoguesPage: {
      posts: [
        {id: 1, message: 'Hello! My name is Artur', likesCount: 5},
        {id: 2, message: 'it is my first post', likesCount: 10},
      ],
      newPostText: ''
    },
    reRenderEntireTree() {
      console.log('What is going on');
    },
    messagesPage: {
      dialogues: [
        {id: 1, name: 'Name-1'},
        {id: 2, name: 'Name-2'},
        {id: 3, name: 'Name-3'},
        {id: 4, name: 'Name-4'},
      ],
      messages: [
        {id: 1, message: 'Hello-1 !!!'},
        {id: 2, message: 'Hello-2 !!!'},
        {id: 3, message: 'Hello-3 !!!'},

      ],
      newMessageText: ''
    },
    sidebarBlock: {
      users: [
        {name: 'name-1'},
        {name: 'name-2'},
        {name: 'name-3'},
        {name: 'name-4'},
        {name: 'name-5'},
        {name: 'name-6'},
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed');
  },
  addPost() {
    let newPost = {
      id: 3,
      message: this._state.dialoguesPage.newPostText,
      likesCount: 0
    };
    this._state.dialoguesPage.posts.push(newPost);
    this._state.dialoguesPage.newPostText = '';
    this._callSubscriber(this._state); /*???*/
  },
  updateNewPostText(newText) {
    this._state.dialoguesPage.newPostText = newText;
    this._callSubscriber(this._state); /*???*/
  },
  addMessage() {
    let newMessage = {
      id: 4,
      message: this._state.messagesPage.newMessageText,
    };

    this._state.messagesPage.messages.push(newMessage);
    this._state.messagesPage.newMessageText = '';
    this.reRenderEntireTree(this._state);
  },
  updateNewMessageText(message) {
    this._state.messagesPage.newMessageText = message;
    this._callSubscriber(this._state); /*???*/
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;

window.store = store;









