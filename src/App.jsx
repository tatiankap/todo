import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const inputRef = useRef(null);

  const addTask = () => {
    setTodoList(todos => ([...todos, { task: currentTask, completed: false }]));
    inputRef.current.value = '';
    setCurrentTask('')
  }

  const deleteTask = (task) => {
    setTodoList(todos => todos.filter(todo => todo.task !== task))
  }

  const completeTask = (task) => {
    setTodoList(todos => todos.map(todo => todo.task === task ? { ...todo, completed: !todo.completed } : todo))
  }

  return (
    <div className='app'>
      <h1>Todo List</h1>
      <div>
        <input ref={inputRef} type="text" placeholder='Task...' onKeyDown={e => {
          if (e.keyCode == 13) {
            addTask()
          }
        }} onChange={(e) => setCurrentTask(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr />
      <ul>
        {
          todoList.map((todo, key) => <div key={key} id='task'>
            <li key={key}>{todo.task}</li>
            <button onClick={() => completeTask(todo.task)}>Completed</button>
            <button onClick={() => deleteTask(todo.task)}>x</button>
            {todo.completed ? <h5>Task completed</h5> : <h5>Task not completed</h5>}
          </div>)
        }
      </ul>
    </div>
  )
}

export default App
