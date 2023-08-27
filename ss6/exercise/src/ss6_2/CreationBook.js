
import { Field, Form, Formik } from 'formik';
import {  useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { createBook } from './BookService';

export default function CreateBook() {
    const navigate = useNavigate();
    const addBook = async (values) => {
        const result = await createBook();
        console.log(result);
        navigate("/");
    }
    return (
        <div className='container'>
        <Formik
            initialValues={{
                title: "",
                quantity: "0"
            }}

            validationSchema={Yup.object({
                title: Yup.string()
                    .required("Required"),
                quantity: Yup.number()
                    .required("Required")
            })}
            onSubmit={async (values) => {
                await addBook(values);
            }}
        >
            <Form>
                <label htmlFor='Title'>Title</label>
                <Field className='form-control my-2' type='text' id='Title' name='title' />
                <label htmlFor='Quantity'>Quantity</label>
                <Field className='form-control my-2' type='number' id='Quantity' name='quantity' />
                <button className="btn btn-primary" type='submit'>Create</button>
            </Form>
        </Formik>
        </div>
    )
}
