import { useNavigate } from "react-router-dom";
import styles from "../../styles/pages/HabitItem.module.css";

/* eslint-disable react/prop-types */
export default function HabitItem({ habitos }) {
    const navigate = useNavigate();



    const handleDelete = (user) => {
        navigate(`/datos/delete/${user.idHabito}`, { state: { user } });
    };

    return (
        <div className={styles.userItemContainer}>
            {habitos.length <= 0 ? (
                <div className={styles.noHabitosMessage}>
                    <p>No hay usuarios registrados.</p>
                </div>
            ) : (
                <div className={styles.cardContainer}>
                    {habitos.map((user) => (
                        <div key={user.idHabito} className={styles.userCard}>
                            <div className={styles.userInfo}>
                                <strong>Nombre:</strong>
                                <p>{user.nombre}</p>
                            </div>
                            <div className={styles.userInfo}>
                                <strong>Fecha Creación:</strong>
                                <p>{user.fecha_creacion}</p>
                            </div>
                            <div className={styles.userInfo}>
                                <strong>Descripción:</strong>
                                <p>{user.descripcion}</p>
                            </div>
                            <div className={styles.btnContainer}>
                                <button
                                    className={`${styles.btn} ${styles.btnDanger}`}
                                    onClick={() => handleDelete(user)}
                                >
                                    Borrar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
