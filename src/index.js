import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = [
  {
    show: true,
    link: 'https://picsum.photos/200/300?random=1',
    like: false,
  },
  {
    show: true,
    link: 'https://picsum.photos/200/300?random=2',
    like: false,
  },
  {
    show: true,
    link: 'https://picsum.photos/200/300?random=3',
    like: false,
  },
  {
    show: true,
    link: 'https://picsum.photos/200/300?random=4',
    like: false,
  },
  {
    show: true,
    link: 'https://picsum.photos/200/300?random=5',
    like: false,
  },
]

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LIKE": 
      state[action.id].like = !state[action.id].like;
      return [...state];
    case "DELETE":
      state.splice([action.id], 1);
      return [...state];
    case "SHOW":
      state.map(item => (item.show = item.like));
      return [...state];
    case "HIDE":
      state.map(item => (item.show = true));
      return [...state];
   default: 
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
