import { useNavigate } from "react-router-dom";
import '../../styles//UserItem.css';

/* eslint-disable react/prop-types */
export default function UserItem({ users }) {
    const navigate = useNavigate();

    const handleEdit = (user) => {
        navigate(`/datos/update/${user.idDatos}`, { state: { user } });
    };

    const handleDelete = (user) => {
        navigate(`/datos/delete/${user.idDatos}`, { state: { user } });
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
                                <th>Direccion</th>
                                <th>Correo</th>
                                <th>telefono</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.idDatos}>
                                    <td>{user.idDatos}</td>
                                    <td>{user.nombre}</td>
                                    <td>{user.direccion}</td>
                                    <td>{user.correo}</td>
                                    <td>{user.telefono}</td>
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
