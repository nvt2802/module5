import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './style_edit.css'

export default function 
() {
  return (
    <div className='d-flex justify-content-center'>
        
    <div id='form-input-info'>
      <h3>Create service</h3>
    <div className="form-outline mb-4">
<label className="form-label" htmlFor="form5Example1">Name</label>
<input type="text" id="form5Example1" className="form-control" />
</div>
<div className="form-outline mb-4">
<label className="form-label" htmlFor="form5Example2">Area</label>
<input type="text" id="form5Example2" className="form-control" />
</div>
<div className="form-outline mb-4">
<label className="form-label" htmlFor="form5Example3">Rental</label>
<input type="text" id="form5Example3" className="form-control" />
</div>
<div className="form-outline mb-4">
<select class="form-select" aria-label="Default select example">
<option selected>Type</option>
<option value="1">Year</option>
<option value="2">Month</option>
<option value="3">Day</option>
<option value="4">Hour</option>
</select>
</div>
<div className='d-flex justify-content-center'> 
 <button type="submit" className="btn btn-primary btn-block mb-4 mx-2">Add</button>
<button type="submit" className="btn btn-danger btn-block mb-4 mx-2">Cancel</button>
</div>

    </div>


</div>
  )
}
