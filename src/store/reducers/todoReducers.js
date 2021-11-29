import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../actions/type"

const initialState = {
    todo:"saira",
    tasks:[
       
    ]
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case EDIT_TODO:
      return [...state]
    case REMOVE_TODO:
      return {
        ...state,
        tasks:action.payload
      }
  }
  return state
}

export default todoReducer