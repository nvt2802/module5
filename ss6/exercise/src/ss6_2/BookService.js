import axios from 'axios';


export const createBook = async (book) => {
    await axios.post(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books`, book);
}

export const getBooks = async () => {
    const result = await axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books');
    return result;
}

export const bookDetail = async (id) => {
    const result = await axios.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`);
    return result;
}

export const deleteBook = async (id) => {
    await axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`);
}

export const updateBook = async (book) => {
    await axios.put(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${book.id}`,book);
}