import React from "react";
import "./Signin.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";

function Signin() {

    const { register, formState: { errors }, handleSubmit } = useForm();
    let history = useHistory(); 

    const loginUser = (data) => {
        axios.post('http://localhost:5000/users/signin',{
                email: data.email,
                password: data.password
            })
            .then((response) => 
            {
                console.log(response);
                history.push("/")

            });
    }
    return (
        <div>
            <img src="amazon.jpg" className="logo"/>
            <div>
                <h1>Sign-In</h1>
            </div>
            <form onSubmit={handleSubmit(loginUser)}>
            <div>
                <h4>Email address or mobile phone number</h4>
                <input type="text" {...register("email", { required: true})}  />
            </div>
            <div>
                <h4>Password</h4>
                <input type="password" {...register("password", { required: true})}  />
            </div>
            <div>
                <input type="submit" value="Login"/>
            </div>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <div>
                <input type="checkbox" value="Keep me signed in" />
            </div>
            </form>

            <h4>New to Amazon?</h4>
            <div>
                <Link to="/Signup">
                    <input type="button" value="Create your amazon account" />
                </Link>
            </div>
        </div>
    )
}

export default Signin;
