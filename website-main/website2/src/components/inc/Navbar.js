import react from "react"
import { Link } from "react-router-dom"
import Contact from "../pages/Contact"

function Navbar() {

    const styleLogo1 = {
        // color: "#FF8427",
        color: "#B22600",
    }

    const styleLogo2 = {
        fontWeight: "bold",
        color: "#B22600",
    }



    return (
        <>
            <style type="text/css">
            {`
                .nav-bg-NJ {
                background-color: #EEECE1;
                // color: white;
                }
                .font-color-NJ {
                    background-color: #B22600;
                    color: #B22600;
                    }
    
            `}

            </style>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light startAIbg">*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"> */}
                {/* <div className="container-fluid"> */}
                <div className="container">
                    <Link className="navbar-brand" to="/"><h4><span style={styleLogo1}>Strat</span><span style={styleLogo2}>AI</span></h4></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </Link>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="#">StratAI Hub</Link></li>
                                    <li><Link className="dropdown-item" to="#">StratAI School</Link></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

}

export default Navbar;
