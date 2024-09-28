/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../styles/BackButton.css';

const BackButton = ({ route = -1, label = 'Volver' }) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(route); // Navegar a la ruta anterior o una ruta específica
    };

    return (
        <button className="back-button" onClick={handleGoBack}>
            <FaArrowLeft className="back-icon" /> {/* Icono de flecha */}
            {label}
        </button>
    );
};

export default BackButton;
