import axios from 'axios'
import { Field, Form, Formik } from 'formik';
import {  useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

export default function CreateBook() {
    const navigate = useNavigate();
    const addBook = async (values) => {
        const result = await axios.post(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books`, values);
        console.log(result);
        navigate("/");
    }
    return (

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
                <Field type='text' id='Title' name='title' />
                <label htmlFor='Quantity'>Quantity</label>
                <Field type='number' id='Quantity' name='quantity' />
                <button type='submit'>Create</button>
            </Form>
        </Formik>

    )
}
