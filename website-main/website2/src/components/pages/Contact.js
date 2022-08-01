import React from 'react'
import Footer from '../inc/Footer'


class Contact extends React.Component {

    render() {
        return (
            <div>
                <section className="py-4 text-center bg-primary">
                    <h1 className="text-white">Contact Us </h1>
                </section>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0638668092065!2d77.59898991473955!3d12.903614790900532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1519380fc7ad%3A0x8195f8645dab7f8c!2s91springboard%20JP%20Nagar!5e0!3m2!1sen!2sin!4v1633676275002!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                            </div>

                            <div className="col-md-4">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h4> Contact Us</h4>
                                        <div className="underlineNJ mb-2"></div>
                                        <form>
                                            <label for="">Name </label>
                                            <input type="text" placeholder="Enter your Name" class="form-control mb-2" />
                                            <label for="">Email </label>
                                            <input type="text" placeholder="Enter your Email" class="form-control mb-2" />
                                            <label for="">Contact Number </label>
                                            <input type="text" placeholder="Enter your Contact Number" class="form-control mb-2" />
                                            <label for="">Message </label>
                                            <textarea rows="3" className="form-control mb-2"></textarea>
                                            <button type="submt" className="btn btn-primary w=100">Submit</button>
                                       
                                        </form>
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

export default Contact;