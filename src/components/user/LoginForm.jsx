import { useState } from 'react';
import style from '../../styles/pages/LoginForm.module.css';
import Swal from 'sweetalert2';
import { post } from '../../services/httpService';
import { useNavigate } from 'react-router-dom';
import Input from '../UI/Input';
import { FaUser, FaLock } from 'react-icons/fa';

export default function LoginForm() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        contra: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await post('/usuarios/LoginUser', {
            email: values.email,
            contra: values.contra,
        })
            .then((response) => {
                console.log(response)
                localStorage.setItem('idUsuario', response.idUsuario);
                if (response.status) {
                    Swal.fire({
                        title: 'Login',
                        text: 'Inicio de sesión exitoso!',
                        icon: 'success',
                        confirmButtonText: 'Continue',
                    });
                    navigate('/dashboard');
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: response.message,
                        icon: 'error',
                        confirmButtonText: 'Volver a intentar',
                    });
                }
            });
    };

    return (
        <div className={style.loginContainer}>
            <form className={`${style.animatedForm} ${style.formContainer}`} onSubmit={handleSubmit}>
                <h2 className={style.title}>Iniciar Sesión</h2>

                <div className={style.inputGroup}>
                    <Input
                    label="Correo electrónico"
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Ingresa tu correo"
                    />
                    <FaUser className={style.inputIcon} />
                </div>

                <div className={style.inputGroup}>
                    <Input
                    label="contraseña"
                        type="password"
                        id="contra"
                        name="contra"
                        value={values.contra}
                        onChange={handleChange}
                        placeholder="Ingresa tu contraseña"
                    />
                    <FaLock className={style.inputIcon} />
                </div>

                <div className={style.containerButton}>
                    <button type="submit" className={style.buttonSubmit}>Iniciar sesión</button>
                </div>
            </form>
        </div>
    );
}
