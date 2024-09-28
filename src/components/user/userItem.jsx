import { useNavigate } from "react-router-dom";
import '../../styles//UserItem.css';

/* eslint-disable react/prop-types */
export default function UserItem({ users }) {
    const navigate = useNavigate();

    const handleEdit = (user) => {
        navigate(`/usuarios/update/${user.id}`, { state: { user } });
    };

    const handleDelete = (user) => {
        navigate(`/usuarios/delete/${user.id}`, { state: { user } });
    };

    return (
        <div className="user-item-container">
            {users.length <= 0 ? (
                <div className="no-users-message">
                    <p>No hay usuarios registrados.</p>
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-hover table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Contraseña</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.nombre}</td>
                                    <td>{user.apellido}</td>
                                    <td>{user.email}</td>
                                    <td>{user.contra}</td>
                                    <td>
                                        <button
                                            className="btn btn-info btn-sm"
                                            onClick={() => handleEdit(user)}
                                        >
                                            Editar
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger btn-sm ms-2"
                                            onClick={() => handleDelete(user)}
                                        >
                                            Borrar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
