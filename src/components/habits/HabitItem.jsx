import { useNavigate } from "react-router-dom";
import '../../styles//pages/UserItem.css';

/* eslint-disable react/prop-types */
export default function HabitItem({ users }) {
    const navigate = useNavigate();

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
                                <th>fecha Creacion</th>
                                <th>descripcion</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.idHabito}>
                                    <td>{user.idHabito}</td>
                                    <td>{user.nombre}</td>
                                    <td>{user.fecha_creacion}</td>
                                    <td>{user.descripcion}</td>
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
