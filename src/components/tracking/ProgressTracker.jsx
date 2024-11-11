import { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import style from '../../styles/pages/ProgressTracker.module.css';

export default function ProgressTracker() {
    const [progress, setProgress] = useState(0);

    const getProgress = () => {

        const totalHabits = 10;
        const completedHabits = 7;
        const progressPercentage = (completedHabits / totalHabits) * 100;
        setProgress(progressPercentage);
    };

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
