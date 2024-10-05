import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { put } from "../../services/httpService";
import '../../styles//EditUser.css';

export default function EditUser() {
    const location = useLocation();
    const navigate = useNavigate();

    const { user } = location.state || {};

    const [updatedUser, setUpdatedUser] = useState({
        id: user?.idDatos || '',
        nombre: user?.nombre || '',
        direccion: user?.direccion || '',
        telefono: user?.telefono || '',
        correo: user?.correo || '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser({ ...updatedUser, [name]: value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        put(`/datos/Put/${user.idDatos}`, {
            nombre: updatedUser.nombre,
            direccion: updatedUser.direccion,
            correo: updatedUser.correo,
            telefono: updatedUser.telefono,
        })
            .then((response) => {
                if(response.status){

                    Swal.fire({
                        title: 'Datos actualizados correctamente!',
                        icon:'success',
                        text: response.message,
                        confirmButtonText: 'Aceptar',
                    })
                    navigate('/datos');
                }
                else{
                    throw new Error(response.message);
                }
            });
    };

    return (
        <div className="edit-user-container">
            <form className="edit-user-form" onSubmit={handleUpdate}>
                <div className="form-group">
                    <label>Nombre:</label>
                    <Input
                        type="text"
                        name='nombre'
                        value={updatedUser.nombre}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Direccion:</label>
                    <Input
                        type="text"
                        name='direccion'
                        value={updatedUser.direccion}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Correo:</label>
                    <Input
                        type="email"
                        name='correo'
                        value={updatedUser.correo}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>telefono:</label>
                    <Input
                        type="number"
                        name='telefono'
                        value={updatedUser.telefono}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </div>
                <Button className="submit-btn" type="submit">Actualizar</Button>
            </form>
        </div>
    );
}
