const TodoKey = 'ReactTodo';

export const setLocalStorageTodoData = (task) => {
    return localStorage.setItem(TodoKey , JSON.stringify(task))
}

export const getLocalStorageTodoData = () => {
    const rawTodo =  localStorage.getItem(TodoKey)
    if(!rawTodo) return [];
    return JSON.parse(rawTodo)
}