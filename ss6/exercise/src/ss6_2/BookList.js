import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import ModalConfirm from './ModalConfirm';
import {getBooks} from './BookService'

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataBookDelete, setDataBookDelete] = useState({});

    useEffect(() => {
        getAll();
    }, [])

    const handleClose = () => {
        setIsShowModalDelete((prev) => false);
    }

    const getAll = async () => {
        const result = await getBooks();
        setBooks(prev => result.data);
    }

   

    const handleDelete = (book) => {
        setIsShowModalDelete((prev) => true);
        setDataBookDelete((prev) => book);
        console.log(book);
    }

    return (
        <div className='container'>
            <table className='table table-success table-striped border border-info-subtle border-3 '>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => {
                        return (
                            <tr key={index}>
                                <td>{book.title}</td>
                                <td>{book.quantity}</td>
                                <td>
                                    <Link className='btn btn-primary mx-2' to={`/edit/${book.id}`}>Edit</Link>
                                    <button className='btn btn-danger' onClick={() => handleDelete(book)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
         
            <ModalConfirm
                show={isShowModalDelete}
                handleClose={handleClose} 
                dataBookDelete = {dataBookDelete}
                /> 
        </div>
    )
}