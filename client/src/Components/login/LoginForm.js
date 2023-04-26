import axios from "axios";
import React, { useState } from "react";
import { Link , useNavigate } from 'react-router-dom';


const LoginForm =()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        console.warn("data",email,password)
        e.preventDefault();
            axios.post('http://localhost:8000/login',{
                mode: 'no-cors',
                email: email,
                password: password
            })
            .then((response) => {
                if(response.data.token){
                    if(response.data.user.employeeType == "Manager"){
                        navigate("/manager-dashboard");
                        console.warn(response.data);
                    }else{
                        let empRes = response.data.user
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
        <div className="container-fluid">
            <div className="container">
                <div className="row col-md-12 m-5" >
                    <div className="col-md-3"></div>
                    <div className="col-md-6 ">
                        <form method="post">
                            <div className="login-wrap">
                                <h3 className="text-center">Login Form</h3>
                             
                                <div className="form-group mt-4">
                                    <span>Email</span>
                                    <input type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        onChange={(e) => setEmail(e.target.value)} value={email}
                                        aria-describedby="emailHelp" />
                                </div>

                                <div className="form-group mt-4">
                                    <span>Password</span>
                                    <input type="password"
                                        className="form-control"
                                        id="exampleInputPassword"
                                        onChange={(e) => setPassword(e.target.value)} value={password}
                                        aria-describedby="emailHelp" />
                                </div>

                                <div className="sps-sign mt-4 col-md-12" >
                                    <button className="btn btn-primary" style={{ width: "100%"}} onClick={(e) => handleSubmit(e)} >Login</button>
                                </div>
                                <div className="sps-sign mt-3" style={{ textAlign: "end"}}>
                                  <Link to="/sign-up" className="btn-btn" style={{color:"blue"}}>Sign Up ?</Link>
                                </div>


                            </div>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
}


export default LoginForm;
