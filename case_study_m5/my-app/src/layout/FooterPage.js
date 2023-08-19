import React from 'react'
import './style_layout.css';
import "bootstrap/dist/css/bootstrap.css";

export default function FooterPaGE() {
  return (
    <div>
    <footer className="shadow">
    <div className="container-fluid bg-white text-dark mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
            <div className="col-lg-3 col-md-12 mb-5 pr-3 pr-xl-5">
                <h5 className=" text-uppercase mb-4">Furara Resort</h5>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-dark mr-3"></i>68 Le Duan, Đa Nang, Viet Nam
                </p>
                <p className="mb-2"><i className="fa fa-envelope text-dark mr-3"></i>furama@gmail.com</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-dark mr-3"></i>+84 868 68 68 68</p>
            </div>
            <div className="col-lg-9 col-md-12">
                <div className="row">
                    <div className="col-md-3 mb-5">
                        <h5 className=" text-uppercase mb-4">Company</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-dark mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i> Introduce
                            </a>
                            <a className="text-dark mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i> Recruitment</a>
                            <a className="text-dark mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i> News</a>
                            <a className="text-dark mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i> Franchise
                                cooperation</a>
                            <a className="text-dark mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i> Contact</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className=" text-uppercase mb-4">Customer Policy</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-dark mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i> Loyalty policy</a>
                            <a className="text-dark mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i> Return Policy</a>
                            <a className="text-dark mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i> Warranty
                                Policy</a>
                            <a className="text-dark mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i> Privacy Policy</a>
                            <a className="text-dark mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i> Frequently asked
                                questions</a>
                        </div>
                    </div>
                    <div className="col-md-5 mb-5">
                        <h5 className=" text-uppercase mb-4">JOIN OUR NEWSLETTER</h5>
                        <form action="">
                            <div className="input-group">
                                <input className="form-control me-2 border-dark border-2 form-radius-20"
                                       type="search" placeholder="Email" aria-label="Search"/>
                                <button className="btn btn-outline-dark border-2 form-radius-20"  type="submit">
                                    Sign in
                                </button>
                            </div>
                        </form>
                        <h6 className=" text-uppercase mt-4 mb-3">Follow us</h6>
                        <div className="d-flex">
                            <a className="btn btn-outline-dark btn-square mr-2 mx-1 border-dark border-2 form-radius-20"
                                href="/#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-dark btn-square mr-2 mx-1 border-dark border-2 form-radius-20"
                               href="/#"><i
                                    className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-dark btn-square mr-2 mx-1 border-dark border-2 form-radius-20"
                               href="/#"><i
                                    className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-dark btn-square mx-1 border-dark border-2 form-radius-20 "
                               href="/#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row border-top mx-xl-5 py-4">
            <div className="col-md-6 px-xl-0">
                <p className="mb-md-0 text-center text-md-left ">
                    &copy; Furama CO., LTD 68 Le Duan, Son Tra, Đa Nang, Viet Nam
                </p>
            </div>
            <div className="col-md-6 px-xl-0 text-center text-md-right">
                <img className="img-fluid" src="/main/img/payments.png" alt=""/>
            </div>
        </div>
    </div>
</footer>

    </div>
  )
}
