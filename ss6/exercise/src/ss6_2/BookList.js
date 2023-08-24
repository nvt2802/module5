import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  Link  } from "react-router-dom";

export default function BookList() {
    const[books,setBooks]= useState([])
    useEffect(() => {
        getAll();
    },[])

    const getAll = async () =>{
        const result = await axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books');
        setBooks((prev)=>result.data)
    }

    const deleteBook = async (id) =>{
        const result = await axios.delete('	https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/'+id)
        console.log(result);
        alert(result.status);
    }
  return (
    <div>
        <table>
            <tr>
                <th>Title</th>
                <th>Quantity</th>
                <th>Action</th>
            </tr>
            {
                books.map((book,index)=>{
                    return <tr key={index}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <Link to={`/edit/${book.id}`} >Edit</Link>
                            <button onClick={()=>deleteBook(book.id)}>Delete</button>
                        </td>
                    </tr>
                })
            }
        </table>
    </div>
  )
}
