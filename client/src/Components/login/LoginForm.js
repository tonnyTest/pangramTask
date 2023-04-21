import axios from "axios";
import React, { useState } from "react";
import { Link , useNavigate } from 'react-router-dom';
import "./index.css";

const LoginForm =()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
            axios.post('http://localhost:8000/sendotp',{
                mode: 'no-cors',
                email: email,
                password: password
            })
            .then((response) => {
                if(response.data.message){
                    setLoginStatus(response.data.message);
                    console.warn(response);
                }else{
                    navigate("/manager-dashboard");
                    console.warn(response);
                }
            })
            .catch(err => {
            console.error(err);
            });
        }

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row col-md-12" >
                    <div className="col-md-3"></div>
                    <div className="col-md-6 cust-bg">
                        <form method="post">
                            <div className="login-wrap">
                                <h3>Login Form</h3>
                             
                                <div class="form-group">
                                    <span>Email</span>
                                    <input type="text"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        onChange={(e) => setEmail(e.target.value)} value={email}
                                        aria-describedby="emailHelp" />
                                </div>

                                <div class="form-group">
                                    <span>Password</span>
                                    <input type="password"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        onChange={(e) => setPassword(e.target.value)} value={password}
                                        aria-describedby="emailHelp" />
                                </div>

                                <div className="sps-sign">
                                    <button className="btn-btn" onClick={(e) => handleSubmit(e)} >Login</button>
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
