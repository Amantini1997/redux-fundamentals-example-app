import React, { useState } from 'react'
import { ACTION } from './reducerConfig';
import store from './store';

function createTodo() {
  const input = document.getElementById("new-todo"); 
  const payload = input.value;
  store.dispatch({ type: ACTION.TODO.ADD, payload });
  input.value = "";
}

function App() {
  let [todos, setTodos] = useState(store.getState().todos);
  store.subscribe(() => setTodos(store.getState().todos));
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
        {todos.map(todo => <div>{todo.id}: {todo.text}</div>)}
      </section>
    </div>
  )
}

export default App
