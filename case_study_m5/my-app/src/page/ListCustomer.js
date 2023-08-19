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
            </tr>
        </table>

    </div>
    <div className="demo container d-flex justify-content-center">
    <nav className="pagination-outer" aria-label="Page navigation">
        <ul className="pagination">
            <li className="page-item">
                <a href="/#" className="page-link" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                </a>
            </li>
            <li className="page-item"><a className="page-link" href="/#">1</a></li>
            <li className="page-item active"><a className="page-link" href="/#">2</a></li>
            <li className="page-item"><a className="page-link" href="/#">3</a></li>
            <li className="page-item">
                <a href="/#" className="page-link" aria-label="Next">
                    <span aria-hidden="true">»</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
    </div>
  )
}
