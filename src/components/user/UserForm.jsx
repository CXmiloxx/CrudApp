import { useState } from "react";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from "../UI/Input";
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import styles from "../../styles/pages/UserForm.module.css";
import { post } from "../../services/httpService";

export default function UserForm() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        contra: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await post('/usuarios/CreateUser', {
            nombre: values.nombre,
            apellido: values.apellido,
            email: values.email,
            contra: values.contra
        })
            .then((data) => {
                if (data.status) {
                    Swal.fire({
                        title: 'Usuario creado correctamente',
                        icon: 'success',
                        confirmButtonText: 'Continuar'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            setValues({
                                nombre: '',
                                apellido: '',
                                email: '',
                                contra: ''
                            });
                        }
                        navigate('/login');
                    });
                } else {
                    throw new Error(`${data.message}`);
                }
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Volver a intentar'
                });
            });
    };

    return (
        <div className={styles.formContainer}>
            <h1 className={`${styles.title} text-primary text-center`}>Registro</h1>
            <form onSubmit={handleSubmit} className={styles.animatedForm}>
                <div className={styles.inputGroup}>
                    <Input
                        label="Nombre"
                        type="text"
                        value={values.nombre}
                        name="nombre"
                        onChange={handleChange}
                        required
                    />
                    <FaUser className={styles.inputIcon} />
                </div>
                <div className={styles.inputGroup}>
                    <Input
                        label="Apellido"
                        type="text"
                        value={values.apellido}
                        name="apellido"
                        onChange={handleChange}
                        required
                    />
                    <FaUser className={styles.inputIcon} />
                </div>
                <div className={styles.inputGroup}>
                    <Input
                        label="Correo"
                        type="email"
                        value={values.email}
                        name="email"
                        onChange={handleChange}
                        required
                    />
                    <FaEnvelope className={styles.inputIcon} />
                </div>
                <div className={styles.inputGroup}>
                    <Input
                        label="Contraseña"
                        type="password"
                        value={values.contra}
                        name="contra"
                        onChange={handleChange}
                        required
                    />
                    <FaLock className={styles.inputIcon} />
                </div>
                <div className={styles.containerButton}>
                    <button type="submit" className={styles.buttonSubmit}>
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    );
}
