import UserList from "../components/user/UserList";
import BackButton from "../components/UI/BackButton";


export default function ViewUser() {
  return (
    <div>
                  <BackButton route={'/'} label="Volver"/>
      <h1 className="text-center mb-4 text-primary">Listado de Usuarios</h1>
      <UserList />
    </div>
  )
}
  