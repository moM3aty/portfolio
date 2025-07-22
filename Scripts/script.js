
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

document.addEventListener('DOMContentLoaded', () => {

    // --- UTILITY FUNCTIONS ---
    const getElem = (selector) => document.querySelector(selector);
    const getAllElems = (selector) => document.querySelectorAll(selector);

    // --- DOM ELEMENT SELECTORS ---
    const htmlElement = document.documentElement;
    const loader = getElem('#loader');
    const langToggle = getElem('#lang-toggle');
    const navButtons = getAllElems('.nav-btn');
    const sections = getAllElems('main section');
    const typingTextElement = getElem('#typing-text');
    const mobileMenuToggle = getElem('#mobile-menu-toggle');
    const sidebar = getElem('#sidebar');
    const contactForm = getElem('#contact-form');
    const certGrid = getElem('.cert-grid');
    const portfolioGrid = getElem('.portfolio-grid');
    const portfolioFilters = getElem('.portfolio-filters');

    // PDF Viewer selectors
    const viewerModal = getElem('#viewer-modal');
    const closeModalBtn = getElem('#modal-closer');
    const pdfViewerContainer = getElem('#pdf-viewer-container');
    const pdfLoader = getElem('#pdf-loader');
    const prevPageBtn = getElem('#prev-page');
    const nextPageBtn = getElem('#next-page');
    const pageNumSpan = getElem('#page-num');
    const pageCountSpan = getElem('#page-count');
    const zoomInBtn = getElem('#zoom-in');
    const zoomOutBtn = getElem('#zoom-out');
    const downloadPdfLink = getElem('#download-pdf');
    const pdfCanvas = getElem('#pdf-canvas');
    const pdfRenderArea = getElem('#pdf-render-area');

    // Image Gallery selectors
    const imageGalleryModal = getElem('#image-gallery-modal');
    const closeGalleryBtn = getElem('#gallery-modal-closer');
    const galleryImage = getElem('#gallery-image');
    const galleryPrevBtn = getElem('#gallery-prev-btn');
    const galleryNextBtn = getElem('#gallery-next-btn');
    const galleryCounter = getElem('#gallery-counter');

    // --- DATA ---
    const certificationsData = [
        { id: 'cert10', titleKey: 'cert10-title', issuer: 'ITI', logo: '../images/Certificates/iti.png', verifyUrl: './Certificates/ITI 4 Month.pdf' },
        { id: 'cert1', titleKey: 'cert1-title', issuer: 'Meta (Coursera)', logo: '../images/Certificates/meta.png', verifyUrl: './Certificates/JS Meta.pdf' },
        { id: 'cert6', titleKey: 'cert6-title', issuer: 'Portegy', logo: '../images/Certificates/portegy.png', verifyUrl: './Certificates/CCNA 200-301.pdf' },
        { id: 'cert8', titleKey: 'cert8-title', issuer: 'Portegy', logo: '../images/Certificates/portegy.png', verifyUrl: './Certificates/System Administration.pdf' },
        { id: 'cert11', titleKey: 'cert11-title', issuer: 'ITI', logo: '../images/Certificates/iti.png', verifyUrl: './Certificates/ITI.pdf' },
        { id: 'cert3', titleKey: 'cert3-title', issuer: 'Port Said University', logo: '../images/Certificates/university.png', verifyUrl: './Certificates/Graduate.pdf' },
        { id: 'cert5', titleKey: 'cert5-title', issuer: 'Life Makers Foundation', logo: '../images/Certificates/life Maker.png', verifyUrl: './Certificates/Life Makers.pdf' },
    ];

    const portfolioData = [
        { category: 'websites', titleKey: 'p1-title', image: '../images/Websites/Mobil.png', liveUrl: 'https://www.mobiloil-eg.com/', repoUrl: 'https://github.com/moM3aty/Mobil-Oil.git' },
        { category: 'websites', titleKey: 'p2-title', image: '../images/Websites/importersguide.jpg', liveUrl: 'https://importersguide.online/', repoUrl: 'https://github.com/moM3aty/Importers-Guide.git' },
        { category: 'websites', titleKey: 'p18-title', image: '../images/Websites/oxford-college.png', liveUrl: 'https://oxford-college-pst.uk/', repoUrl: 'https://github.com/moM3aty/Oxford-College.git' },
        { category: 'websites', titleKey: 'p19-title', image: '../images/Websites/Sky-Health.png', liveUrl: 'https://skyhealth-eg.com/', repoUrl: 'https://github.com/moM3aty/Sky-Health.git' },
        { category: 'websites', titleKey: 'p3-title', image: '../images/Websites/kudzuka.jpg', liveUrl: 'https://kudzuka-nv7k0pzdc-mom3aty.vercel.app/', repoUrl: 'https://github.com/moM3aty/KUDZUKA.git' },
        { category: 'websites', titleKey: 'p20-title', image: '../images/Websites/albayan.png', liveUrl: 'https://albayan.tech/', repoUrl: 'https://github.com/moM3aty/Albayan.git' },
        { category: 'websites', titleKey: 'p4-title', image: '../images/Websites/Manufacturing-recipes.png', liveUrl: 'https://pgda.runasp.net/', repoUrl: 'https://github.com/moM3aty/Manufacturing-recipes.git' },
        { category: 'websites', titleKey: 'p5-title', image: '../images/Websites/Skytex.png', liveUrl: 'https://skytex-eg.com/', repoUrl: 'https://github.com/moM3aty/Skytex.git' },
        { category: 'websites', titleKey: 'p6-title', image: '../images/Websites/Portegy.png', liveUrl: 'https://mom3aty.github.io/Portegy/', repoUrl: 'https://github.com/moM3aty/Portegy.git' },
        { category: 'websites', titleKey: 'p7-title', image: '../images/Websites/alakhoa.jpg', liveUrl: 'https://alakhoa.runasp.net/', repoUrl: 'https://github.com/moM3aty/Alakhoa.git' },
        { category: 'websites', titleKey: 'p8-title', image: '../images/Websites/Dublin-Almaseya.jpg', liveUrl: 'https://almasydublin.runasp.net/', repoUrl: 'https://github.com/moM3aty/Dublin-Almaseya.git' },
        { category: 'websites', titleKey: 'p16-title', image: '../images/Websites/YummyFood.png', liveUrl: 'https://yummyfoodagricultural.com/', repoUrl: 'https://github.com/moM3aty/YummyFood.git' },
        { category: 'websites', titleKey: 'p17-title', image: '../images/Websites/RichMinds.png', liveUrl: 'https://richminds.ae/', repoUrl: 'https://github.com/moM3aty/Rich-Minds.git' },
        { category: 'websites', titleKey: 'p9-title', image: '../images/Websites/E-Marketing.jpg', liveUrl: 'https://e-marketing-g80d1c9kq-mohamed-aboelm3atys-projects.vercel.app/', repoUrl: 'https://github.com/moM3aty/E-Marketing.git' },
        { category: 'websites', titleKey: 'p10-title', image: '../images/Websites/Town.png', liveUrl: 'https://the-town-alpha.vercel.app/', repoUrl: 'https://github.com/moM3aty/theTown.git' },
        { category: 'websites', titleKey: 'p11-title', image: '../images/Websites/XTeam.jpg', liveUrl: 'https://xt-eam.vercel.app/', repoUrl: 'https://github.com/moM3aty/XTeam.git' },
        { category: 'websites', titleKey: 'p12-title', image: '../images/Websites/News.png', liveUrl: 'https://drive.google.com/file/d/1WCybakJOT8jqkKJXpJXIWbxfE2fwTkJJ/view?usp=sharing', repoUrl: 'https://github.com/moM3aty/NewsWebsite.git' },
        { category: 'websites', titleKey: 'p13-title', image: '../images/Websites/Organic.png', liveUrl: 'https://drive.google.com/file/d/1qex6KcLiA8Z75RBxTB3LmX2a0SHh_VYc/view?usp=sharing', repoUrl: 'https://github.com/moM3aty/Organic.git' },
        { category: 'websites', titleKey: 'p14-title', image: '../images/Websites/Investment-Portal.jpg', liveUrl: 'https://github.com/moM3aty/Investment-Portal.git', repoUrl: 'https://github.com/moM3aty/Investment-Portal.git' },
        { category: 'websites', titleKey: 'p15-title', image: '../images/Websites/Dopamine.jpg', liveUrl: 'https://github.com/moM3aty/DopamineStore.git', repoUrl: 'https://github.com/moM3aty/DopamineStore.git' },
        { category: 'designs', titleKey: 'd1-title', image: '../images/Designs/126.png', images: ['../images/Designs/126.png'] },
        { category: 'designs', titleKey: 'd2-title', image: '../images/Designs/119.png', images: ['../images/Designs/119.png'] },
        { category: 'designs', titleKey: 'd3-title', image: '../images/Designs/120.png', images: ['../images/Designs/120.png'] },
        { category: 'designs', titleKey: 'd4-title', image: '../images/Designs/123.png', images: ['../images/Designs/123.png'] },
        { category: 'designs', titleKey: 'd5-title', image: '../images/Designs/122.png', images: ['../images/Designs/122.png'] },
        { category: 'designs', titleKey: 'd6-title', image: '../images/Designs/124.png', images: ['../images/Designs/124.png'] },
        { category: 'designs', titleKey: 'd7-title', image: '../images/Designs/129.png', images: ['../images/Designs/129.png', '../images/Designs/130.png'] },
        { category: 'designs', titleKey: 'd8-title', image: '../images/Designs/128.png', images: ['../images/Designs/128.png'] },
        { category: 'designs', titleKey: 'd9-title', image: '../images/Designs/127.png', images: ['../images/Designs/127.png'] },
        { category: 'designs', titleKey: 'd10-title', image: '../images/Designs/125.png', images: ['../images/Designs/125.png', '../images/Designs/113.png', '../images/Designs/108.png'] },
        { category: 'designs', titleKey: 'd11-title', image: '../images/Designs/121.png', images: ['../images/Designs/121.png'] },
        { category: 'designs', titleKey: 'd12-title', image: '../images/Designs/118.jpg', images: ['../images/Designs/118.jpg'] },
        { category: 'designs', titleKey: 'd13-title', image: '../images/Designs/105.png', images: ['../images/Designs/105.png', '../images/Designs/112.png', '../images/Designs/117.png'] },
        { category: 'designs', titleKey: 'd14-title', image: '../images/Designs/116.png', images: ['../images/Designs/116.png', '../images/Designs/110.png'] },
        { category: 'designs', titleKey: 'd15-title', image: '../images/Designs/088.png', images: ['../images/Designs/088.png', '../images/Designs/115.jpeg', '../images/Designs/090.png', '../images/Designs/109.jpeg'] },
        { category: 'designs', titleKey: 'd16-title', image: '../images/Designs/114.jpg', images: ['../images/Designs/114.jpg', '../images/Designs/008.jpg'] },
        { category: 'designs', titleKey: 'd17-title', image: '../images/Designs/111.png', images: ['../images/Designs/111.png', '../images/Designs/089.png', '../images/Designs/007.png', '../images/Designs/006.png', '../images/Designs/005.png', '../images/Designs/004.png', '../images/Designs/003.png'] },
        { category: 'designs', titleKey: 'd18-title', image: '../images/Designs/106.png', images: ['../images/Designs/106.png'] },
        { category: 'designs', titleKey: 'd19-title', image: '../images/Designs/104.png', images: ['../images/Designs/104.png'] },
        { category: 'designs', titleKey: 'd20-title', image: '../images/Designs/103.png', images: ['../images/Designs/103.png'] },
        { category: 'designs', titleKey: 'd21-title', image: '../images/Designs/102.jpg', images: ['../images/Designs/102.jpg'] },
        { category: 'designs', titleKey: 'd22-title', image: '../images/Designs/100.jpg', images: ['../images/Designs/100.jpg'] },
        { category: 'designs', titleKey: 'd23-title', image: '../images/Designs/099.png', images: ['../images/Designs/099.png'] },
        { category: 'designs', titleKey: 'd24-title', image: '../images/Designs/098.jpg', images: ['../images/Designs/098.jpg'] },
        { category: 'designs', titleKey: 'd25-title', image: '../images/Designs/097.jpg', images: ['../images/Designs/097.jpg', '../images/Designs/094.jpg'] },
        { category: 'designs', titleKey: 'd26-title', image: '../images/Designs/096.png', images: ['../images/Designs/096.png'] },
        { category: 'designs', titleKey: 'd27-title', image: '../images/Designs/095.png', images: ['../images/Designs/095.png', '../images/Designs/082.png', '../images/Designs/083.png'] },
        { category: 'designs', titleKey: 'd28-title', image: '../images/Designs/087.png', images: ['../images/Designs/087.png'] },
        { category: 'designs', titleKey: 'd29-title', image: '../images/Designs/086.jpg', images: ['../images/Designs/086.jpg'] },
        { category: 'designs', titleKey: 'd30-title', image: '../images/Designs/085.png', images: ['../images/Designs/085.png'] },
        { category: 'designs', titleKey: 'd31-title', image: '../images/Designs/084.jpg', images: ['../images/Designs/084.jpg'] },
        { category: 'designs', titleKey: 'd32-title', image: '../images/Designs/081.png', images: ['../images/Designs/081.png'] },
        { category: 'designs', titleKey: 'd33-title', image: '../images/Designs/031.jpg', images: ['../images/Designs/031.jpg', '../images/Designs/030.jpg', '../images/Designs/028.jpg', '../images/Designs/027.jpg', '../images/Designs/024.jpg', '../images/Designs/001.png', '../images/Designs/042.png', ] },
        { category: 'designs', titleKey: 'd34-title', image: '../images/Designs/079.jpg', images: ['../images/Designs/079.jpg'] },
        { category: 'designs', titleKey: 'd35-title', image: '../images/Designs/078.jpg', images: ['../images/Designs/078.jpg'] },
        { category: 'designs', titleKey: 'd36-title', image: '../images/Designs/076.jpg', images: ['../images/Designs/076.jpg'] },
        { category: 'designs', titleKey: 'd37-title', image: '../images/Designs/072.png', images: ['../images/Designs/072.png', '../images/Designs/071.png', '../images/Designs/029.jpg'] },
        { category: 'designs', titleKey: 'd38-title', image: '../images/Designs/070.png', images: ['../images/Designs/070.png', '../images/Designs/043.jpg', '../images/Designs/067.png', '../images/Designs/046.jpg', '../images/Designs/066.png', '../images/Designs/048.jpg', '../images/Designs/044.jpg', '../images/Designs/132.jpg', '../images/Designs/131.jpg', ] },
        { category: 'designs', titleKey: 'd40-title', image: '../images/Designs/065.jpg', images: ['../images/Designs/065.jpg'] },
        { category: 'designs', titleKey: 'd41-title', image: '../images/Designs/064.jpg', images: ['../images/Designs/064.jpg', '../images/Designs/063.jpg'] },
        { category: 'designs', titleKey: 'd42-title', image: '../images/Designs/060.jpg', images: ['../images/Designs/060.jpg', '../images/Designs/059.jpg', '../images/Designs/033.png', '../images/Designs/055.jpg', ] },
        { category: 'designs', titleKey: 'd43-title', image: '../images/Designs/020.jpg', images: ['../images/Designs/020.jpg', '../images/Designs/057.jpg', '../images/Designs/018.jpg', '../images/Designs/013.jpg'] },
        { category: 'designs', titleKey: 'd44-title', image: '../images/Designs/056.jpg', images: ['../images/Designs/056.jpg'] },
        { category: 'designs', titleKey: 'd45-title', image: '../images/Designs/054.jpg', images: ['../images/Designs/054.jpg'] },
        { category: 'designs', titleKey: 'd46-title', image: '../images/Designs/053.png', images: ['../images/Designs/053.png'] },
        { category: 'designs', titleKey: 'd47-title', image: '../images/Designs/051.jpg', images: ['../images/Designs/051.jpg', '../images/Designs/050.jpg', '../images/Designs/049.jpg', ] },
        { category: 'designs', titleKey: 'd49-title', image: '../images/Designs/021.jpg', images: ['../images/Designs/021.jpg', '../images/Designs/022.jpg', '../images/Designs/023.jpg', '../images/Designs/012.jpg', ] },
        { category: 'designs', titleKey: 'd50-title', image: '../images/Designs/019.jpg', images: ['../images/Designs/019.jpg'] },
        { category: 'designs', titleKey: 'd51-title', image: '../images/Designs/017.jpg', images: ['../images/Designs/017.jpg', '../images/Designs/016.jpg'] },
        { category: 'designs', titleKey: 'd52-title', image: '../images/Designs/015.jpg', images: ['../images/Designs/015.jpg', '../images/Designs/014.jpg'] },
        { category: 'designs', titleKey: 'd53-title', image: '../images/Designs/002.jpg', images: ['../images/Designs/002.jpg'] }
    ];

    const translations = {
        en: {
            pageTitle: 'Mohamed Aboelmaaty - Portfolio', myName: 'Mohamed Aboelmaaty', 'nav-home': 'Home', 'nav-about': 'About', 'nav-skills': 'Skills', 'nav-certifications': 'Certifications', 'nav-portfolio': 'Portfolio', 'nav-cvs': 'Resume', 'nav-contact': 'Contact', 'lang-toggle-text': 'AR', 'typing-words': 'Full-Stack Developer,IT Specialist, Photoshop Designer',
            'about-heading': 'About Me', 'about-subtitle': 'Full-Stack Developer & IT Specialist & Photoshop Designer',
            'about-desc': 'A results-driven IT professional with a multidisciplinary background, transitioning from IT infrastructure management to Full-Stack Web Development. With proven experience in maintaining secure, high-performance IT environments for diverse clients like Arab Downtown and Dolphin for garments.  Now I combine my deep technical expertise with advanced development skills in ASP.NET and Angular to deliver robust, efficient, and compelling digital solutions.',
            'about-city-label': 'City:', 'about-city': 'Cairo, Egypt', 'about-email-label   ': 'Email:', 'email-address': 'mo.m3aty@outlook.com', 'about-phone-label': 'Phone:', 'phone-number': '+20 127 584-4735', 'about-military-label': 'Military Service:', 'military-status': 'Completed',
            'skills-heading': 'My Skills',
            'skills-cat-frontend': 'Frontend Development', 'skills-cat-backend': 'Backend Development', 'skills-cat-it': 'IT & Infrastructure', 'skills-cat-cloud': 'Cloud & Version Control', 'skills-cat-methodology': 'Methodologies & Management', 'skills-cat-design': 'Design', 'skills-cat-office': 'Office Suite', 'skills-cat-soft': 'Soft Skills',
            'skill-html': 'HTML5', 'skill-css': 'CSS3', 'skill-js': 'JavaScript', 'skill-ts': 'TypeScript', 'skill-angular': 'Angular', 'skill-bootstrap': 'Bootstrap',
            'skill-csharp': 'C#', 'skill-oop': 'OOP', 'skill-dotnet': 'ASP.NET MVC & Core', 'skill-sql': 'MS SQL Server', 'skill-efcore': 'Entity Framework', 'skill-api': 'API', 'skill-winserv': 'Windows Server', 'skill-domain': 'Domain Controller', 'skill-ccna': 'CCNA/Networking', 'skill-sophos': 'Sophos Firewall', 'skill-cctv': 'CCTV Systems', 'skill-esxi': 'VMware ESXi',
            'skill-azure': 'Microsoft Azure', 'skill-git': 'Git/GitHub', 'skill-itil': 'ITIL', 'skill-agile': 'Agile', 'skill-photoshop': 'Adobe Photoshop', 'skill-word': 'Microsoft Word', 'skill-excel': 'Microsoft Excel', 'skill-ppt': 'Microsoft PowerPoint', 'skill-teamlead': 'Team Leadership', 'skill-volunteer': 'Volunteering',
            'cert-verify': 'View Certificate', 'pdf-page-label': 'Page',
            'cert1-title': 'Programming with JavaScript', 'cert3-title': 'Bachelor of Science in Computer Science', 'cert5-title': 'Thanks and Appreciation', 'cert6-title': 'CCNA 200-301', 'cert8-title': 'MCSA 2016', 'cert9-title': 'CompTIA A+', 'cert10-title': 'Intensive Program - Full Stack .Net', 'cert11-title': 'Summer Trainee - ASP.NET MVC',
            'portfolio-websites': 'Websites', 'portfolio-designs': 'Designs', 'portfolio-view-design': 'View Design',
            'p1-title': 'Mobil Store', 'p2-title': 'Importers Guide', 'p3-title': 'KUDZUKA', 'p4-title': 'Manufacturing recipes', 'p5-title': 'Skytex', 'p6-title': 'Portegy', 'p7-title': 'Alakhoa', 'p8-title': 'DUBLIN AL-MASEYA', 'p9-title': 'E-Marketing', 'p10-title': 'The Town', 'p11-title': 'X-Team', 'p12-title': 'News Website', 'p13-title': 'Organic', 'p14-title': 'Investment Portal', 'p15-title': 'Dopamine','p16-title': 'Yummy Food','p17-title':'Rich Minds','p-18':'Oxford College','p19-title':'Sky Health','p20-title':'Albayan',
            'd1-title': 'Personal Logo Design', 'd2-title': 'Design 2', 'd3-title': 'Design 3', 'd4-title': 'Design 4', 'd5-title': 'Design 5', 'd6-title': 'Design 6', 'd7-title': 'Design 7', 'd8-title': 'Design 8', 'd9-title': 'Design 9', 'd10-title': 'Design 10', 'd11-title': 'Design 11', 'd12-title': 'Design 12', 'd13-title': 'Design 13', 'd14-title': 'Design 14', 'd15-title': 'Design 15', 'd16-title': 'Design 16', 'd17-title': 'Design 17', 'd18-title': 'Design 18', 'd19-title': 'Design 19', 'd20-title': 'Design 20', 'd21-title': 'Design 21', 'd22-title': 'Design 22', 'd23-title': 'Design 23', 'd24-title': 'Design 24', 'd25-title': 'Design 25', 'd26-title': 'Design 26', 'd27-title': 'Design 27', 'd28-title': 'Design 28', 'd29-title': 'Design 29', 'd30-title': 'Design 30', 'd31-title': 'Design 31', 'd32-title': 'Design 32', 'd33-title': 'Design 33', 'd34-title': 'Design 34', 'd35-title': 'Design 35', 'd36-title': 'Design 36', 'd37-title': 'Design 37', 'd38-title': 'Design 38', 'd39-title': 'Design 39', 'd40-title': 'Design 40', 'd41-title': 'Design 41', 'd42-title': 'Design 42', 'd43-title': 'Design 43', 'd44-title': 'Design 44', 'd45-title': 'Design 45', 'd46-title': 'Design 46', 'd47-title': 'Design 47', 'd48-title': 'Design 48', 'd49-title': 'Design 49', 'd50-title': 'Design 50', 'd51-title': 'Design 51', 'd52-title': 'Design 52', 'd53-title': 'Design 53', 
            'exp-eisas-date': 'May 2025 - Present', 'exp-eisas-title': 'IT Specialist', 'exp-eisas-company': 'Egyptian Int. Shipping Agencies (Full-time)',
            'exp-gmt-date': 'Feb 2025 - Present', 'exp-gmt-title': 'Web Developer', 'exp-gmt-company': 'GMT (Remote, Part-time)',
            'exp-portegy-main-title': 'Career Progression at Portegy (Part-time)', 'exp-portegy-date': 'Nov 2023 - Present',
            'exp-portegy-admin': '<b>IT Administrator:</b> Managing and maintaining IT infrastructure.',
            'exp-portegy-dev': '<b>Web Developer:</b> Building internal tools and APIs.',
            'exp-portegy-spec': '<b>IT Specialist:</b> Providing advanced technical solutions.',
            'exp-portegy-help': '<b>IT Help-desk:</b> First-level user and system support.',
            'exp-softtech-date': 'May 2024 - Nov 2024', 'exp-softtech-title': 'Front-End Developer (Project-based)', 'exp-softtech-company': 'Soft-Tech Company (Remote)', 'exp-softtech-detail1': 'Translated Figma UI/UX designs for the "Investment Portal" project.', 'exp-softtech-detail2': 'Developed the user interface using Angular and TypeScript.',
            'exp-freelance-title': 'Front-End Developer', 'exp-freelance-company': 'Worked on Angular projects with a focus on responsive UI.',
            'exp-xteam-date': 'Dec 2021 - Dec 2022', 'exp-xteam-title': 'Technical Support (Audit)', 'exp-xteam-company': 'XTeam Company', 'exp-xteam-detail1': 'Followed up with students and corrected mistakes on their web projects.',
            'exp4-date': 'Jan 2024 - Apr 2024', 'exp4-title': 'Intensive Code Camp (Full-Stack .NET)', 'exp4-company': 'Information Technology Institute (ITI)',
            'exp5-date': 'Jul 2021 - Aug 2021', 'exp5-title': 'ASP.NET MVC Summer Trainee',
            'edu-date': 'Graduated: 2022', 'edu-degree': 'Bachelor of Science in Computer Science & IT', 'edu-uni': 'Port Said University (Grade: B+)',
            'edu-project': '<b>Graduation Project (Grade: A+):</b> Website System for a flexible and high-performance Restaurant Menu.',
            'courses-title': 'Key Courses', 'course-cs50': "<b>CS50's Introduction to Computer Science</b> - Harvard University.", 'course-js': '<b>Programming with JavaScript</b> - Meta (via Coursera).', 'course-mbti': '<b>MBTI Personality Types</b> - Life Makers Port Said.',
            'cv-dev-download': 'Developer CV', 'cv-it-download': 'IT CV',
            'contact-location': 'Location', 'contact-email': 'Email', 'contact-phone': 'Phone', 'contact-whatsapp': 'WhatsApp',
            'form-name': 'Your Name', 'form-email': 'Your Email', 'form-message': 'Your Message', 'form-submit': 'Send Message',
            'copyright-line1': '© 2025 Copyright Portfolio', 'designed-by-text': 'Designed by'
        },
        ar: {
            pageTitle: 'محمد أبوالمعاطي - ملف أعمالي', myName: 'محمد أبوالـمعاطي', 'nav-home': 'الرئيسية', 'nav-about': 'عني', 'nav-skills': 'مهاراتي', 'nav-certifications': 'الشهادات', 'nav-portfolio': 'أعمالي', 'nav-cvs': 'السيرة الذاتية', 'nav-contact': 'تواصل', 'lang-toggle-text': 'EN', 'typing-words': 'مطور ويب ,أخصائي تكنولوجيا معلومات, مصمم فوتوشوب',
            'about-heading': 'نبذة عني', 'about-subtitle': 'مطور ويب متكامل وأخصائي تكنولوجيا المعلومات ومصمم فوتوشوب',
            'about-desc': 'محترف تكنولوجيا معلومات ذو خلفية متعددة التخصصات، أنتقل حاليًا من إدارة البنية التحتية لتكنولوجيا المعلومات إلى تطوير الويب المتكامل. لدي خبرة مثبتة في الحفاظ على بيئات تكنولوجيا معلومات آمنة وعالية الأداء لعملاء متنوعين مثل أراب داون تاون ودولفين للملابس. أدمج الآن خبرتي التقنية العميقة مع مهارات التطوير المتقدمة في ASP.NET و Angular لتقديم حلول رقمية قوية وفعالة وجذابة.',
            'about-city-label': 'المدينة:', 'about-city': 'القاهرة، مصر', 'about-email-label': 'البريد الإلكتروني:', 'about-phone-label': 'الهاتف:', 'about-military-label': 'الخدمة العسكرية:', 'military-status': 'تمت تأديتها',
            'skills-heading': 'مهاراتي',
            'skills-cat-frontend': 'تطوير الواجهات الأمامية', 'skills-cat-backend': 'تطوير الواجهات الخلفية', 'skills-cat-it': 'تكنولوجيا المعلومات والبنية التحتية', 'skills-cat-cloud': 'السحابة والتحكم بالإصدار', 'skills-cat-methodology': 'المنهجيات والإدارة', 'skills-cat-design': 'التصميم', 'skills-cat-office': 'مجموعة أوفيس', 'skills-cat-soft': 'المهارات الشخصية',
            'skill-html': 'HTML5', 'skill-css': 'CSS3', 'skill-js': 'JavaScript', 'skill-ts': 'TypeScript', 'skill-angular': 'Angular', 'skill-bootstrap': 'Bootstrap',
            'skill-csharp': 'C#', 'skill-oop': 'برمجة كائنية', 'skill-dotnet': 'ASP.NET MVC & Core', 'skill-sql': 'MS SQL Server', 'skill-efcore': 'Entity Framework', 'skill-api': 'API', 'skill-winserv': 'Windows Server', 'skill-domain': 'Domain Controller', 'skill-ccna': 'CCNA/الشبكات', 'skill-sophos': 'Sophos Firewall', 'skill-cctv': 'أنظمة كاميرات المراقبة', 'skill-esxi': 'VMware ESXi',
            'skill-azure': 'Microsoft Azure', 'skill-git': 'Git/GitHub', 'skill-itil': 'ITIL', 'skill-agile': 'Agile', 'skill-photoshop': 'Adobe Photoshop', 'skill-word': 'Microsoft Word', 'skill-excel': 'Microsoft Excel', 'skill-ppt': 'Microsoft PowerPoint', 'skill-teamlead': 'قيادة الفريق', 'skill-volunteer': 'العمل التطوعي',
            'cert-verify': 'عرض الشهادة', 'pdf-page-label': 'صفحة',
            'cert1-title': 'البرمجة باستخدام JavaScript', 'cert3-title': 'بكالوريوس علوم الحاسب', 'cert5-title': 'شكر وتقدير', 'cert6-title': 'شهادة CCNA 200-301', 'cert8-title': 'شهادة MCSA 2016', 'cert9-title': 'شهادة CompTIA A+', 'cert10-title': 'برنامج مكثف - Full Stack .Net', 'cert11-title': 'تدريب صيفي - ASP.NET MVC',
            'portfolio-websites': 'مواقع', 'portfolio-designs': 'تصميمات', 'portfolio-view-design': 'عرض التصميم',
            'p1-title': 'متجر موبيل', 'p2-title': 'دليل المستوردين', 'p3-title': 'كودزوكا', 'p4-title': 'وصفات التصنيع', 'p5-title': 'سكاي تكس', 'p6-title': 'بورتيجي', 'p7-title': 'الأخوة', 'p8-title': 'دبلن الماسية', 'p9-title': 'إي ماركتينج', 'p10-title': 'المدينة', 'p11-title': 'إكس تيم', 'p12-title': 'موقع إخباري', 'p13-title': 'أورجانيك', 'p14-title': 'بوابة الاستثمار', 'p15-title': 'دوبامين','p16-title': 'يامي فود','p17-title':'ريتش مايندز','p-18':'كلية أكسفورد','p19-title':'سكاي هيلث','p20-title':'البيان',
            'd1-title': 'تصميم شعار شخصي', 'd2-title': 'تصميم 2', 'd3-title': 'تصميم 3', 'd4-title': 'تصميم 4', 'd5-title': 'تصميم 5', 'd6-title': 'تصميم 6', 'd7-title': 'تصميم 7', 'd8-title': 'تصميم 8', 'd9-title': 'تصميم 9', 'd10-title': 'تصميم 10', 'd11-title': 'تصميم 11', 'd12-title': 'تصميم 12', 'd13-title': 'تصميم 13', 'd14-title': 'تصميم 14', 'd15-title': 'تصميم 15', 'd16-title': 'تصميم 16', 'd17-title': 'تصميم 17', 'd18-title': 'تصميم 18', 'd19-title': 'تصميم 19', 'd20-title': 'تصميم 20', 'd21-title': 'تصميم 21', 'd22-title': 'تصميم 22', 'd23-title': 'تصميم 23', 'd24-title': 'تصميم 24', 'd25-title': 'تصميم 25', 'd26-title': 'تصميم 26', 'd27-title': 'تصميم 27', 'd28-title': 'تصميم 28', 'd29-title': 'تصميم 29', 'd30-title': 'تصميم 30', 'd31-title': 'تصميم 31', 'd32-title': 'تصميم 32', 'd33-title': 'تصميم 33', 'd34-title': 'تصميم 34', 'd35-title': 'تصميم 35', 'd36-title': 'تصميم 36', 'd37-title': 'تصميم 37', 'd38-title': 'تصميم 38', 'd39-title': 'تصميم 39', 'd40-title': 'تصميم 40', 'd41-title': 'تصميم 41', 'd42-title': 'تصميم 42', 'd43-title': 'تصميم 43', 'd44-title': 'تصميم 44', 'd45-title': 'تصميم 45', 'd46-title': 'تصميم 46', 'd47-title': 'تصميم 47', 'd48-title': 'تصميم 48', 'd49-title': 'تصميم 49', 'd50-title': 'تصميم 50', 'd51-title': 'تصميم 51', 'd52-title': 'تصميم 52', 'd53-title': 'تصميم 53',
            'exp-eisas-date': 'مايو 2025 - الآن', 'exp-eisas-title': 'أخصائي تكنولوجيا معلومات', 'exp-eisas-company': 'الوكالة المصرية الدولية للملاحة (دوام كامل)',
            'exp-gmt-date': 'فبراير 2025 - الآن', 'exp-gmt-title': 'مطور ويب', 'exp-gmt-company': 'شركة GMT (عن بعد، دوام جزئي)',
            'exp-portegy-main-title': 'التدرج الوظيفي في شركة بورتيجي (دوام جزئي)', 'exp-portegy-date': 'نوفمبر 2023 - الآن',
            'exp-portegy-admin': '<b>مسؤول تكنولوجيا المعلومات:</b> إدارة وصيانة البنية التحتية لتكنولوجيا المعلومات.',
            'exp-portegy-dev': '<b>مطور ويب:</b> بناء أدوات داخلية وواجهات برمجية.',
            'exp-portegy-spec': '<b>أخصائي تكنولوجيا معلومات:</b> تقديم حلول تقنية متقدمة.',
            'exp-portegy-help': '<b>دعم فني:</b> تقديم المستوى الأول من الدعم للمستخدمين والأنظمة.',
            'exp-softtech-date': 'مايو 2024 - نوفمبر 2024', 'exp-softtech-title': 'مطور واجهات أمامية (مشروع)', 'exp-softtech-company': 'شركة Soft-Tech (عن بعد)', 'exp-softtech-detail1': 'ترجمة تصميمات Figma UI/UX لمشروع "بوابة الاستثمار".', 'exp-softtech-detail2': 'تطوير واجهة المستخدم للتطبيق باستخدام Angular و TypeScript.',
            'exp-freelance-title': 'مطور واجهات أمامية', 'exp-freelance-company': 'عملت على مشاريع Angular مع التركيز على واجهة المستخدم المستجيبة.',
            'exp-xteam-date': 'ديسمبر 2021 - ديسمبر 2022', 'exp-xteam-title': 'دعم فني (مراجعة)', 'exp-xteam-company': 'شركة XTeam', 'exp-xteam-detail1': 'متابعة الطلاب وتصحيح الأخطاء في مشاريع الويب الخاصة بهم.',
            'exp4-date': 'يناير 2024 - أبريل 2024', 'exp4-title': 'معسكر تدريب مكثف (Full-Stack .NET)', 'exp4-company': 'معهد تكنولوجيا المعلومات (ITI)',
            'exp5-date': 'يوليو 2021 - أغسطس 2021', 'exp5-title': 'متدرب صيفي ASP.NET MVC',
            'edu-date': 'تخرج: 2022', 'edu-degree': 'بكالوريوس علوم الحاسب وتكنولوجيا المعلومات', 'edu-uni': 'جامعة بورسعيد (التقدير: جيد جداً)',
            'edu-project': '<b>مشروع التخرج (التقدير: امتياز):</b> نظام ويب مرن وعالي الأداء لقائمة طعام مطعم.',
            'courses-title': 'دورات تدريبية هامة', 'course-cs50': '<b>مقدمة في علوم الحاسب (CS50)</b> - جامعة هارفارد.', 'course-js': '<b>البرمجة باستخدام JavaScript</b> - شركة ميتا (عبر كورسيرا).', 'course-mbti': '<b>أنماط الشخصية MBTI</b> - مؤسسة صناع الحياة.',
            'cv-dev-download': 'سيرة ذاتية (مطور)', 'cv-it-download': 'سيرة ذاتية (IT)',
            'contact-location': 'الموقع', 'contact-email': 'البريد', 'contact-phone': 'الهاتف', 'contact-whatsapp': 'واتساب',
            'form-name': 'اسمك', 'form-email': 'بريدك الإلكتروني', 'form-message': 'رسالتك', 'form-submit': 'إرسال الرسالة',
            'copyright-line1': '© 2025 جميع الحقوق محفوظة', 'designed-by-text': 'تصميم'
        }
    };
    
    // --- GLOBAL STATE ---
    let state = {
        language: localStorage.getItem('language') || 'en',
        theme: localStorage.getItem('theme') || 'dark',
        activeSection: localStorage.getItem('activeSection') || 'home',
        typing: { words: [], wordIndex: 0, charIndex: 0, isDeleting: false, },
        pdf: {
            doc: null,
            pageNum: 1,
            pageIsRendering: false,
            pageNumIsPending: null,
            scale: 1.5,
            url: ''
        },
        gallery: {
            images: [],
            currentIndex: 0
        }
    };


    // --- PDF VIEWER FUNCTIONS ---
    const renderPdfPage = num => {
        state.pdf.pageIsRendering = true;

        state.pdf.doc.getPage(num).then(page => {
            const viewport = page.getViewport({ scale: state.pdf.scale });
            pdfCanvas.height = viewport.height;
            pdfCanvas.width = viewport.width;

            const renderContext = {
                canvasContext: pdfCanvas.getContext('2d'),
                viewport: viewport
            };

            page.render(renderContext).promise.then(() => {
                state.pdf.pageIsRendering = false;
                if (state.pdf.pageNumIsPending !== null) {
                    renderPdfPage(state.pdf.pageNumIsPending);
                    state.pdf.pageNumIsPending = null;
                }
            });
            pageNumSpan.textContent = num;
        });
    };

    const queueRenderPage = num => {
        if (state.pdf.pageIsRendering) {
            state.pdf.pageNumIsPending = num;
        } else {
            renderPdfPage(num);
        }
    };

    const updatePdfControls = () => {
        if (!state.pdf.doc) return;
        pageCountSpan.textContent = state.pdf.doc.numPages;
        prevPageBtn.disabled = state.pdf.pageNum <= 1;
        nextPageBtn.disabled = state.pdf.pageNum >= state.pdf.doc.numPages;
    };

    const loadPdf = url => {
        state.pdf.url = url;
        downloadPdfLink.href = url;

        viewerModal.style.display = 'flex';
        pdfLoader.style.display = 'block';
        pdfCanvas.style.display = 'none';


        if (!pdfRenderArea.contains(pdfCanvas)) {
            pdfRenderArea.innerHTML = '';
            pdfRenderArea.appendChild(pdfCanvas);
        }

        pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
            state.pdf.doc = pdfDoc_;
            state.pdf.pageNum = 1;
            state.pdf.scale = 1.5;

            pdfLoader.style.display = 'none';
            pdfCanvas.style.display = 'block';

            renderPdfPage(state.pdf.pageNum);
            updatePdfControls();
        }).catch(err => {
            console.error(`Error loading PDF: ${err}`);
            pdfLoader.style.display = 'none';
            pdfRenderArea.innerHTML = `<p style="color: var(--gold-light); padding: 2rem; text-align: center;">Failed to load PDF.<br>Please check the file path and try again.</p>`;
        });
    };
    const hidePdfViewer = () => {
        viewerModal.style.display = 'none';
        if (state.pdf.doc) {
            state.pdf.doc.destroy();
            state.pdf.doc = null;
        }
        const context = pdfCanvas.getContext('2d');
        context.clearRect(0, 0, pdfCanvas.width, pdfCanvas.height);
    };

    // --- IMAGE GALLERY FUNCTIONS ---
    const showImageInGallery = (index) => {
        if (!state.gallery.images || state.gallery.images.length === 0) return;

        galleryImage.classList.add('fade-out');

        setTimeout(() => {
            state.gallery.currentIndex = index;
            galleryImage.src = state.gallery.images[index];

            galleryImage.onload = () => {
                galleryImage.classList.remove('fade-out');
            };

            galleryCounter.textContent = `${index + 1} / ${state.gallery.images.length}`;
            galleryPrevBtn.style.display = index === 0 ? 'none' : 'flex';
            galleryNextBtn.style.display = index === state.gallery.images.length - 1 ? 'none' : 'flex';
        }, 400); // Match CSS transition duration
    };

    const openImageGallery = (images) => {
        if (!images || images.length === 0) return;

        state.gallery.images = images;
        imageGalleryModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        showImageInGallery(0);
    };

    const closeImageGallery = () => {
        imageGalleryModal.style.display = 'none';
        state.gallery.images = [];
        state.gallery.currentIndex = 0;
        galleryImage.src = '';
        document.body.style.overflow = '';
    };

    // --- CORE LOGIC ---
    function applyTheme(theme) {
        state.theme = theme;
        localStorage.setItem('theme', theme);
        htmlElement.classList.toggle('dark', theme === 'dark');
    }

    function populateCertifications() {
        if (!certGrid) return;
        certGrid.innerHTML = '';
        const currentLang = state.language;
        certificationsData.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'cert-card';
            // FIXED: Changed <a> to <button> to prevent default download/navigation behavior.
            // This ensures the JS-driven modal is always used.
            card.innerHTML = `
                        <div class="cert-card-header">
                            <img src="${cert.logo}" alt="${cert.issuer} Logo" loading="lazy" onerror="this.style.display='none'">
                            <span class="issuer">${cert.issuer}</span>
                        </div>
                        <div class="cert-card-body">
                            <h4 data-key="${cert.titleKey}">${translations[currentLang][cert.titleKey]}</h4>
                        </div>
                        <div class="cert-card-footer">
                            <button class="view-cert-btn" data-url="${cert.verifyUrl}" data-key="cert-verify">
                                ${translations[currentLang]['cert-verify']}
                            </button>
                        </div>
                    `;
            certGrid.appendChild(card);
        });
    }

    function populatePortfolio(filter = 'websites') {
        if (!portfolioGrid) return;
        portfolioGrid.innerHTML = '';
        const currentLang = state.language;
        const filteredData = portfolioData.filter(item => item.category === filter);

        filteredData.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            let linksHtml = '';

            if (item.category === 'websites') {

                linksHtml = `
                                        <h4 data-key="${item.titleKey}">${translations[currentLang][item.titleKey]}</h4>
                <div class="overlay-links">
                                <a href="${item.liveUrl}" target="_blank" aria-label="Live Demo"><i class="fas fa-link"></i></a>
                                <a href="${item.repoUrl}" target="_blank" aria-label="GitHub Repository"><i class="fab fa-github"></i></a>
                            </div>`;
            } else if (item.category === 'designs') {
                linksHtml = `<div class="overlay-links">
                                <button class="view-design-btn" data-title-key="${item.titleKey}" aria-label="${translations[currentLang]['portfolio-view-design']}">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>`;
            }

            portfolioItem.innerHTML = `
                    <img src="${item.image}" alt="${translations[currentLang][item.titleKey]}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/400x250/111827/DAA520?text=Image+Not+Found';">
                    <div class="portfolio-overlay">
                        ${linksHtml}
                    </div>`;
            portfolioGrid.appendChild(portfolioItem);
        });
    }


    function updateContent(lang) {
        state.language = lang;
        localStorage.setItem('language', lang);
        htmlElement.lang = lang;
        htmlElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        getAllElems('[data-key]').forEach(element => {
            const key = element.dataset.key;
            const translation = translations[lang]?.[key];
            if (translation && key !== 'typing-words') {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });

        populateCertifications();
        const activeFilter = portfolioFilters?.querySelector('.active')?.dataset.filter || 'websites';
        populatePortfolio(activeFilter);

        state.typing.words = translations[lang]['typing-words'].split(',');
        state.typing.wordIndex = 0;
        state.typing.charIndex = 0;
        state.typing.isDeleting = false;
    }

    function typeAnimation() {
        if (!typingTextElement || !state.typing.words || state.typing.words.length === 0) return;
        const { words, wordIndex, isDeleting } = state.typing;
        let { charIndex } = state.typing;
        const currentWord = words[wordIndex];
        const typeSpeed = isDeleting ? 80 : 150;
        
        typingTextElement.textContent = currentWord.substring(0, charIndex);
        
        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => { state.typing.isDeleting = true; typeAnimation(); }, 2000);
            return;
        } else if (isDeleting && charIndex === 0) {
            state.typing.isDeleting = false;
            state.typing.wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeAnimation, 500);
            return;
        }
        
        state.typing.charIndex += isDeleting ? -1 : 1;
        setTimeout(typeAnimation, typeSpeed);
    }

    function setActiveSection(sectionId, fromClick = false) {
        state.activeSection = sectionId;
        localStorage.setItem('activeSection', sectionId);
        navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.section === sectionId));
        sections.forEach(sec => sec.classList.toggle('active', sec.id === sectionId));
        if (fromClick && window.innerWidth <= 1024) {
            sidebar.classList.remove('is-open');
            mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
        }
    }

    // --- EVENT LISTENERS ---
    window.addEventListener('load', () => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
        initialize();
    });

    langToggle.addEventListener('click', () => {
        const newLang = state.language === 'en' ? 'ar' : 'en';
        updateContent(newLang);
        setTimeout(typeAnimation, 100); 
    });

    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveSection(button.dataset.section, true);
        });
    });

    mobileMenuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('is-open');
        mobileMenuToggle.querySelector('i').className = sidebar.classList.contains('is-open') ? 'fas fa-times' : 'fas fa-bars';
    });
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const name = contactForm.querySelector('[name="name"]').value;
        const email = contactForm.querySelector('[name="email"]').value;
        const message = contactForm.querySelector('[name="message"]').value;
        const formStatus = getElem('#form-status');

        if (!name || !email || !message) {
            formStatus.textContent = 'Please fill out all fields.';
            formStatus.style.color = '#F7D060'; 
            setTimeout(() => { formStatus.textContent = ''; }, 3000);
            return;
        }

        const yourWhatsAppNumber = '201275844735';

        const whatsappMessage = `Hello Mohamed,

Name: ${name}
Email: ${email}

Message:
${message}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);

        const whatsappUrl = `https://wa.me/${yourWhatsAppNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        formStatus.textContent = 'Thank you! Redirecting to WhatsApp...';
        formStatus.style.color = 'var(--gold-light)';
        setTimeout(() => {
            formStatus.textContent = '';
            contactForm.reset();
        }, 4000);
    });
}

    if (portfolioFilters) {
        portfolioFilters.addEventListener('click', (e) => {
            if (e.target.matches('.filter-btn')) {
                portfolioFilters.querySelector('.active').classList.remove('active');
                e.target.classList.add('active');
                populatePortfolio(e.target.dataset.filter);
            }
        });
    }

    if (certGrid) {
        certGrid.addEventListener('click', (e) => {
            const button = e.target.closest('.view-cert-btn');
            if (button) {
                // e.preventDefault() is not strictly needed for a button, but it's good practice
                e.preventDefault();
                loadPdf(button.dataset.url);
            }
        });
    }

    if (portfolioGrid) {
        portfolioGrid.addEventListener('click', (e) => {
            const viewButton = e.target.closest('.view-design-btn');
            if (viewButton) {
                e.preventDefault();
                const titleKey = viewButton.dataset.titleKey;
                const item = portfolioData.find(p => p.titleKey === titleKey);
                if (item && item.images && item.images.length > 0) {
                    openImageGallery(item.images);
                }
            }
        });
    }

    // PDF viewer controls
    prevPageBtn.addEventListener('click', () => {
        if (state.pdf.pageNum <= 1) return;
        state.pdf.pageNum--;
        queueRenderPage(state.pdf.pageNum);
        updatePdfControls();
    });

    nextPageBtn.addEventListener('click', () => {
        if (!state.pdf.doc || state.pdf.pageNum >= state.pdf.doc.numPages) return;
        state.pdf.pageNum++;
        queueRenderPage(state.pdf.pageNum);
        updatePdfControls();
    });

    zoomInBtn.addEventListener('click', () => {
        if (state.pdf.scale >= 3.0) return;
        state.pdf.scale += 0.2;
        queueRenderPage(state.pdf.pageNum);
    });

    zoomOutBtn.addEventListener('click', () => {
        if (state.pdf.scale <= 0.6) return;
        state.pdf.scale -= 0.2;
        queueRenderPage(state.pdf.pageNum);
    });

    closeModalBtn.addEventListener('click', hidePdfViewer);
    viewerModal.addEventListener('click', (e) => {
        if (e.target === viewerModal) {
            hidePdfViewer();
        }
    });

    // Image gallery controls
    galleryPrevBtn.addEventListener('click', () => {
        if (state.gallery.currentIndex > 0) {
            showImageInGallery(state.gallery.currentIndex - 1);
        }
    });

    galleryNextBtn.addEventListener('click', () => {
        if (state.gallery.currentIndex < state.gallery.images.length - 1) {
            showImageInGallery(state.gallery.currentIndex + 1);
        }
    });

    closeGalleryBtn.addEventListener('click', closeImageGallery);
    imageGalleryModal.addEventListener('click', (e) => {
        if (e.target === imageGalleryModal) {
            closeImageGallery();
        }
    });

    // Keyboard navigation for modals
    document.addEventListener('keydown', (e) => {
        if (imageGalleryModal.style.display === 'flex') {
            if (e.key === 'ArrowLeft' || (htmlElement.dir === 'rtl' && e.key === 'ArrowRight')) {
                galleryPrevBtn.click();
            } else if (e.key === 'ArrowRight' || (htmlElement.dir === 'rtl' && e.key === 'ArrowLeft')) {
                galleryNextBtn.click();
            } else if (e.key === 'Escape') {
                closeGalleryBtn.click();
            }
        }
        if (viewerModal.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeModalBtn.click();
            }
        }
    });

    // Scroll animation observer
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    getAllElems('.scroll-animation').forEach(el => scrollObserver.observe(el));
    
    // --- INITIALIZATION ---
    function initialize() {
        applyTheme(state.theme);
        updateContent(state.language);
        setActiveSection(state.activeSection);
        typeAnimation();
    }
});
