import { useState } from "react";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from "../UI/Input";
import Button from "../UI/Button";
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import '../../styles/UserForm.css';

export default function UserForm() {
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

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://appcrudphp.cleverapps.io/Usuarios/POST', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al crear el usuario');
                }
                return response.json();
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
        <div className="form-container ">
            <h1 className="titulo text-primary text-center">Registro</h1>
            <form onSubmit={handleSubmit} className="animated-form">
                <div className="input-group">
                    <Input
                        label="Nombre"
                        type="text"
                        value={values.nombre}
                        name="nombre"
                        onChange={handleChange}
                        required
                    />
                    <FaUser className="input-icon" />
                </div>
                <div className="input-group">
                    <Input
                        label="Apellido"
                        type="text"
                        value={values.apellido}
                        name="apellido"
                        onChange={handleChange}
                        required
                    />
                    <FaUser className="input-icon" />
                </div>
                <div className="input-group">
                    <Input
                        label="Correo"
                        type="email"
                        value={values.email}
                        name="email"
                        onChange={handleChange}
                        required
                    />
                    <FaEnvelope className="input-icon" />
                </div>
                <div className="input-group">
                    <Input
                        label="Contraseña"
                        type="password"
                        value={values.contra}
                        name="contra"
                        onChange={handleChange}
                        required
                    />
                    <FaLock className="input-icon" />
                </div>
                <div className="d-flex justify-content-center">
                    <Button type="submit" className="btn-submit">
                        Registrar
                    </Button>
                </div>
            </form>
        </div>
    );
}
