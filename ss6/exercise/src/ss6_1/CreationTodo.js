import React from 'react'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import { createTodo } from './TodoService'

export default function CreateTodo() {
    const addTodo = async (values) =>{
       const result = await createTodo();
         console.log(result);
       alert(result.status)
    }
  return (
    <div>
        <Formik
        initialValues={{
            title: "",
            userId:"1",
            completed:"false"
        }}
        validationSchema={Yup.object({
                title: Yup.string()
                .required('Required')
            })
        }
        onSubmit={ async (values) =>{
            await addTodo(values);
        }

        }
        >
            <Form>
                <Field type='text' name='title'/>
                <button type='submit'>submit</button>
                <ErrorMessage name="title" />
            </Form>
            </Formik>       
  </div>
  )
}
