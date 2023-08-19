import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './style_customer.css'

export default function AddCustomer() {
    return (
        <div className='d-flex justify-content-center'>
            {/* : Họ tên, Ngày sinh, Giới tính, Số CMND, Số Điện Thoại, Email, Loại khách, Địa chỉ  */}
            <div id='form-input-info'>

                <h3>Create customer</h3>
                <div className='row d-flex'>
                    <div className='col-6'>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form5Example1">Full name</label>
                            <input type="text" id="form5Example1" className="form-control" />
                        </div>
                        <div className="form-outline mb-4">
                            <label>Gender</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </select>
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form5Example2">Date of birth</label>
                            <input type="date" id="form5Example2" className="form-control" />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form5Example3">ID No</label>
                            <input type="text" id="form5Example3" className="form-control" />
                        </div>

                    </div>
                    <div className='col-6'>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form5Example3">Phone number</label>
                            <input type="text" id="form5Example3" className="form-control" />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form5Example3">Email</label>
                            <input type="text" id="form5Example3" className="form-control" />
                        </div>
                        <div className="form-outline mb-4">
                            <label>Type customer</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Type</option>
                                <option value="1">Member</option>
                                <option value="2">Silver</option>
                                <option value="3">Gold</option>
                                <option value="4">Platinum</option>
                                <option value="4">Diamon</option>
                            </select>
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form5Example3">Address</label>
                            <input type="text" id="form5Example3" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <button type="submit" className="btn btn-primary btn-block mb-4 mx-2">Add</button>
                    <button type="submit" className="btn btn-danger btn-block mb-4 mx-2">Cancel</button>
                </div>

            </div>
        </div>


    )
}
