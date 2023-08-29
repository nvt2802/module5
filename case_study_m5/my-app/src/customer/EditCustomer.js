import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './style_customer.css'
import { useParams } from 'react-router-dom';
import { getAllCustomerType, getCustomer, updateCustomer } from './CustomerService';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';


export default function EditCustomer() {
    const navigate =useNavigate();
    const params = useParams();
    const[customer , setCustomer]=useState();
    const [customerTypes,setCustomerTypes]=useState([]);

    useEffect(()=>{
        getAllCustomerTypes();
        loadCustomer(params.id);
    },[params])
    const getAllCustomerTypes = async() =>{
        const tmpCustomerTypes = await getAllCustomerType();
        setCustomerTypes((prev)=>tmpCustomerTypes);
    }
    const loadCustomer = async (id) =>{
        const tmpCustomer = await getCustomer(id);
        setCustomer((prev)=> tmpCustomer);
    }

    if(customer == undefined){
        return null;
    }

    
  return (
    <Formik
        initialValues={{
            id: customer?.id,
            name :customer?.name,
            dob :customer?.dob,
            gender : customer?.gender,
            idno : customer?.idno,
            phone_number :customer?.phone_number,
            email : customer?.email,
            type : customer?.type.id,
            address : customer?.address,
        }}
        validationSchema={Yup.object({
            name: Yup.string().required("Please input name"),
            dob: Yup.string().required("Please input date of birth"),
            gender: Yup.string().required("Please input gender"),
            idno: Yup.string().required("Please input ID No"),
            phone_number: Yup.string().required("Please input phone number"),
            email: Yup.string().required("Please input email"),
            type: Yup.string().required("Please input type"),
            address: Yup.string().required("Please input address")
        })}
        onSubmit={(value) => {
            updateCustomer(value);
            navigate("/customer");
        }}
        >
            <Form>
        <div className='d-flex justify-content-center'>
            {/* : Họ tên, Ngày sinh, Giới tính, Số CMND, Số Điện Thoại, Email, Loại khách, Địa chỉ  */}
            <div id='form-input-info-customer' className='shadow'>

                <h3>Create customer</h3>
                <div className='row d-flex'>
                    <div className='col-6'>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form5Example1">Full name</label>
                            <Field type="text" id="form5Example1" className="form-control" name='name'/>
                            <ErrorMessage name="name" style={{color:"red"}} component='small' className="form-error" />
                        </div>
                        <div className="form-outline mb-4">
                            <label>Gender</label><br/>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" id="inlineRadio1"
                                    value="1" name="gender" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field name="gender" className="form-check-input" type="radio" id="inlineRadio2"
                                    value="0" />
                                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                            </div>
                            <ErrorMessage name="gender" style={{color:"red"}} component='small' className="form-error" />
                        </div>
                        <div className="form-outline mb-4">
                            <label  className="form-label" htmlFor="form5Example2">Date of birth</label>
                            <Field name="dob" type="date" id="form5Example2" className="form-control" />
                            <ErrorMessage name="dob" style={{color:"red"}} component='small' className="form-error" />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form5Example3">ID No</label>
                            <Field name='idno' type="text" id="form5Example3" className="form-control" />
                            <ErrorMessage name="idno"  style={{color:"red"}} component='small' className="form-error" />
                        </div>

                    </div>
                    <div className='col-6'>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form5Example3">Phone number</label>
                            <Field name='phone_number' type="text" id="form5Example3" className="form-control" />
                            <ErrorMessage name="phone_number" style={{color:"red"}} component='small' className="form-error" />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form5Example3">Email</label>
                            <Field name='email' type="text" id="form5Example3" className="form-control" />
                            <ErrorMessage name="email"  style={{color:"red"}} component='small' className="form-error" />
                        </div>
                        <div className="form-outline mb-4">
                            <label>Type customer</label>
                            <Field name='type' as="select" class="form-select" aria-label="Default select example">
                            {
                                    customerTypes.map((customerType)=>{
                                      return <option value={customerType.id}>{customerType.name}</option>
                                    })
                                }
                            </Field>
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form5Example3">Address</label>
                            <Field name='address' type="text" id="form5Example3" className="form-control" />
                            <ErrorMessage name="address" style={{color:"red"}} component='small' className="form-error" />
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <button type="submit" className="btn btn-primary btn-block mb-4 mx-2">Update</button>
                    <Link to={'/customer'} className="btn btn-danger btn-block mb-4 mx-2">Cancel</Link>
                </div>

            </div>
        </div>
        </Form>
        </Formik>

  )
}
