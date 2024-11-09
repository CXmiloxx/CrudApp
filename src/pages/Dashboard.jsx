import ProgressTracker from '../components/tracking/ProgressTracker';
import HabitList from '../components/habits/HabitList';
import GoalProgress from '../components/tracking/GoalProgress';
import style from '../styles/pages/Dashboard.module.css';

export default function Dashboard() {
    return (
        <div>
            <div className={style.dashboardContainer}>
                <h1 className={style.dashboardTitle}>Bienvenido a tu Dashboard</h1>

                <section className={style.section}>
                    <h2 className={style.sectionTitle}>Progreso General</h2>
                    <ProgressTracker />
                    <GoalProgress />
                </section>

                <section className={style.section}>
                    <h2 className={style.sectionTitle}>Tus Hábitos Actuales</h2>
                    <HabitList />
                </section>
            </div>
        </div>
    );
}
