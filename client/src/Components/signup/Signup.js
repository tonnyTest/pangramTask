import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [fname , setFname] = useState("");
    const [lname , setLname] = useState("");
    const [email , setEmail] = useState("");
    const [gender , setGender] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [password , setPassword] = useState("");

    const navigate = useNavigate();

    const submitData = async(e)=>{
        e.preventDefault();
        console.warn(fname,lname,gender,email,password,hobbies);

        let result = await fetch("http://localhost:8000/sign-up" , {
            method : "Post",
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify({fname,lname,gender,email,password,hobbies})
        });
        result = await result.json();
        alert("Registration has been done successfully");
        console.warn(result);
    }

    return (
        <div className="signup d-flex container pt-5 pb-5" >
        <div className="container " >
            <div className='login-wrap'>
               <h3>Registration</h3>
            </div>
            <form className="row g-2 needs-validation" >
                <div className="col-md-5 d-flex align-items-center mb-3">
                    <i className="zmdi zmdi-account"></i> 
                    <input type="text" className="form-control pl-5" id="validationCustom01" placeholder="Your First Name" 
                    name="name" value={fname} onChange={(e)=>setFname(e.target.value)} required />
                </div>

                <div className="col-md-5 d-flex align-items-center mb-3">
                    <i className="zmdi zmdi-email"></i> 
                    <input type="email" className="form-control pl-5" id="validationCustom01" placeholder="Your Last Name" 
                    name="email" value={lname} onChange={(e)=>setLname(e.target.value)} required />
                </div>
                 
                <div className="col-md-5 d-flex align-items-center mb-3">
                    <i className="zmdi zmdi-case"></i> 
                    <input type="text" className="form-control pl-5" id="validationCustom01" placeholder="Your Profession" 
                    name="profession" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </div>

                <div className="col-md-5 d-flex align-items-center mb-3">
                    <i className="zmdi zmdi-phone"></i>
                    <input type="text" className="form-control pl-5" id="validationCustom01" placeholder="Your Phone"
                    name="phone" value={gender} onChange={(e)=>setGender(e.target.value)} required />
                </div>

                <div className="col-md-5 d-flex align-items-center mb-3">
                <i className="zmdi zmdi-phone"></i>
                 <input type="text" className="form-control pl-5" id="validationCustom01" placeholder="Your Phone"
                 name="phone" value={hobbies} onChange={(e)=>setHobbies(e.target.value)} required />
                </div>

                <div className="col-md-5 d-flex align-items-center mb-3">
                    <i className="zmdi zmdi-key"></i> 
                    <input type="password" className="form-control pl-5" id="validationCustom01" placeholder="Password" 
                    name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit" onClick={submitData}>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default SignUp;
