import style from '../styles/Home.module.css';

export default function Home() {
    return (
        <div>
            <div className={style.homeContainer}>
                <h1 className={style.homeTitle}>Bienvenido a Habit Tracker</h1>

                <section className={style.section}>
                    <h2 className={style.sectionTitle}>¿Qué es Habit Tracker?</h2>
                    <p className={style.sectionText}>
                        Habit Tracker es una plataforma diseñada para ayudarte a gestionar y seguir tus hábitos de forma eficaz y personalizada. Aquí podrás establecer metas, monitorear tu progreso y hacer ajustes sobre tus hábitos, todo de forma segura y accesible.
                    </p>
                </section>

                <section className={style.section}>
                    <h2 className={style.sectionTitle}>¿Cómo Funciona?</h2>
                    <p className={style.sectionText}>
                        Al unirte a Habit Tracker, tendrás acceso a herramientas fáciles de usar que te ayudarán a mejorar tus hábitos y alcanzar tus metas personales.
                    </p>
                    <ul className={style.infoList}>
                        <li className={style.listItem}>
                            <strong>Inicio de Sesión:</strong> Para comenzar, ingresa con tu cuenta. Si aún no tienes una cuenta, puedes registrarte rápidamente.
                        </li>
                        <li className={style.listItem}>
                            <strong>Establecimiento de Hábitos:</strong> Puedes añadir nuevos hábitos y establecer metas para cada uno de ellos, haciendo que el seguimiento sea sencillo y eficiente.
                        </li>
                        <li className={style.listItem}>
                            <strong>Seguimiento de Progreso:</strong> Visualiza tu progreso con gráficos y estadísticas, y ajusta tus hábitos según sea necesario para alcanzar tus objetivos.
                        </li>
                    </ul>
                </section>

                <section className={style.section}>
                    <h2 className={style.sectionTitle}>Restricciones</h2>
                    <p className={style.sectionText}>
                        Para mantener la privacidad y la seguridad de los usuarios, se aplican algunas restricciones que deben ser respetadas:
                    </p>
                    <ul className={style.restrictionList}>
                        <li className={style.listItem}>
                            No podrás gestionar tus hábitos o ver tu progreso sin haber iniciado sesión.
                        </li>
                        <li className={style.listItem}>
                            La información mostrada es exclusivamente para tu cuenta personal.
                        </li>
                        <li className={style.listItem}>
                            No se permite modificar ni eliminar hábitos de otros usuarios.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
