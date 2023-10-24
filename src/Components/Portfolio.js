import React from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Portfolio = () =>
{    
const [open1, setOpen1] = React.useState(false);
const [open2, setOpen2] = React.useState(false);
const [open3, setOpen3] = React.useState(false);
const [open4, setOpen4] = React.useState(false);
const [open5, setOpen5] = React.useState(false);
const [open6, setOpen6] = React.useState(false);
const [open7, setOpen7] = React.useState(false);
const [open8, setOpen8] = React.useState(false);
const [open9, setOpen9] = React.useState(false);
const [open10, setOpen10] = React.useState(false);
const [open11, setOpen11] = React.useState(false);
const [open12, setOpen12] = React.useState(false);
const [open13, setOpen13] = React.useState(false);
const [open14, setOpen14] = React.useState(false);
const [open15, setOpen15] = React.useState(false);
const [open16, setOpen16] = React.useState(false);
const [open17, setOpen17] = React.useState(false);
const [open18, setOpen18] = React.useState(false);
const [open19, setOpen19] = React.useState(false);
const [open20, setOpen20] = React.useState(false);
const [open21, setOpen21] = React.useState(false);
const [open22, setOpen22] = React.useState(false);
const [open23, setOpen23] = React.useState(false);
const [open24, setOpen24] = React.useState(false);
const [open25, setOpen25] = React.useState(false);
const [open26, setOpen26] = React.useState(false);
const [open27, setOpen27] = React.useState(false);
const [open28, setOpen28] = React.useState(false);
const [open29, setOpen29] = React.useState(false);
const [open30, setOpen30] = React.useState(false);
const [open31, setOpen31] = React.useState(false);
const [open32, setOpen32] = React.useState(false);
const [open33, setOpen33] = React.useState(false);
const [open34, setOpen34] = React.useState(false);
const [open35, setOpen35] = React.useState(false);
const [open36, setOpen36] = React.useState(false);
const [open37, setOpen37] = React.useState(false);

    return (
        <div className="container">
            <div className="section-title">
                <h2>Portfolio</h2>
            </div>
            <div className="row" data-aos="fade-up">
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">
                            All
                        </li>
                        <li data-filter=".filter-Design">Designs</li>
                        <li data-filter=".filter-web">Websites</li>
                    </ul>
                </div>
            </div>
            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={ 100 } >
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Business Social Media Banner.png" className="img-fluid" alt="Business Social Media Banner"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"  title="Business Social Media Banner" onClick={() => setOpen1(true)} >
                                <i className="fa-solid fa-eye"></i>
                        </button>
                        </div>
                    </div>
                </div>
                    <Lightbox
                        open={ open1 }
                        close={ () => setOpen1( false ) }
                        slides={ [
                            {
                                src: "/img/portfolio/Business Social Media Banner.png",
                                alt: "Business Social Media Banner",
                            },
                            
                        ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap" >
                        <img src="/img/portfolio/Furniture Social Media Panner.png" className="img-fluid" alt="Furniture Social Media Panner"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"  title="Furniture Social Media Panner" onClick={() => setOpen2(true)} >
                                <i className="fa-solid fa-eye"></i>
                        </button>
                        </div>
                    </div>
                </div>
                    <Lightbox
                        open={ open2 }
                        close={ () => setOpen2( false ) }
                        slides={ [
                            {
                                src: "/img/portfolio/Furniture Social Media Panner.png",
                                alt: "image 2",
                            },
                        ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Sport Shoes Social Media Banner.png" className="img-fluid" alt="Sport Shoes Social Media Banner"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"  title="Design 3" onClick={() => setOpen3(true)} >
                                        <i className="fa-solid fa-eye"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                            <Lightbox
                                open={ open3 }
                                close={ () => setOpen3( false ) }
                                slides={ [
                            {
                                src: "/img/portfolio/Sport Shoes Social Media Banner.png",
                                alt: "Sport Shoes Social Media Banner",
                            },
                        ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Logo S.png" className="img-fluid" alt="Logo S"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"  title="Logo S" onClick={() => setOpen4(true)} >
                                <i className="fa-solid fa-eye"></i>
                        </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open4 }
                        close={ () => setOpen4( false ) }
                        slides={ [
                            {
                                src: "/img/portfolio/Logo S.png",
                                alt: "Logo S",
                            },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Logo 2.png" className="img-fluid" alt="Logo"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen5(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open5 }
                        close={ () => setOpen5( false ) }
                        slides={ [
                            {
                                src: "/img/portfolio/Logo 2.png",
                                alt: "Logo",
                            },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Art.jpg" className="img-fluid" alt="Art"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen6(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open6 }
                        close={ () => setOpen6( false ) }
                        slides={ [
                                { src: "/img/portfolio/Art.jpg" },
                                { src: "/img/portfolio/Art8.jpg" },
                                { src: "/img/portfolio/Art1.png" },
                                { src: "/img/portfolio/Art7.jpg" },
                                { src: "/img/portfolio/Art2.png" },
                                { src: "/img/portfolio/Art6.jpg" },
                                { src: "/img/portfolio/Art3.png" },
                                { src: "/img/portfolio/Art4.jpg" },
                                { src: "/img/portfolio/Art5.jpg" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/baby1.jpg" className="img-fluid" alt="Marketting"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen7(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open7 }
                        close={ () => setOpen7( false ) }
                        slides={ [
                                { src: "/img/portfolio/baby1.jpg" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Cap.jpg" className="img-fluid" alt="Marketting"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen8(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open8 }
                        close={ () => setOpen8( false ) }
                        slides={ [
                                { src: "/img/portfolio/Cap.jpg" },
                                { src: "/img/portfolio/Cap2.jpg" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/CV4.png" className="img-fluid" alt="CV"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen9(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open9 }
                        close={ () => setOpen9( false ) }
                        slides={ [
                                { src: "/img/portfolio/CV4.png" },
                                { src: "/img/portfolio/CV1.png" },
                                { src: "/img/portfolio/CV2.png" },
                                { src: "/img/portfolio/CV3.jpg" },
                    ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/digital.jpg" className="img-fluid" alt="digital"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen10(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open10 }
                        close={ () => setOpen10( false ) }
                        slides={ [
                                { src: "/img/portfolio/digital.jpg" },
                                { src: "/img/portfolio/digital1.jpg" },
                                { src: "/img/portfolio/digital2.jpg" },
                                { src: "/img/portfolio/digital3.jpg" },
                                { src: "/img/portfolio/digital4.jpg" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/F1.png" className="img-fluid" alt="Marketing"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen11(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open11 }
                        close={ () => setOpen11( false ) }
                        slides={ [
                                { src: "/img/portfolio/F1.png" },
                                { src: "/img/portfolio/F2.png" },
                                { src: "/img/portfolio/F3.png" },
                                
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Fire.jpg" className="img-fluid" alt="Marketing"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"   onClick={() => setOpen12(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open12 }
                        close={ () => setOpen12( false ) }
                        slides={ [
                                { src: "/img/portfolio/Fire.jpg" },

                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/G54.png" className="img-fluid" alt="Marketing"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"   onClick={() => setOpen13(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open13 }
                        close={ () => setOpen13( false ) }
                        slides={ [
                                { src: "/img/portfolio/G54.png" },
                                { src: "/img/portfolio/G51.png" },
                                { src: "/img/portfolio/G52.png" },
                                { src: "/img/portfolio/G53.png" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Gold2.jpg" className="img-fluid" alt="Marketing"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen14(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open14 }
                        close={ () => setOpen14( false ) }
                        slides={ [
                                { src: "/img/portfolio/Gold2.jpg" },
                                { src: "/img/portfolio/Gold1.jpg" },
                                { src: "/img/portfolio/Gold3.jpg" },
                                
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Golden Friday.png" className="img-fluid" alt="Marketing"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen15(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open15 }
                        close={ () => setOpen15( false ) }
                        slides={ [
                                { src: "/img/portfolio/Golden Friday.png" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Green3.png" className="img-fluid" alt="Marketing"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen16(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open16 }
                        close={ () => setOpen16( false ) }
                        slides={ [
                                { src: "/img/portfolio/Green3.png" },
                                { src: "/img/portfolio/Green4.png" },
                                { src: "/img/portfolio/Green1.jpeg" },
                                { src: "/img/portfolio/Green2.jpeg" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/invitation1.png" className="img-fluid" alt="invitation"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen17(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open17}
                        close={ () => setOpen17( false ) }
                        slides={ [
                                { src: "/img/portfolio/invitation1.png" },
                                { src: "/img/portfolio/invitation2.png" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Koko3.jpg" className="img-fluid" alt="starmap"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen18(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open18 }
                        close={ () => setOpen18( false ) }
                        slides={ [
                                { src: "/img/portfolio/Koko3.jpg" },
                                { src: "/img/portfolio/Koko4.jpg" },
                                { src: "/img/portfolio/Koko5.jpg" },
                                { src: "/img/portfolio/Koko6.jpg" },
                                { src: "/img/portfolio/Koko7.jpg" },
                                { src: "/img/portfolio/koko.jpg" },
                                { src: "/img/portfolio/koko2.jpg" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/logo3.jpg" className="img-fluid" alt="logo"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen19(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open19 }
                        close={ () => setOpen19( false ) }
                        slides={ [
                                { src: "/img/portfolio/logo3.jpg" },
                                { src: "/img/portfolio/LogoC.png" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/logo4.jpg" className="img-fluid" alt="logo"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen20(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open20 }
                        close={ () => setOpen20( false ) }
                        slides={ [
                                { src: "/img/portfolio/logo4.jpg" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Makit3.jpg" className="img-fluid" alt="Makit"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen21(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open21 }
                        close={ () => setOpen21( false ) }
                        slides={ [
                                { src: "/img/portfolio/Makit3.jpg" },
                                { src: "/img/portfolio/Makit2.jpg" },
                                { src: "/img/portfolio/Makit4.png" },
                                { src: "/img/portfolio/Makit.jpg" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/mandel2.jpg" className="img-fluid" alt="mandel"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen22(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open22 }
                        close={ () => setOpen22( false ) }
                        slides={ [
                                { src: "/img/portfolio/mandel2.jpg" },
                                { src: "/img/portfolio/mandel3.jpg" },
                                { src: "/img/portfolio/mandel.png" },
                                { src: "/img/portfolio/mandel4.jpg" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Milk.jpg" className="img-fluid" alt="Marketing"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen23(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open23 }
                        close={ () => setOpen23( false ) }
                        slides={ [
                                { src: "/img/portfolio/Milk.jpg" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/MR1.jpg" className="img-fluid" alt="Marketing"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen24(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open24 }
                        close={ () => setOpen24( false ) }
                        slides={ [
                                { src: "/img/portfolio/MR1.jpg" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Mug1.jpg" className="img-fluid" alt="Mug"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen25(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open25 }
                        close={ () => setOpen25( false ) }
                        slides={ [
                                { src: "/img/portfolio/Mug1.jpg" },
                                { src: "/img/portfolio/mug4.jpg" },
                                { src: "/img/portfolio/Mug2.jpg" },
                                { src: "/img/portfolio/Mug3.jpg" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/O51.png" className="img-fluid" alt="Marketing"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen26(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open26 }
                        close={ () => setOpen26( false ) }
                        slides={ [
                                { src: "/img/portfolio/O51.png" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Orange6.png" className="img-fluid" alt="Marketing"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen27(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open27 }
                        close={ () => setOpen27( false ) }
                        slides={ [
                                { src: "/img/portfolio/Orange6.png" },
                                { src: "/img/portfolio/Orange1.png" },
                                { src: "/img/portfolio/Orange2.png" },
                                { src: "/img/portfolio/Orange3.png" },
                                { src: "/img/portfolio/Orange4.png" },
                                { src: "/img/portfolio/Orange5.png" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Pink2.png" className="img-fluid" alt="Marketing"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen28(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open28 }
                        close={ () => setOpen28( false ) }
                        slides={ [
                            { src: "/img/portfolio/Pink2.png" },
                            { src: "/img/portfolio/Pink1.png" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Portari.jpg" className="img-fluid" alt="Portrait"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen29(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open29 }
                        close={ () => setOpen29( false ) }
                        slides={ [
                                { src: "/img/portfolio/Portari.jpg" },
                                { src: "/img/portfolio/Portari2.jpg" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/QR.jpg" className="img-fluid" alt="QR"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen30(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                <Lightbox
                    open={ open30 }
                    close={ () => setOpen30( false ) }
                    slides={ [
                        { src: "/img/portfolio/QR.jpg" },
                    ] }/>
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/R52.png" className="img-fluid" alt="Marketing"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen31(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open31 }
                        close={ () => setOpen31( false ) }
                        slides={ [
                                { src: "/img/portfolio/R52.png" },
                                { src: "/img/portfolio/R51.png" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/RB1.jpg" className="img-fluid" alt="Marketing"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen32(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open32 }
                        close={ () => setOpen32( false ) }
                        slides={ [
                                { src: "/img/portfolio/RB1.jpg" },
                                { src: "/img/portfolio/RB2.jpg" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/RN1.jpg" className="img-fluid" alt="Marketing"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen33(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open33 }
                        close={ () => setOpen33( false ) }
                        slides={ [
                                { src: "/img/portfolio/RN1.jpg" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/ROB.jpg" className="img-fluid" alt="Marketing"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen34(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open34 }
                        close={ () => setOpen34( false ) }
                        slides={ [
                                { src: "/img/portfolio/ROB.jpg" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/RR1.jpg" className="img-fluid" alt="Marketing"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen35(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open35 }
                        close={ () => setOpen35( false ) }
                        slides={ [
                                { src: "/img/portfolio/RR1.jpg" },
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/yellow1.jpg" className="img-fluid" alt="Marketing"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen36(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open36 }
                        close={ () => setOpen36( false ) }
                        slides={ [
                                { src: "/img/portfolio/yellow1.jpg" },
                            ] } />
                            <div className="col-lg-4 col-md-6 portfolio-item filter-Design">
                    <div className="portfolio-wrap">
                        <img src="/img/portfolio/Id.jpg" className="img-fluid" alt="Card Id"/>
                        <div className="portfolio-links">
                            <button  data-gallery="portfolioGallery"    onClick={() => setOpen37(true)} >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                        <Lightbox
                        open={ open37 }
                        close={ () => setOpen37( false ) }
                        slides={ [
                                { src:"/img/portfolio/Id.jpg" },
                                {  src:"/img/portfolio/Id2.jpg"}
                            ] } />
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap-Web">
                        <img src="/img/portfolio/img-web1.png" className="img-fluid" alt="E-Commerce" />
                        <div className="portfolio-links">
                            <a href="https://m3aty-e-commerce.vercel.app/" target='_blanck' data-gallery="portfolioGallery" title="E-Commerce" >
                                <i className="fa-solid fa-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap-Web">
                        <img src="/img/portfolio/img-web2.png" className="img-fluid" alt="5msat" />
                        <div className="portfolio-links">
                            <a href="https://5msat.vercel.app/" target='_blanck' data-gallery="portfolioGallery"  title="5msat" >
                                <i className="fa-solid fa-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap-Web">
                        <img src="/img/portfolio/img-web3.png" className="img-fluid" alt="X-Team" />
                        <div className="portfolio-links">
                                    <a href="https://xt-eam.vercel.app/" target='_blanck' data-gallery="portfolioGallery" title="X-Team" >
                                <i className="fa-solid fa-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap-Web">
                        <img src="/img/portfolio/img-web4.png" className="img-fluid" alt="E-Marketing" />
                        <div className="portfolio-links">
                            <a href="https://e-marketing.vercel.app/" target='_blanck' data-gallery="portfolioGallery"  title="E-Marketing" >
                                <i className="fa-solid fa-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap-Web">
                        <img src="/img/portfolio/img-web5.png" className="img-fluid" alt="Kudzuka" />
                        <div className="portfolio-links">
                                    <a href="https://kudzuka.vercel.app/" target='_blanck' data-gallery="portfolioGallery"  title="Kudzuka" >
                                <i className="fa-solid fa-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
