/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../../styles/Input.css';

const Input = ({ label, type = 'text', value, name, onChange, required = false }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="input-container">
            <label className="input-label">{label}</label>
            <div className="input-with-icon">
                <input
                    type={showPassword ? 'text' : type}
                    className="input-field"
                    value={value}
                    name={name}
                    onChange={onChange}
                    required={required}
                />
                {type === 'password' && (
                    <div className="eye-icon" onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Input;
