import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { getAllService } from '../services/ServicesService';

export default function CardList() {
    const [services, setServices] = useState([])

    useEffect(() => {
        getAllServices();
    }, [])

    const getAllServices = async () => {
        const tmpServices = await getAllService();
        setServices((prev) => tmpServices);
    }

    return (
        <div >
            <div className='container my-5'>
                <div className='row ' >
                    {
                        services.map((service) => {
                            return (
                                <div className="col-3 col-md-3 mb-5">
                                    <div className="card shadow">
                                        <img src={service.imgPath} className="card-img-top rounded-top object-fit-cover" height={'200px'} alt="Themesberg office" />
                                        <div className="card-body">
                                            {/* <span className="h6 icon-tertiary small"><span className="fas fa-medal me-2"></span>Awards</span> */}
                                            <h3 className="h5 card-title mt-3">{service.name}</h3>
                                            <p className="card-text">{service.rental} đ</p>
                                            <div className='container d-flex justify-content-center'>
                                                <a href="/#" className="btn btn-primary btn-sm mx-2">Edit</a>
                                                <a href="/#" className="btn btn-danger btn-sm mx-2">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
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
