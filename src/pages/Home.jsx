import style from '../styles/Home.module.css';

export default function Home() {
    return (
        <div>
            <div className={style.homeContainer}>
                <h1 className={style.homeTitle}>Bienvenido a Habit Tracker</h1>

                <section className={style.section}>
                    <h2 className={style.sectionTitle}>¿Qué es Habit Tracker?</h2>
                    <p className={style.sectionText}>
                        <strong>Habit Tracker</strong> es una plataforma innovadora que te ayudará a tomar el control de tus hábitos y alcanzar tus metas personales. Con nuestra interfaz fácil de usar, puedes establecer objetivos personalizados, hacer seguimiento de tu progreso y ajustar tus hábitos según lo necesites, todo en un ambiente seguro y accesible.
                    </p>
                </section>

                <section className={style.section}>
                    <h2 className={style.sectionTitle}>¿Cómo Funciona?</h2>
                    <p className={style.sectionText}>
                        En <strong>Habit Tracker</strong>, cada paso está diseñado para ayudarte a avanzar de manera eficiente hacia tus objetivos. Aquí te mostramos cómo empezar:
                    </p>
                    <ul className={style.infoList}>
                        <li className={style.listItem}>
                            <strong>Inicio de Sesión:</strong> Accede a tu cuenta o regístrate en minutos para empezar a gestionar tus hábitos.
                        </li>
                        <li className={style.listItem}>
                            <strong>Establece tus Hábitos:</strong> Añade hábitos personalizados, desde ejercicio hasta meditación, y define metas claras para cada uno de ellos.
                        </li>
                        <li className={style.listItem}>
                            <strong>Monitorea tu Progreso:</strong> Usa nuestras herramientas interactivas para visualizar tu progreso en tiempo real y ajusta tu enfoque para alcanzar el éxito.
                        </li>
                    </ul>
                </section>

                <section className={style.section}>
                    <h2 className={style.sectionTitle}>Restricciones</h2>
                    <p className={style.sectionText}>
                        Para proteger tu privacidad y garantizar una experiencia segura, se aplican las siguientes restricciones:
                    </p>
                    <ul className={style.restrictionList}>
                        <li className={style.listItem}>
                            El acceso completo solo está disponible tras iniciar sesión.
                        </li>
                        <li className={style.listItem}>
                            Los datos son privados y accesibles solo para tu cuenta personal.
                        </li>
                        <li className={style.listItem}>
                            No se permite la edición de hábitos o la visualización del progreso de otros usuarios.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
