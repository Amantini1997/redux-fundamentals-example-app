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

        case ACTION.TODO.ADD:
            return [
                ...state,
                {
                  id: nextTodoId(state),
                  text: payload,
                  completed: false
                }
            ]
    
        case ACTION.TODO.TOGGLE: 
            return state.map(todo => {
                return (todo.id !== payload)
                    ? todo
                    : {
                        ...todo,
                        completed: !todo.completed
                    }
            })

        default:
            return state
    }
}