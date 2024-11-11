import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get } from "../../services/httpService";
import UserItem from './HabitItem';
import styles from '../../styles/pages/HabitList.module.css';

export default function HabitList() {
    const [users, setUsers] = useState([]);
    const [idUsuario, setIdUsuario] = useState('');

    useEffect(() => {
        const storedIdUsuario = localStorage.getItem('idUsuario');
        if (storedIdUsuario) {
            setIdUsuario(storedIdUsuario);
        }
    }, []);
    
    useEffect(() => {
        if (idUsuario) {
            get(`/habitos/GetHabit/${idUsuario}`)
            .then((data) => {
                setUsers(data.habitos || []);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    }, [idUsuario]);
    
    return (
        <div className={`${styles.userListContainer} container mt-4`}>
            <div className={`${styles.header} mb-3`}>
                <Link to="/new-habit">
                    <button className={`${styles.btnAddUser} btn`}>
                        Añadir Usuario
                    </button>
                </Link>
            </div>
            <UserItem habitos={users} />
        </div>
    );
}
