import { ACTION } from "../../reducerConfig"

const initialState = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
]

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

export default function todosReducer(state = initialState, {type, payload}) {
    switch (type) {

        case ACTION.TODO_ADD:
            const newTodo = {
                id: nextTodoId(state.todos),
                text: payload,
                completed: false
            }
            return {
                ...state,
                todos: state.todos.concat(newTodo)
            }
    
        case ACTION.TODO_TOGGLE: {
            return {
                ...state,
                todos: state.todos.map(todo => {
                    return (todo.id !== payload)
                        ? todo
                        : {
                            ...todo,
                            completed: !todo.completed
                        }
                })
            }
        }

        default:
            return state
    }
}