import React from 'react';
import './style.css';
// import Header from '../header/Header';
// import Form from '../form/Form';
// import List from '../list/List';
// import Todo from '../todo/Todo';
// import TodoList from '../../pages/TodoList';

const Layout = (props) => {
  return <div className="layout">{props.children}</div>;
};


export default Layout;