import Header from './Header'
import HomePage from './HomePage'
import Footer from './Footer'
import AddTodoPage from './AddTodoPage'
import ShowTodoPage from './ShowTodoPage'
import DoneTodoPage from './DoneTodoPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { callGetAllAPI } from './BackendAPI.js'

async function fetchTodos(setTodo) {
  const todoList = await callGetAllAPI('/read-todos');
  setTodo(todoList);
}

function App() {
  // todo is a state type of arrays of object
  let [todo, setTodo] = useState([])

  // useEffect is hook in react which call after App.js component render
  useEffect(() => {
    fetchTodos(setTodo)
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo-add" element={<AddTodoPage todo={todo} setTodo={setTodo} />} />
        <Route path="/todo-show" element={<ShowTodoPage todo={todo} setTodo={setTodo} />} />
        <Route path="/todo-done" element={<DoneTodoPage todo={todo} setTodo={setTodo} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
