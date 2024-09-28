import { Link } from "react-router-dom";
import '../styles/Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Bienvenido a la Aplicación de Gestión de Usuarios</h1>
            <p className="home-description">
                Esta aplicación permite gestionar la información de los usuarios a través de varias rutas.
            </p>
            <p className="api-explanation">
                La API permite las siguientes operaciones:
            </p>
            <ul className="api-list">
                <li><strong>GET /usuarios:</strong> Obtiene la lista completa de usuarios registrados.</li>
                <li><strong>POST /usuarios:</strong> Crea un nuevo usuario en la base de datos.</li>
                <li><strong>PUT /usuarios/:id:</strong> Actualiza la información de un usuario existente.</li>
                <li><strong>DELETE /usuarios/:id:</strong> Elimina un usuario de la base de datos.</li>
            </ul>

            <div className="routes-grid">
                <div className="route-card">
                    <h2>Lista de Usuarios</h2>
                    <p>Consulta la lista completa de usuarios registrados.</p>
                    <Link to="/usuarios" className="route-link">
                        Ver lista de usuarios
                    </Link>
                </div>

                <div className="route-card">
                    <h2>Crear un Nuevo Usuario</h2>
                    <p>Registra un nuevo usuario en la base de datos.</p>
                    <Link to="/usuarios/registro" className="route-link">
                        Crear nuevo usuario
                    </Link>
                </div>
            </div>
        </div>
    );
}