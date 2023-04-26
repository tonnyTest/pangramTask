import React from "react";
import { useLocation } from 'react-router-dom';

import {
    Col,
    Row,
} from "react-bootstrap";


const EmployeeDashboard = () => {
    const location = useLocation();
    const data = location.state?.empRes;

    console.warn("outside", data);

    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <Row className="mt-5 justify-content-center">
                        <Col md={4}>
                            <h3>- Employee's Dashboard - </h3>
                        </Col>
                    </Row>
                    <Row className="mt-1 justify-content-center" style={{ border: "1px solid black" }}>

                        <Row className="mt-3">
                            <div className='col-md-12 row justify-content-center'>
                                <div className='col-md-2'><h6>First Name : </h6></div>
                                <div className='col-md-3'><h5>{data?.fname}</h5></div>
                            </div>
                        </Row>
                        <Row className="mt-3">
                            <div className='col-md-12 row justify-content-center'>
                                <div className='col-md-2'><h6>Last Name : </h6></div>
                                <div className='col-md-3'><h5>{data?.lname}</h5></div>
                            </div>
                        </Row>
                        <Row className="mt-3">
                            <div className='col-md-12 row justify-content-center'>
                                <div className='col-md-2'><h6>Email : </h6></div>
                                <div className='col-md-3'><h5>{data?.email}</h5></div>
                            </div>
                        </Row>
                        <Row className="mt-3">
                            <div className='col-md-12 row justify-content-center'>
                                <div className='col-md-2'><h6>Gender : </h6></div>
                                <div className='col-md-3'><h5>{data?.gender}</h5></div>
                            </div>
                        </Row>
                        <Row className="mt-3">
                            <div className='col-md-12 row justify-content-center'>
                                <div className='col-md-2'><h6>Department : </h6></div>
                                <div className='col-md-3'><h5>{data?.department}</h5></div>
                            </div>
                        </Row>
                        <Row className="mt-3">
                            <div className='col-md-12 row justify-content-center'>
                                <div className='col-md-2'><h6>Category : </h6></div>
                                <div className='col-md-3'><h5>{data?.category}</h5></div>
                            </div>
                        </Row>
                        <Row className="mt-3">
                            <div className='col-md-12 row justify-content-center'>
                                <div className='col-md-2'><h6>Hobbies : </h6></div>
                                <div className='col-md-3'><h5>{data?.hobbies}</h5></div>
                            </div>
                        </Row>
                        <Row className="mt-3">
                            <div className='col-md-12 row justify-content-center'>
                                <div className='col-md-2'><h6>Gender : </h6></div>
                                <div className='col-md-3'><h5>{data?.gender}</h5></div>
                            </div>
                        </Row>
                        <Row className="mt-3">
                            <div className='col-md-12 row justify-content-center'>
                                <div className='col-md-2'><h6>City : </h6></div>
                                <div className='col-md-3'><h5>{data?.city}</h5></div>
                            </div>
                        </Row>
                    </Row>
                </div>
            </div>
        </>
    );
}


export default EmployeeDashboard;

