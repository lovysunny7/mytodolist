import './App.css';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Layout from './components/layout/Layout';
import List from './components/list/List';
import Todo from './components/todo/Todo';
import TodoList from './pages/TodoList';

function App() {
  return (
    <div className="App">
      <Layout>
      <Header/>
      <Form/>
      <List/>
      <Todo/>
      <TodoList/>
      </Layout>
    </div>
  );
}

export default App;
