import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="copyright">
                    &copy; Copyright
                    <strong>
                        <span> Portfolio </span>
                    </strong>
                </div>
                <div className="credits">
                    Designed by <span style={{color:'goldenrod'}}>Mohamed Abo-Elmaaty</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
