import { ProgressBar } from 'react-bootstrap';
import style from '../../styles/pages/GoalProgress.module.css';

export default function GoalProgress() {  // Recibir `goal` como un objeto
  // const { name, description, currentProgress } = goal;  // Desestructurar `goal`
  // const progress = currentProgress;
  const progress = 100
  const goalReached = progress >= 100;

  // console.log(name);
  // console.log(description);
  // console.log(currentProgress);

  return (
    <div className={style.goalProgressContainer}>
      <h2 className={style.goalTitle}>{name}</h2>
      <p className={style.goalDescription}>hola</p>

      <ProgressBar
        now={progress}
        label={`${progress}%`}
        variant="success"
        animated
      />

      <div className={style.progressInfo}>
        <span>{goalReached ? 'Meta Alcanzada' : `Progreso: ${progress}%`}</span>
      </div>
    </div>
  );
}
