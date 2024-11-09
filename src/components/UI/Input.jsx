/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from '../../styles/components/Input.module.css';

const Input = ({ label, type = 'text', value, name, onChange, required = false }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.inputContainer}>
            <label className={styles.label}>{label}</label>
            <div className={styles.inputWithIcon}>
                <input
                    type={showPassword ? 'text' : type}
                    className={styles.inputField}
                    value={value}
                    name={name}
                    onChange={onChange}
                    required={required}
                />
                {type === 'password' && (
                    <div className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Input;
