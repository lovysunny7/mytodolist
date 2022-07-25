import React from 'react';
import './style.css';
import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List';
import Todo from '../todo/Todo';
import TodoList from '../../pages/TodoList';

// const Layout = styled.div``;

function Layout() {
  return (
    <div class='layout'>
      <Header/>
      <Form/>
      <List/>
      <Todo/>
      <TodoList/>
    </div>
  )
}

export default Layout;