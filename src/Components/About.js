import React from 'react';



const About = () =>
{
    return (
        <div className="container">
            <div className="section-title">
                <h2>About</h2>
                <p>My name is Mohamed Ibrahim Mohamed Abo-Elmaaty,
                        I graduated from the Faculty of Science, Department of Mathematics and Computer Science,
                        I have been learning programming since the age of 21,
                        I am now a Full-Stack developer using ASP.Net Core</p>
            </div>
            <div className="row">
                <div className="col-lg-5" data-aos="fade-right">
                    <img src="/img/profile-img.png" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>Designer &amp; Web Developer</h3>
                    <br />
                    <div className="row col-lg-12 list-Display">
                        <ul>
                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <strong>Birthday :</strong>
                                <span>26 March 2000</span>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <strong>Phone:</strong>
                                <span>+20 127 584 4735</span>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <strong>City:</strong> <span>Port-Said, Egypt</span>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <strong>Age:</strong>
                                <span>24</span>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <strong>Degree:</strong>
                                <span>Junior</span>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <strong>Email:</strong>
                                <span>m3aty.sharp@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
