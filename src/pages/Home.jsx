import style from '../styles/Home.module.css';
import Nav from '../components/UI/Nav';

export default function Home() {
    return (
        <div>
            <Nav />
            <div className={style.homeContainer}>
                <h1 className={style.homeTitle}>Bienvenido a la Plataforma de Gestión</h1>

                <section className={style.section}>
                    <h2 className={style.sectionTitle}>¿Qué es esta aplicación?</h2>
                    <p className={style.sectionText}>
                        Esta plataforma te permite gestionar la información personal de los usuarios y administrar datos de forma segura. Desde el perfil de cada usuario, se pueden llevar a cabo diversas acciones relacionadas con la administración de sus datos.
                    </p>
                </section>

                <section className={style.section}>
                    <h2 className={style.sectionTitle}>¿Cómo funciona?</h2>
                    <ul className={style.infoList}>
                        <li className={style.listItem}>
                            <strong>Inicio de Sesión:</strong> Para acceder a las funcionalidades principales, debes iniciar sesión con tu cuenta. Si no tienes una cuenta, puedes registrarte.
                        </li>
                        <li className={style.listItem}>
                            <strong>Gestión de Datos:</strong> Una vez que hayas iniciado sesión, puedes gestionar los datos relacionados contigo, como tu nombre, teléfono, correo y dirección.
                        </li>
                        <li className={style.listItem}>
                            <strong>Seguridad:</strong> Tu información está protegida y solo tú puedes ver y modificar tus datos.
                        </li>
                    </ul>
                </section>

                <section className={style.section}>
                    <h2 className={style.sectionTitle}>Restricciones</h2>
                    <p className={style.sectionText}>
                        Para proteger la privacidad y seguridad de los usuarios, no es posible realizar las siguientes acciones sin haber iniciado sesión:
                    </p>
                    <ul className={style.restrictionList}>
                        <li className={style.listItem}>
                            No puedes insertar ni modificar datos si no has iniciado sesión.
                        </li>
                        <li className={style.listItem}>
                            La consulta de datos está limitada a la cuenta del usuario autenticado.
                        </li>
                        <li className={style.listItem}>
                            No se permite modificar o eliminar información de otros usuarios.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
