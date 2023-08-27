import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { bookDetail, updateBook } from './BookService';

export default function EditBook() {
    const navigate = useNavigate();

    const params = useParams()

    const [book,setBook] = useState()

    useEffect(()=>{
        loadBook(params);
    },[params])

    const loadBook = async (params) =>{
      const result = await bookDetail(params.id);
      setBook((pre) => result.data);
    }

    const update = async (values) =>{
        const result = await updateBook(params.id,values);
       console.log(result)
        navigate("/");
    }
  return (
    <div className='container '>
   { book !== undefined ? 
   <Formik
   initialValues={
      {
        id:book?.id,
       title: book?.title,
       quantity: book?.quantity
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
       <Field className="form-control" type='text' id='Title' name='title' /><br/>
       <label htmlFor='Quantity'>Quantity</label>
       <Field  className="form-control" type='number' id='Quantity' name='quantity' /><br/>
       <button className="btn btn-primary" type='submit'>update</button>
   </Form>
</Formik> : ""} 
   </div>
  )
}
