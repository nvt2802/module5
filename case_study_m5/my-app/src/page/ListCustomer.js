import React from 'react';
import './style_page.css';
import "bootstrap/dist/css/bootstrap.css";


export default function ListCustomer() {
  return (
    <div>
      <h1 className='my-5'>Customer list</h1>
      <div className='container d-flex justify-content-center my-5'>
        <table >
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
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td><button className='btn btn-primary'>Edit</button><button className='btn btn-danger'>Delete</button></td>

          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td><button className='btn btn-primary'>Edit</button><button className='btn btn-danger'>Delete</button></td>

          </tr> <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td><button className='btn btn-primary'>Edit</button><button className='btn btn-danger'>Delete</button></td>

          </tr> <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td><button className='btn btn-primary'>Edit</button><button className='btn btn-danger'>Delete</button></td>

          </tr>
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
  )
}
