import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "./type"

export const AddTodo = (payload) => {
    console.log(payload)
    return {
        type:ADD_TODO,
        payload
    }
}

export const EditTodo = (payload) => {
    return {
        type:EDIT_TODO,
        payload
    }
}

export const RemoveTodo = (payload) => {
    return {
        type:REMOVE_TODO,
        payload
    }
}


