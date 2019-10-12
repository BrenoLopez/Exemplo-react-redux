import React, { Component } from 'react';
import TodoList from './TodoList';
import {Provider} from 'react-redux';
import store from './store'
import Counter from './Counter'
export default class App extends Component {
  render() {
    return (
   <Provider store={store}>
    <TodoList/>
    <Counter/>
    </Provider>
  );
  }
}
