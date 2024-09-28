import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CreateUser from '../pages/CreateUser'
import ViewUser from '../pages/ViewUser'
import DeleteUser from '../pages/DeleteUser'
import UpdateUser from '../pages/UpdateUser'

export default function AppRouter() {
    return (
        <div>
            <HashRouter>
                <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/usuarios/registro" element={<CreateUser/>} />
                <Route path="/usuarios/update/:idUsuario" element={<UpdateUser/>} />
                <Route path="/usuarios/delete/:idUsuario" element={<DeleteUser/>} />
                <Route path="/usuarios" element={<ViewUser/>} />
                </Routes>
            </HashRouter>
        </div>
    )
}
