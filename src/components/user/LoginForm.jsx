import { useState } from 'react';
import style from '../../styles/login.module.css';
import Swal from 'sweetalert2';
import { post } from '../../services/httpService';
import {useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        contra: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await post('/Usuarios/Login', {
            email: values.email,
            contra: values.contra
        })
            .then((response) => {
                localStorage.setItem('idUsuario', response.idUsuario);
                if (response.status) {

                    Swal.fire({
                        title: 'Login',
                        text: 'Inicio de sesión exitoso!',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })
                    navigate('/datos');
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: response.message,
                        icon: 'error',
                        confirmButtonText: 'Volver a intentar'
                    })
                }
            })
    }

    return (
        <div className={style.loginContainer}>
            <section className="vh-100 d-flex align-items-center justify-content-center">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className={`col-md-8 col-lg-6 ${style.formWrapper}`}>
                            <form className={style.loginForm} onSubmit={handleSubmit}>
                                <h3 className="text-center mb-4">Welcome Back</h3>

                                <div className={`form-outline mb-4 ${style.inputContainer}`}>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        className="form-control form-control-lg"
                                        placeholder="Enter your email"
                                    />
                                    <label className="form-label" htmlFor="email">Email Address</label>
                                </div>

                                <div className={`form-outline mb-3 ${style.inputContainer}`}>
                                    <input
                                        type="password"
                                        id="contra"
                                        name="contra"
                                        value={values.contra}
                                        onChange={handleChange}
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                    />
                                    <label className="form-label" htmlFor="contra">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        Login with Google
                                        <div>Google</div>
                                    </div>
                                    <a href="#!" className={`${style.link} text-body`}>Forgot password?</a>
                                </div>

                                <div className="text-center">
                                    <button type="submit" className={`${style.button} btn btn-lg`}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
