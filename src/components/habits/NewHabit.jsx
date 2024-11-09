import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from "../UI/Input";
import Button from "../UI/Button";
import { FaUser } from 'react-icons/fa';
// import '../../styles/UserForm.css';
import { useNavigate, } from "react-router-dom";
import { post } from "../../services/httpService";

export default function NewHabit() {
    const [idUsuario, setIdUsuario] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedIdUsuario = localStorage.getItem('idUsuario');
        console.log("Stored idUsuario:", storedIdUsuario); // Verifica el valor aquí
        if (storedIdUsuario) {
            setIdUsuario(storedIdUsuario);
        }
    }, []);
    

    const [values, setValues] = useState({
        nombre: '',
        descripcion: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        post( `/habitos/CreateHabit/${idUsuario}` ,{
            nombre: values.nombre,
            descripcion: values.descripcion,
        })
        .then((response) =>{
            console.log(response)
            console.log(idUsuario)
            if(response.status){
                console.log(response)
                Swal.fire({
                    title: 'Usuario registrado correctamente!',
                    icon:'success',
                    text: response.message,
                    confirmButtonText: 'Aceptar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate(-1);
                    }
                });
            }else{
                Swal.fire({
                    title: 'Error',
                    text: response.message,
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                });
            }
        })
    };

    return (
        <div className="form-container ">
            <h1 className="titulo text-primary text-center">Crear Habito</h1>
            <form onSubmit={handleSubmit} className="animated-form">
                <div className="input-group">
                    <Input
                        label="Nombre del Habitos "
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
                        label="Descripcion del Habito "
                        type="text"
                        value={values.descripcion}
                        name="descripcion"
                        onChange={handleChange}
                        required
                    />
                    <FaUser className="input-icon" />
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
