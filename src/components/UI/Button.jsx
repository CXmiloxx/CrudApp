/* eslint-disable react/prop-types */

const Button = ({ type = 'submit', children, onClick }) => {
    return (
        <button type={type} className="btn btn-primary m-1 text-center" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
