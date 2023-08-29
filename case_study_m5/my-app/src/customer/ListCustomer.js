import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { getAllCustomer } from './CustomerService';
import { Link } from 'react-router-dom';
import ModalConfirm from './ModalConfirm';


export default function ListCustomer() {
  const[custommers,setCustomers] = useState([]);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataCustomerDelete, setDataCustomerDelete] = useState({});
  useEffect(()=>{
      getAllCustomers();
  },[]);
  const getAllCustomers= async()=>{
    const custommerlist = await getAllCustomer();
    setCustomers((prev) => custommerlist)
  }
  const handleDelete = (customer) => {
    setIsShowModalDelete((prev) => true);
    setDataCustomerDelete((prev) => customer);
}
const handleClose = () => {
  setIsShowModalDelete((prev) => false);
  getAllCustomers();
}
  return (
    <div>
      <h1 className='my-5'>Customer list</h1>
      <div className='container'>
      <Link className='btn btn-primary' to={"/add-customer"}>Add new customer</Link>
      <div className=' d-flex justify-content-center my-5'>
        <table >
          <thead>
          <tr>
            <th>STT</th>
            <th>Full name</th>
            <th>Date of birth</th>
            <th>Gender</th>
            <th>ID No</th>
            <th>Phone number</th>
            <th>Type</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            {
              custommers.map((custommer,index) => {
                return (
                <tr key={"c_"+index}>
                  <td>{index+1}</td>
                <td>{custommer.name}</td>
                <td>{custommer.dob}</td>
                <td>{custommer.gender}</td>
                <td>{custommer.idno}</td>
                <td>{custommer.phone_number}</td>
                <td>{custommer.type.name}</td>
                <td>{custommer.address}</td>
                <td><Link to={`/edit-customer/${custommer.id}`} className='btn btn-primary'>Edit</Link><button onClick={()=>handleDelete(custommer)} className='btn btn-danger'>Delete</button></td>
              </tr>)
              })

            }
          </tbody>
        </table>

      </div>
      <div className="container d-flex justify-content-center">
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="/#" tabindex="-1">&laquo;</a>
            </li>
            <li className="page-item"><a className="page-link" href="/#">1</a></li>
            <li className="page-item active">
              <a className="page-link" href="/#">2 <span className="sr-only"></span></a>
            </li>
            <li className="page-item"><a className="page-link" href="/#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="/#">&raquo;</a>
            </li>
          </ul>
        </nav>
      </div>
      </div>
      <ModalConfirm
       show={isShowModalDelete}
       handleClose={handleClose} 
       dataCustomerDelete = {dataCustomerDelete}/>
    </div>
  )
}
