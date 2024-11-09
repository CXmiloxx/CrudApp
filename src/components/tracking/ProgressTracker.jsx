import { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import style from '../../styles/pages/ProgressTracker.module.css';

export default function ProgressTracker() {
    const [progress, setProgress] = useState(0);

    const getProgress = () => {
        // Aquí iría una llamada a tu API o lógica de cálculo
        // Por ejemplo, la cantidad de hábitos completados sobre el total
        // Vamos a usar un valor ficticio por ahora
        const totalHabits = 10; // Total de hábitos
        const completedHabits = 7; // Hábitos completados
        const progressPercentage = (completedHabits / totalHabits) * 100;
        setProgress(progressPercentage);
    };

    // Llamamos a la función para obtener el progreso
    useEffect(() => {
        getProgress();
    }, []);

    return (
        <div className={style.progressTrackerContainer}>
            <h3 className={style.progressTitle}>Progreso de Hábitos</h3>
            <div className={style.progressInfo}>
                <p className={style.progressText}>Has completado {Math.round(progress)}% de tus hábitos.</p>
                <ProgressBar now={progress} label={`${Math.round(progress)}%`} variant="success" />
            </div>
        </div>
    );
}
