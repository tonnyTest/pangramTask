import React, {useState} from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const EmpEditForm = (props) => {
    let data = props?.employeeData
    const navigate = useNavigate();

    const [fname , setFname] = useState(data.fname);
    const [lname , setLname] = useState(data.lname);
    const [email , setEmail] = useState(data.email);
    const [salary , setSalary] = useState(data.salary);
    const [department , setDepartment] = useState(data.department);
    const [category , setCategory] = useState(data.category);

    

    const handleChanges = async (e) => {
        const empEditData = { fname,lname,email,salary,department,category };

        e.preventDefault();
            axios.put(`http://localhost:8000/updateEmpData/${email}`, empEditData )
            .then((response) => {
                if(response.data.msg){
                    alert(response.data.msg)
                    setTimeout(() => {
                        window.location.reload()
                      }, 100);
                }else{
                    alert(response.data.msg)
                }
            })
            .catch(err => {
            console.error(err);
            });
        }
    

    return (
        <div>
            {/* <ToastContainer /> */}
            <Form>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>
                        Emp ID : {" "}<span className="text-danger">{data._id}</span>
                    </Form.Label>
                </Form.Group>

                <div className='col-md-12 row'>
                    <div className='col-md-6'>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>
                                First Name <span className="text-danger">*</span>{" "}
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="fname"
                                required="required"
                                value={fname}
                                onChange={(e)=>setFname(e.target.value)}
                                placeholder="ashish"
                            />
                        </Form.Group>
                    </div>
                    <div className='col-md-6'>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>
                                Last Name <span className="text-danger">*</span>{" "}
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="lname"
                                required="required"
                                value={lname}
                                onChange={(e)=>setLname(e.target.value)}
                                placeholder="hurmale"
                            />
                        </Form.Group>
                    </div>
                </div>

                <div className='col-md-12 row'>
                    <div className='col-md-6'>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>
                                Email <span className="text-danger">*</span>{" "}
                            </Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                required="required"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder="example@gmail.com"
                            />
                        </Form.Group>
                    </div>
                    <div className='col-md-6'>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>
                                Salary <span className="text-danger">*</span>{" "}
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="salary"
                                required="required"
                                value={salary}
                                onChange={(e)=>setSalary(e.target.value)}
                                placeholder="5000"
                            />
                        </Form.Group>
                    </div>
                </div>

                <div className='col-md-12 row'>
                    <div className='col-md-6'>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>
                                Category <span className="text-danger">*</span>{" "}
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="category"
                                required="required"
                                value={category}
                                onChange={(e)=>setCategory(e.target.value)}
                                placeholder="b-class"
                            />
                        </Form.Group>
                    </div>
                    <div className='col-md-6'>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>
                                Department <span className="text-danger">*</span>{" "}
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="department"
                                required="required"
                                value={department}
                                onChange={(e)=>setDepartment(e.target.value)}
                                placeholder="IT"
                            />
                        </Form.Group>
                    </div>
                </div>

                <div className='col-md-12 row d-flex justify-content-end'>
                    <div className='col-md-2 text-end px-4' >
                        <Button onClick={handleChanges}>Update</Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}
