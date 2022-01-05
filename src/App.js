import React from 'react'
import appReducer from './reducer';
import { STATUS } from './reducerConfig';

const state = {
  todos: [],
  filter: {
    status: STATUS.ALL,
    colors: []
  }
};

function createTodo() {
  const input = document.getElementById("new-todo"); 
  console.log(input.value)
  appReducer(state, input.value)
  input.value = ""
}

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section>
        <h2>New Todo</h2>
        <input id="new-todo"/>
        <button onClick={createTodo}>create</button>
      </section>
      <section>
        {state.todos.map(todo => <div>{todo.id}: {todo.text}</div>)}
      </section>
    </div>
  )
}

export default App
