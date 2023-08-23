import { ErrorMessage, Field, Form, Formik } from "formik";
import React from 'react'
import * as Yup from "yup"


export default function MedicalDeclaration() {
    return (
        <div>
            <Formik
            initialValues={{
                name:"",
                IdNo:"",
                year:"1901",
                gender:"1",
                country:"",
                company:"",
                socialInsurance:"0",
                city:"",
                district:"",
                wards:"",
                address:"",
                phone:"",
                email:"",
                ifno:"",
                symptom:[],
                contacts:[]
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                .required("Khong duoc de trong"),
                IdNo:Yup.string()
                .required("Khong duoc de trong"),
                year:Yup.number()
                .min(1900)
                .max(2023)
                .required("Khong duoc de trong"),
                country:Yup.string()
                .required("Khong duoc de trong"),
                city:Yup.string()
                .required("Khong duoc de trong"),
                district:Yup.string()
                .required("Khong duoc de trong"),
                wards:Yup.string()
                .required("Khong duoc de trong"),
                address:Yup.string()
                .required("Khong duoc de trong"),
                phone:Yup.string()
                .required("Khong duoc de trong"),
                email:Yup.string()
                .required("Khong duoc de trong")
                .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"invalid email address")

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
                    <div className="container">
                        <h1>To khai y te</h1>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Name</label>
                            <Field type='text' className='form-control' id='studentName' name='name' />
                            <ErrorMessage name="name" component='small' className="form-error" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='IDNo' className='form-label'>So ho chieu/CMND</label>
                            <Field type='text' className='form-control' id='IDNo' name='IdNo' />
                            <ErrorMessage name="IdNo" component='small' className="form-error" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Year' className='form-label'>Nam sinh</label>
                            <Field type='number' className='form-control' id='Year' name='year' />
                            <ErrorMessage name="year" component='small' className="form-error" />
                        </div>
                        <div className='mb-3'>
                            <span>Gioi tinh </span>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" id="inlineRadio1"
                                    value="1" name="gender" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field name="gender" className="form-check-input" type="radio" id="inlineRadio2"
                                    value="0" />
                                <label className="form-check-label" htmlFor="inlineRadio2">Nu</label>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Country' className='form-label'>Quoc tich</label>
                            <Field type='text' className='form-control' id='Country' name='country' />
                            <ErrorMessage name="country" component='small' className="form-error" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Company' className='form-label'>Cong ty lam viec</label>
                            <Field type='text' className='form-control' id='Company' name='company' />
                            <ErrorMessage name="company" component='small' className="form-error" />
                        </div>
                        <div className='mb-3'>
                        <div className="form-check">
                        <label className="form-check-label" htmlFor="SocialInsurance">
                                    Co the bao hiem xa hoi
                                </label>
                                <Field name="socialInsurance" className="form-check-input" type="checkbox" value="1" id="SocialInsurance" />
                                
                            </div>
                        </div>
                        <h3>Dia chi lien lac tai Viet Nam</h3>
                        <div className='mb-3'>
                            <label htmlFor='City' className='form-label'>Tinh Thanh</label>
                            <Field type='text' className='form-control' id='City' name='city' />
                            <ErrorMessage name="city" component='small' className="form-error" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='District' className='form-label'>Quan/huyen</label>
                            <Field type='text' className='form-control' id='District' name='district' />
                            <ErrorMessage name="district" component='small' className="form-error" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Wards' className='form-label'>Phuong/Xa</label>
                            <Field type='text' className='form-control' id='Wards' name='wards' />
                            <ErrorMessage name="wards" component='small' className="form-error" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Address' className='form-label'>So nha, pho, to dan pho/thon/doi</label>
                            <Field type='text' className='form-control' id='Address' name='address' />
                            <ErrorMessage name="address" component='small' className="form-error" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Phone' className='form-label'>Dien thoai</label>
                            <Field type='text' className='form-control' id='Phone' name='phone' />
                            <ErrorMessage name="phone" component='small' className="form-error" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>Email</label>
                            <Field type='text' className='form-control' id='Email' name='email' />
                            <ErrorMessage name="email" component='small' className="form-error" />
                        </div>
                        <div className='mb-3'>
                            <h5>trong vong 14 ngay qua, Anh/ chi co den quoc gia/ lanh tho nao(co the di qua nhieu quoc gia)</h5>
                            <Field as="textarea" type='text' className='form-control' id='Email' name='info' />
                            <ErrorMessage name="info" component='small' className="form-error" />
                        </div>
                        <div className="mb-3">
                            <h5>trong vong 14 ngay qua, Anh/ chi co thay xuat hien dau hieu nao sau day khong?</h5>
                            <div className="form-check">
                                <Field name="symptom" className="form-check-input" type="checkbox" value="1" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Sot
                                </label>
                            </div>
                            <div className="form-check">
                                <Field name="symptom" className="form-check-input" type="checkbox" value="2" id="cb1" />
                                <label className="form-check-label" htmlFor="cb1">
                                    Ho
                                </label>
                            </div>
                            <div className="form-check">
                                <Field name="symptom" className="form-check-input" type="checkbox" value="3" id="cb2" />
                                <label className="form-check-label" htmlFor="cb2">
                                    Kho tho
                                </label>
                            </div>
                            <div className="form-check">
                                <Field name="symptom" className="form-check-input" type="checkbox" value="4" id="cb3" />
                                <label className="form-check-label" htmlFor="cb3">
                                    Viem phoi
                                </label>
                            </div>
                            <div className="form-check">
                                <Field name="symptom" className="form-check-input" type="checkbox" value="5" id="cb4" />
                                <label className="form-check-label" htmlFor="cb4">
                                    Dau hong
                                </label>
                            </div>
                            <div className="form-check">
                                <Field name="symptom" className="form-check-input" type="checkbox" value="6" id="cb5" />
                                <label className="form-check-label" htmlFor="cb5">
                                    Met moi
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <h5>trong vong 14 ngay qua, Anh/ chi co tiep xuc voi?</h5>
                            <div className="form-check">
                                <Field name="contacts" className="form-check-input" type="checkbox" value="1" id="cbc1" />
                                <label className="form-check-label" htmlFor="cbc1">
                                    Nguoi benh hoac nghi ngo mac benh COVID-19
                                </label>
                            </div>
                            <div className="form-check">
                                <Field name="contacts" className="form-check-input" type="checkbox" value="2" id="cbc2" />
                                <label className="form-check-label" htmlFor="cbc2">
                                    Nguoi tu nuoc co benh COVID-19
                                </label>
                            </div>
                            <div className="form-check">
                                <Field name="contacts" className="form-check-input" type="checkbox" value="3" id="cbc3" />
                                <label className="form-check-label" htmlFor="cbc3">
                                    Nguoi co bieu hien (Sot, ho, kho tho, viem phoi)
                                </label>
                            </div>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </Form>


            </Formik>

        </div>
    )
}