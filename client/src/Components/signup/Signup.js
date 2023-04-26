import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const SignUp = () => {
    const [fname , setFname] = useState("");
    const [lname , setLname] = useState("");
    const [email , setEmail] = useState("");
    const [gender , setGender] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [city , setCity] = useState("");
    const [employeeType , setEmployeeType] = useState("");
    const [password , setPassword] = useState("");

    const navigate = useNavigate();

    const submitData = async (e) => {
        console.warn(fname,lname,gender,email,password,hobbies,city,employeeType);

        e.preventDefault();
            axios.post('http://localhost:8000/signup',{
                mode: 'no-cors',
                fname,lname,gender,email,password,hobbies,city,employeeType
            })
            .then((response) => {
                if(response.data.msg){
                    if(response.data.data.employeeType == "Manager"){
                        navigate("/manager-dashboard");
                        console.warn(response.data);
                    }else{
                        let empRes = response.data.data
                        navigate('/employee-dashboard', {
                            state: {empRes}
                        });
                        console.warn(response.data);
                    }
                }else{
                    console.warn(response);
                    alert(response.data.msg)
                }
            })
            .catch(err => {
            console.error(err);
            });
        }

    return (
        <div className="signup d-flex container pt-5 pb-5" >
        <div className="container " >
            <div className='login-wrap text-center mb-4'>
               <h3>Registration</h3>
            </div>
            <form className="row g-2 needs-validation justify-content-center" >
                <div className="col-md-5 d-flex align-items-center mb-3">
                    <i className="zmdi zmdi-account"></i> 
                    <input type="text" className="form-control pl-5" id="validationCustom01" placeholder="Your First Name" 
                    name="name" value={fname} onChange={(e)=>setFname(e.target.value)} required />
                </div>

                <div className="col-md-5 d-flex align-items-center mb-3">
                    <i className="zmdi zmdi-email"></i> 
                    <input type="email" className="form-control pl-5" id="validationCustom02" placeholder="Your Last Name" 
                    name="email" value={lname} onChange={(e)=>setLname(e.target.value)} required />
                </div>
                 
                <div className="col-md-5 d-flex align-items-center mb-3">
                    <i className="zmdi zmdi-case"></i> 
                    <input type="text" className="form-control pl-5" id="validationCustom03" placeholder="Your Email" 
                    name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </div>

                <div className="col-md-5 d-flex align-items-center mb-3">
                    <i className="zmdi zmdi-phone"></i>
                    <input type="text" className="form-control pl-5" id="validationCustom04" placeholder="Your Gender"
                    name="phone" value={gender} onChange={(e)=>setGender(e.target.value)} required />
                </div>

                <div className="col-md-5 d-flex align-items-center mb-3">
                <i className="zmdi zmdi-phone"></i>
                 <input type="text" className="form-control pl-5" id="validationCustom05" placeholder="Your Hobbies"
                 name="phone" value={hobbies} onChange={(e)=>setHobbies(e.target.value)} required />
                </div>

                <div className="col-md-5 d-flex align-items-center mb-3">
                    <i className="zmdi zmdi-key"></i> 
                    <input type="text" className="form-control pl-5" id="validationCustom06" placeholder="Your City" 
                    name="city" value={city} onChange={(e)=>setCity(e.target.value)} required />
                </div>

                <div className="col-md-5 d-flex align-items-center mb-3">
                    <i className="zmdi zmdi-key"></i> 
                    <input type="password" className="form-control pl-5" id="validationCustom07" placeholder="Password" 
                    name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>

                <div className="col-md-5 d-flex align-items-center mb-3 ">
                    <div>
                    <input
                        type="radio"
                        className="mx-2 "
                        required="required"
                        name="empType"
                        value="Manager"
                        checked={employeeType === 'Manager'}
                        onChange={(e) => setEmployeeType(e.target.value)}
                    />Manager
                    </div>
                    <div>
                    <input
                        type="radio"
                        className="mx-2"
                        required="required"
                        name="empType"
                        value="Employee"
                        checked={employeeType === 'Employee'}
                        onChange={(e) => setEmployeeType(e.target.value)}
                    /> Employee 
                    </div>
                </div>


                <div className="col-md-10 mt-3 row justify-content-end">
                      <button className="btn btn-primary" type="submit" onClick={submitData}>Sign Up</button>
                    
                </div>
            </form>
        </div>
    </div>
    );
}

export default SignUp;
