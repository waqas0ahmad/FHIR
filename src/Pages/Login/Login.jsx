import React, { useState } from 'react'
import axios from "axios"
import "./Login.css"
import { useNavigate } from 'react-router-dom';


function Login(props) {
    let navigate = useNavigate();

    const [login, setLogin] = useState({
        email: "",
        password: "",
    });


    const userLogin = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
        });
    };

    const url = `http://localhost:5000/api/admin/login`;

    const onSubmitLoginCredentials = (e) => {
        e.preventDefault();

        axios
            .post(url, login)
            .then((res) => {
                console.log(res)
                navigate("/home");


            })
            .catch((error) => {
                alert(error);
                // setError(res.message);
            });
    };

    return (
        <article className='continer'>
            <article className='form'>

                <h1>Login</h1>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control"
                        name="email"
                        value={login.email}
                        onChange={(e) => userLogin(e)}
                        placeholder="Email"
                        required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"

                        name="password"
                        value={login.password}
                        onChange={(e) => userLogin(e)}
                        placeholder="Password"
                        required />
                </div>



                <button onClick={onSubmitLoginCredentials} type="submit" className="buttonClass"
                >Log in</button>

                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </article>
        </article>
    )
}

export default Login;
