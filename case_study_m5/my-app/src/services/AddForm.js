import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './style_edit.css'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { createService } from './ServicesService';
export default function AddForm() {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        name: "",
        imgPath: "",
        area: 0,
        rental: 0,
        maxPeople: 0,
        type: null
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Please input name"),
        imgPath: Yup.string().required("Please input image Path"),
        area: Yup.number().required("Please input Area"),
        rental: Yup.number().required("Please input rental"),
        maxPeople: Yup.number().required("Please input max people"),
        type: Yup.number().required("Please input type"),
      })}
      onSubmit={(value)=>{
        createService(value)
        navigate("/")
      }}
    >
      <Form>
        <div className='d-flex justify-content-center'>

          <div id='form-input-info-service' className='shadow'>
            <h3>Create service</h3>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form5Example1">Name</label>
              <Field name='name' type="text" id="form5Example1" className="form-control" />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form5Example2">image path</label>
              <Field name='imgPath' type="text" id="form5Example2" className="form-control" />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form5Example3">Area</label>
              <Field name='area' type="number" id="form5Example3" className="form-control" />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form5Example3">Rental</label>
              <Field name='rental' type="number" id="form5Example3" className="form-control" />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form5Example3">Max people</label>
              <Field name='maxPeople' type="number" id="form5Example3" className="form-control" />
            </div>
            <div className="form-outline mb-4">
              <Field as='select' name='type' class="form-select" aria-label="Default select example">
                <option value="1">Year</option>
                <option value="2">Month</option>
                <option value="3">Day</option>
                <option value="4">Hour</option>
              </Field>
            </div>
            <div className='d-flex justify-content-center'>
              <button type="submit" className="btn btn-primary btn-block mb-4 mx-2">Add</button>
              <Link to={"/"} className="btn btn-danger btn-block mb-4 mx-2">Cancel</Link>
            </div>

          </div>


        </div>
      </Form>
    </Formik>







  )
}
