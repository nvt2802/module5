import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './style_contract.css'
export default class AddContract
    extends Component {
    render() {
        return (
                <div className='d-flex justify-content-center '>
                    <div id='form-input-info' className='shadow'>
                        <h3>Create contract</h3>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form5Example1">Number contract</label>
                            <input type="text" id="form5Example1" className="form-control" />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form5Example2">Contract start date</label>
                            <input type="date" id="form5Example2" className="form-control" />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form5Example3">Contract end date</label>
                            <input type="date" id="form5Example3" className="form-control" />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form5Example3">Advance deposit amount</label>
                            <input type="number" id="form5Example3" className="form-control" />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form5Example3">Total payment amount</label>
                            <input type="number" id="form5Example3" className="form-control" />
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button type="submit" className="btn btn-primary btn-block mb-4 mx-2">Add</button>
                            <button type="submit" className="btn btn-danger btn-block mb-4 mx-2">Cancel</button>
                        </div>
                    </div>
                </div>
            
        )
    }
}
