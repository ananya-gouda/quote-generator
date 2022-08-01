import React from 'react'
import Slider from '../inc/Slider'
import MissionVision from './includes/MissionVision';
import Footer from '../inc/Footer'

class Home extends React.Component {

    render() {
        return (
            <div>
                <Slider />
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h4>Our Company</h4>
                                <div className="underlineNJ mb-3"></div>
                                <p>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                                </p>
                                <p>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                                </p>

                            </div>
                        </div>
                    </div>
                </section>

                <MissionVision />

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h4>Our Services</h4>
                                <div className="underlineNJ mb-3"></div>

                            </div>

                            <div className="col-md-4">

                                <div className="card shadow">
                                    <div className="card-body">
                                        <h6>Web Designing</h6>
                                        <div className="sub-underlineNJ mb-3"></div>
                                        <p>
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco"

                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="card shadow">
                                    <div className="card-body">
                                        <h6>Developement</h6>
                                        <div className="sub-underlineNJ mb-3"></div>
                                        <p>
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco"

                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="card shadow">
                                    <div className="card-body">
                                        <h6>SEO</h6>
                                        <div className="sub-underlineNJ mb-3"></div>
                                        <p>
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco"

                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                <Footer />


            </div>
        )

    }
}

export default Home;