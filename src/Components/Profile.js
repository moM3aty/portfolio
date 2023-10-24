/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Profile = () => {
    return (
            <div className="profile">
                <img src="/img/profile-img.png" alt="" className="img-fluid rounded-circle" />
                <h1 className="text-light"><a href="index.html">Mohamed Abo-Elmaaty</a></h1>
                <div className="social-links mt-3 text-center">
                    <a target='_blanck' href="https://www.facebook.com/mo.m3aty/" className="facebook">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a target='_blanck' href="https://github.com/moM3aty" className="twitter">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a target='_blanck' href="https://wa.me/+201275844735" className="google-plus">
                        <i className="bi bi-whatsapp"></i>
                    </a>
                    <a target='_blanck' href="https://www.linkedin.com/in/mohamed-abo-elmaaty-517766221/" className="linkedin">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>
            </div>
    );
}

export default Profile;
