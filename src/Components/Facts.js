import React from 'react';
import CountUp from 'react-countup';
const Facts = () => {
    return ( 
        <div className='container'>
        <div className="section-title">
                <h2>Facts</h2>
        </div>
        <div className="row no-gutters">
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init aos-animate" data-aos="fade-up">
                <div className="count-box">
                    <i className="bi bi-emoji-smile"></i>
                        <CountUp start={ 0 } end={ 232 } duration={7}></CountUp>
                        <p><strong>Happy Clients</strong> consequuntur quae</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <div className="count-box">
                    <i className="bi bi-journal-richtext"></i>
                        <CountUp start={ 0 } end={ 521 } duration={7}></CountUp> 
                    <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                <div className="count-box">
                    <i className="bi bi-headset"></i>
                        <CountUp start={ 0 } end={ 1453 } duration={7}></CountUp>
                    <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
                <div className="count-box">
                    <i className="bi bi-people"></i>
                        <CountUp start={ 0 } end={ 32 } duration={7}></CountUp>
                    <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Facts;
