import { ACTION, STATUS } from "../../reducerConfig"

const initialState = {
    status: STATUS.ALL,
    colors: []
}
  
export default function filtersReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ACTION.FILTER.CHANGE_STATUS: {
            return {
                ...state,
                status: payload
            }
        }
        default:
            return state
        }
}