import React,{useEffect} from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
// import { toast } from "react-toastify";
import * as Yup from "yup"
import './style.css'


export default function Contact() {
    useEffect(() => {
        console.log("useEffect");
        return () => {
         console.log("Clean up");
        }
    })
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    msg: ''
                }}

                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Name is not empty")
                        .min(3, "Name too short")
                        .matches(/^[a-z A-Z ]+$/, "Name invalid"),
                    email: Yup.string()
                    .required("Email is not empty")
                    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"invalid email address"),
                    phone: Yup.string()
                    .required("Phone number is not empty"),
                })}

                onSubmit={(values, { setSubmitting }) => {
                    //call API
                    setTimeout(() => {
                        console.log(values);
                        alert("ok")
                    }, 2000)
                }}
            >
                <Form>
                    <div className='container'>
                        <h1>Create Student</h1>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-label'>Name</label>
                            <Field type='text' className='form-control' id='Name' name='name' />
                            <ErrorMessage name="name" component='span' className="form-error" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>Email</label>
                            <Field type='text' className='form-control' id='Email' name='email' />
                            <ErrorMessage name="email" component='span' className="form-error" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Phone' className='form-label'>Phone number</label>
                            <Field type='text' className='form-control' id='Phone' name='phone' />
                            <ErrorMessage name="phone" component='span' className="form-error" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Msg' className='form-label'>msg</label>
                            <Field as="textarea" type='text' className='form-control' id='Msg' name='msg' />
                            <ErrorMessage name="msg" component='span' className="form-error" />
                        </div>


                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </Form>
            </Formik>

        </>
    )
}
