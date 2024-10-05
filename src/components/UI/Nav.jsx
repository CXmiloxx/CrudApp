import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <p className="navbar-brand">CrudApp</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <p className="nav-link active" aria-current="page">Home</p>
                            <Link to={'/registro'}>
                                <p className="nav-link">Register</p>
                            </Link>
                            <Link to={'/login'}>
                                <p className="nav-link">Login</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
