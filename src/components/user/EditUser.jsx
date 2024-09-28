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
        id: user?.id || '',
        nombre: user?.nombre || '',
        apellido: user?.apellido || '',
        contra: user?.contra || '',
        email: user?.email || '',
    });

    const handleUpdate = async (e) => {
        e.preventDefault();

        put(`/Usuarios/PUT/${user.id}`, {
            nombre: updatedUser.nombre,
            apellido: updatedUser.apellido,
            email: updatedUser.email,
            contra: updatedUser.contra,
        })
        .then((response) => {
            Swal.fire({
                title: 'Usuario actualizado correctamente!',
                icon: 'success',
                text: response.message,
                confirmButtonText: 'Aceptar',
            });
            navigate('/usuarios');
        })
        .catch((error) => {
            Swal.fire({
                title: 'Error',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Volver a intentar'
            });
        });
    };

    return (
        <div className="edit-user-container">
            <form className="edit-user-form" onSubmit={handleUpdate}>
                <div className="form-group">
                    <label>Nombre:</label>
                    <Input
                        type="text"
                        value={updatedUser.nombre}
                        onChange={(e) => setUpdatedUser({ ...updatedUser, nombre: e.target.value })}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Apellido:</label>
                    <Input
                        type="text"
                        value={updatedUser.apellido}
                        onChange={(e) => setUpdatedUser({ ...updatedUser, apellido: e.target.value })}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <Input
                        type="email"
                        value={updatedUser.email}
                        onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña:</label>
                    <Input
                        type="password"
                        value={updatedUser.contra}
                        onChange={(e) => setUpdatedUser({ ...updatedUser, contra: e.target.value })}
                        required
                        className="input-field"
                    />
                </div>
                <Button className="submit-btn" type="submit">Actualizar</Button>
            </form>
        </div>
    );
}
