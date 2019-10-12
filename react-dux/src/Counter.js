import React from 'react';
import {connect} from 'react-redux';

 const Counter=(props)=> {
  return (
 <h2>Você tem {props.todos.length} todos</h2>
  );
}

//state é compartilhado pelo provider que recebe store onde da acesso aos reducers 

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(Counter);