import React from 'react';

const Contact = () => {
    return (
        
        <div className="container">
            <div className="section-title">
            <h2>Contact</h2>
            </div>
            <div className="row" data-aos="fade-in">
                <div className="col-lg-5 d-flex align-items-stretch">
                    <div className="info">
                        <div className="address">
                            <i className="bi bi-geo-alt" />
                            <h4>Location:</h4>
                            <p>Port-Said,Egypt, Omar Ebn Abd-Elaziz</p>
                        </div>
                        <div className="email">
                            <i className="bi bi-envelope" />
                            <h4>Email:</h4>
                            <p>m3aty.Sharp@gmail.com</p>
                </div>
                <div className="phone">
                            <i className="bi bi-phone" />
                            <h4>Call:</h4>
                            <p>+20 127 5844 735</p>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27283.12396019997!2d32.284982649999996!3d31.265292099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1697808328050!5m2!1sar!2seg" width={ 600 } height={ 450 } style={ { border: 0, width: '100%', height: '290px' } } allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" name="name" className="form-control" id="name" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Your Email</label>
                                <input type="email" className="form-control" name="email" id="email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Subject</label>
                            <input type="text" className="form-control" name="subject" id="subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Message</label>
                            <textarea className="form-control" name="message" rows={ 10 } required defaultValue={ "" } />
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
