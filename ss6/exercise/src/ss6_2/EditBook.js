import axios from 'axios'
import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'

export default function EditBook() {
    const navigate = useNavigate();

    const {id} = useParams()

    const [book,setBook] = useState({   
        title:"",
        quantity:""
    })

    useEffect(()=>{
        loadBook();
    },[])

    const loadBook = async () =>{
      const result = await axios.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`);
      console.log(result.data.title);
      setBook(result.data);
      console.log(book);
    }

    const update = async (e) =>{
        const result = await axios.put(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`,book);
       console.log(result)
        navigate("/");
    }
  return (
   
    <Formik
    initialValues={
       {
        title:'',
        quantity:""
       }
    }

    validationSchema={Yup.object({
        title: Yup.string()
            .required("Required"),
        quantity: Yup.number()
            .required("Required")
    })}
    onSubmit={async (values) => {
        await update(values);
    }}
>
    <Form>
        <label htmlFor='Title'>Title</label>
        <Field type='text' id='Title' name='title' />
        <label htmlFor='Quantity'>Quantity</label>
        <Field type='number' id='Quantity' name='quantity' />
        <button type='submit'>update</button>
    </Form>
</Formik>
  )
}
