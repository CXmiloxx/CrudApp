/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';
import '../../styles/BackButton.css';

const BackButton = ({ route = -1, label = 'Volver' }) => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Si cancelas, perderás los cambios realizados.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, cancelar'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    navigate(route);
                    localStorage.removeItem('idUsuario')
                }
            })
    };

    return (
        <button className="back-button" onClick={handleGoBack}>
            <FaArrowLeft className="back-icon" />
            {label}
        </button>
    );
};

export default BackButton;
