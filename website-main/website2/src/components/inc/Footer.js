import react from "react"
import { Link } from "react-router-dom"
import Contact from "../pages/Contact"

function Footer() {


    return (
        <>
            <style type="text/css">
                {`
                .footer-link-text-NJ {
                    // background-color: #B22600;
                    // color: #FFBD47;
                    color: #EEECE1;
                    }

                    .footer-bg-NJ {
                        background-color: #505046;
                        color: #EEECE1;
                        }
    
                    
        `}

            </style>

            <section className="bg-dark text-white py-5">
            {/* <section className="footer-bg-NJ py-5"> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h6>Company Info</h6>
                            <hr />
                            <p className="footer-link-text-NJ">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco"

                            </p>

                        </div>

                        <div className="col-md-4">
                            <h6>Quick Links</h6>
                            <hr />
                            <div><Link className="text-decoration-none footer-link-text-NJ" to="/"> Home </Link>    </div>
                            <div><Link className="text-decoration-none footer-link-text-NJ " to="/about"> About Us </Link>    </div>
                            <div><Link className="text-decoration-none footer-link-text-NJ " to="/contact"> Contact Us</Link>    </div>
                            <div><Link className="text-decoration-none footer-link-text-NJ" to="/"> Blog</Link>    </div>

                            {/* <div><Link className="text-decoration-none text-white" to="/"> Blog</Link>    </div> */}
                        </div>

                        <div className="col-md-4">
                            <h6>Contact Information</h6>
                            <hr />
                            <div> <p className="footer-link-text-NJ">  StratAI Private Limited</p></div>
                            <div> 
                                <p className="footer-link-text-NJ">  91 Springboard,
                                    <br /> 175-176, Dollar Colony Phase-4, Bannerghatta Road,
                                    <br />Bengaluru Karnataka India,  Pin - 560076
                                </p>
                            </div>
                            <div> <p className="footer-link-text-NJ">  Email: contact@stratai.com</p></div>

                        </div>

                    </div>
                </div>


            </ section>
        </>
    )

}

export default Footer;
