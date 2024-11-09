import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { get } from "../../services/httpService";
import UserItem from './HabitItem';
import '../../styles/pages/UserList.css';

export default function HabitList() {
    const [users, setUsers] = useState([]);
    const [idUsuario, setIdUsuario] = useState('');

    useEffect(() => {
        const storedIdUsuario = localStorage.getItem('idUsuario');
        if (storedIdUsuario) {
            setIdUsuario(storedIdUsuario);
        } else {
            setIdUsuario('');
        }
    },[])
    

    useEffect(() => {
        if (idUsuario) {
            get(`/habitos/GetHabit/${idUsuario}`)
            .then((data) => {
                console.log(data);
                setUsers(data.habitos || []);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    }, [idUsuario]);
    

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
