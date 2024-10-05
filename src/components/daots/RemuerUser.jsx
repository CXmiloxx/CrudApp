import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { remove } from "../../services/httpService";
import '../../styles//RemoverUser.css';

export default function RemoverUser() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = location.state || {};

    const handleDelete = (e) => {
        e.preventDefault();
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Esta acción eliminará el usuario permanentemente.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'No, cancelar'
        })
        .then((result) => {
            if (result.isConfirmed) {
                remove(`/datos/Delete/${user.idDatos}`)
                    .then((data) => {
                        if(data.status){
                            Swal.fire({
                                title: 'Usuario eliminado correctamente',
                                icon:'success',
                                confirmButtonText: 'Continuar'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    navigate('/datos');
                                }
                            });
                        }else{
                            Swal.fire(
                                'Error al eliminar',
                                data.message,
                                'error'
                            );
                        }
                    });
            } else {
                Swal.fire(
                    'Cancelado',
                    'El usuario no fue eliminado.',
                    'error'
                );
            }
        });
    };

    return (
        <div className="remover-user-container">
            <div className="card shadow p-4 text-center">
                <h2 className="mb-4">¿Estás seguro de eliminar este usuario?</h2>
                <p className="mb-4">Esta acción no se puede deshacer.</p>
                <div className="button-group">
                    <button 
                        className="btn btn-danger btn-lg me-3" 
                        onClick={handleDelete}
                    >
                        Sí, eliminar
                    </button>
                    <button 
                        className="btn btn-secondary btn-lg" 
                        onClick={() => navigate('/usuarios')}
                    >
                        No, cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}
