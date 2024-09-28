import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { get } from "../../services/httpService";
import UserItem from './userItem';
import '../../styles//UserList.css'; 

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        get('/Usuarios/GET')
        .then((data) =>{
            setUsers(data.usuarios);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []);

    return (
        <div className="user-list-container container mt-4 p-4 shadow-sm">
            <div className="header mb-3">
                <Link to="/usuarios/registro">
                    <button className="btn btn-success btn-add-user">
                        Añadir Usuario
                    </button>
                </Link>
            </div>
            <UserItem
                users={users}
            />
        </div>
    );
}
