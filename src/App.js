import './App.css';
import Header from './components/header/Header';
import Form from './components/form/form';
import Layout from './components/layout/Layout';
import List from './components/list/List';
import Todo from './components/todo/Todo';
import TodoList from './pages/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      </header>
      <Form/>
      <Layout/>
      <List/>
      <Todo/>
      <TodoList/>
    </div>
  );
}

export default App;
