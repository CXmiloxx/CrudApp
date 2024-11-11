import { HashRouter, Route, Routes } from 'react-router-dom'

import Login from '../pages/Login'
import CreateUser from '../pages/CreateUser'
import App from '../App'
import Nav from '../components/UI/Nav'
import Dashboard from '../pages/Dashboard'
import NewHabit from '../components/habits/NewHabit'



export default function AppRouter() {
    return (
        <div>
            <HashRouter>
                <Nav/>
                <Routes>
                <Route exact path="/" element={<App/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="registro" element={<CreateUser/>} />
                <Route path="dashboard" element={<Dashboard/>} />
                <Route path="/new-habit" element={<NewHabit />} />

                </Routes>
            </HashRouter>
        </div>
    )
}
