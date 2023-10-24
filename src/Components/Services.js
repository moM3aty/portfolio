/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Services = () => {
    return (
        <div className="container">
            <div className="section-title">
                <h2>Services</h2>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up">
                    <div className="icon"><i className="fa-solid fa-globe"></i></div>
                    <h4 className="title"><a >Creating websites</a></h4>
                    <p className="description">Creating websites according to the customer's request that helps communicate faster and solve customer problems quickly.</p>
                </div>
                <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={ 100 }>
                    <div className="icon"><i className="fa-solid fa-code"></i></div>
                    <h4 className="title"><a >Website development</a></h4>
                    <p className="description">Developing websites and monitoring them continuously to reach the best, easiest and fastest way to communicate with customers and solve their problems.</p>
                </div>
                <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={ 200 }>
                    <div className="icon"><i className="fa-solid fa-image"></i></div>
                    <h4 className="title"><a >Marketing design</a></h4>
                    <p className="description">Create designs in order to create advertisements for products and offers in the best way that attracts the customer to the products, courses, or projects.</p>
                </div>
                <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={ 300 }>
                    <div className="icon"><i className="fa-solid fa-paintbrush"></i></div>
                    <h4 className="title"><a >Logo design</a></h4>
                    <p className="description">Designing a logo in a professional manner is essential for any business activity because it is a cornerstone on which a brand can be built, and this is our goal in designing your logo.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;
