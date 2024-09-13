
export default function Registro() {
    return (
        <div>
            <h1>Registro</h1>
            <form>
                <label>
                    Nombre:
                    <input type="text" name="nombre" />
                </label>
                <label>
                    Apellido:
                    <input type="text" name="apellido" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Contraseña:
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
