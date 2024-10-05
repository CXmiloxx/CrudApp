import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CreateUser from '../pages/CreateUser'
import ViewUser from '../pages/ViewUser'
import DeleteUser from '../pages/DeleteUser'
import UpdateUser from '../pages/UpdateUser'
import Login from '../pages/Login'
import NewUser from '../components/daots/NewUser'

export default function AppRouter() {
    return (
        <div>
            <HashRouter>
                <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="registro" element={<CreateUser/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="usuarios/registro" element={<NewUser/>} />
                <Route path="/datos/update/:idUsuario" element={<UpdateUser/>} />
                <Route path="/datos/delete/:idUsuario" element={<DeleteUser/>} />
                <Route path="/datos" element={<ViewUser/>} />
                </Routes>
            </HashRouter>
        </div>
    )
}
