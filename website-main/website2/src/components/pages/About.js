import React from 'react'
import MissionVision from './includes/MissionVision';
import Footer from '../inc/Footer';

function About() {

    return (

        <div>
            <section className="py-4 text-center bg-primary">
                <h1 className="text-white">About Us </h1>
            </section>

            <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h4>About our Company</h4>
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
< MissionVision/>
<Footer />
        </div>
    )
}
export default About;