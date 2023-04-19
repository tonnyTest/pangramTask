import axios from "axios";
import React, { useState } from "react";
import { Link , useNavigate } from 'react-router-dom';
import "./index.css";

export default function LoginForm() {
    const navigate = useNavigate();

    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        axios
            .post(`http://localhost:8000/sendotp`, { phoneNumber: phone })
            .then((response) => {
                console.log(response.data);
                if (response.data) {
                    console.warn(response);
                    navigate("/verifyOtp");
                } else {
                    console.warn(response);
                }
            });
    };

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row col-md-12" >
                    <div className="col-md-3"></div>
                    <div className="col-md-6 cust-bg">
                        <form method="post">
                            <div className="login-wrap">
                                <Link className="back-arrow">arrow</Link>
                                <h3>May I have your phone number?</h3>
                                <p>asdfmkasmldfmnmkanwekjjnnfr awnenfkjanwefknkjane asjnfkjnwkejnfakjwenf</p>

                                <div class="form-group">
                                    <span>+91</span>
                                    <input type="text"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        onChange={(e) => setPhone(e.target.value)} value={phone}
                                        aria-describedby="emailHelp" />
                                </div>

                                <button onClick={(e) => handleSubmit(e)}>Login</button>

                                <div className="sps-sign">
                                    <Link to="/forget-password" className="btn-btn" >next</Link>
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
