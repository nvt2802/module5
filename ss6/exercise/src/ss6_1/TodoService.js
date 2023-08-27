import axios from "axios";

export const getTodo = async () =>{
    const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return result;
}

export const createTodo = async (values) =>{
    await axios.post('https://jsonplaceholder.typicode.com/todos',values);
}