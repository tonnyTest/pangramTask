import axios from "axios";
import React, { useState } from "react";
import { Link , useNavigate } from 'react-router-dom';
import "./index.css";

export default function OtpVerify() {
    const navigate = useNavigate();

    const [otp, setOtp] = useState("");

    const handleSubmit = (e) => {
        axios
            .post(`http://localhost:8000/verifyotp`, { otp: otp })
            .then((response) => {
                console.log(response.data);
                if (response.data) {
                    console.warn(response);
                    navigate("/user-name");
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
                                <h3>Enter OTP to verify your phone number ?</h3>
                                <p>asdfmkasmldfmnmkanwekjjnnfr awnenfkjanwefknkjane asjnfkjnwkejnfakjwenf</p>

                                <div class="form-group">
                                    <input type="text"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        onChange={(e) => setOtp(e.target.value)} value={otp}
                                        aria-describedby="emailHelp" />
                                </div>

                                <button onClick={(e) => handleSubmit(e)}>submit</button>

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
