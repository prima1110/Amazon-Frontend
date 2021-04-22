import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Signin.css";

function Signup() {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const registerUser = (data) => {
        axios.post('http://localhost:5000/users/signup',{
                name: data.yourname,
                email: data.email,
                password: data.password
            })
            .then((response) => 
            {
                console.log(response);
            });
    }
    return (
        <div className="login">
            <img src="amazon.png" className="logo"/>
            <div className="container">
                <h1>Create account</h1>
            
            <form onSubmit={handleSubmit(registerUser)}>
            <div>
                <h4>Your name</h4>
                <input type="text" {...register("yourname", { required: true})} />
            </div>
            <div>
                <h4>Email</h4>
                <input type="text" {...register("email", { required: true})} />
            </div>
            <div>
                <h4>Password</h4>
                <input type="password" placeholder="Atleast 6 characters" {...register("password", { required: true})}/>
            </div>
            <div>
                <h4>Password again</h4>
                <input type="password" {...register("passagain", { required: true})}/>
            </div>
            <div>
                <input type="submit" value="Create your Amazon account"/>
            </div>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            </form>
            </div>
        </div>
    )
}

export default Signup;
