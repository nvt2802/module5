import React, { Component } from 'react'
import './style_contract.css'

export default class ListContract extends Component {
  render() {
    return (
      <div>
        
        <h1 className='my-5'>Contract list</h1>
    <div className='container d-flex justify-content-center my-5'>
    {/* Số hợp đồng, Ngày bắt đầu, Ngày kết thúc, Số tiền cọc trước, Tổng số tiền thanh toán. */}
        <table >
            <tr>
                <th>STT</th>
                <th>Number contract</th>
                <th>Contract start date</th>
                <th>Contract end date</th>
                <th>Advance deposit amount</th>
                <th>Total payment amount</th>
            </tr>
            <tr>
                <td>1</td>
                <td>CT-1234</td>
                <td>11/11/2022</td>
                <td>22/12/2022</td>
                <td>100.000</td>
                <td>100.000.000.000</td>
            </tr>
            <tr>
                <td>1</td>
                <td>CT-1234</td>
                <td>11/11/2022</td>
                <td>22/12/2022</td>
                <td>100.000</td>
                <td>100.000.000.000</td>
            </tr>
            <tr>
                <td>1</td>
                <td>CT-1234</td>
                <td>11/11/2022</td>
                <td>22/12/2022</td>
                <td>100.000</td>
                <td>100.000.000.000</td>
            </tr>
            <tr>
                <td>1</td>
                <td>CT-1234</td>
                <td>11/11/2022</td>
                <td>22/12/2022</td>
                <td>100.000</td>
                <td>100.000.000.000</td>
            </tr>
            <tr>
                <td>1</td>
                <td>CT-1234</td>
                <td>11/11/2022</td>
                <td>22/12/2022</td>
                <td>100.000</td>
                <td>100.000.000.000</td>
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
}
