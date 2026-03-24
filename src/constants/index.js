const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 1, suffix: "+", label: "Years of Experience" },
    { value: 15, suffix: "+", label: "Satisfied Clients" },
    { value: 30, suffix: "+", label: "Completed Projects" },
    { value: 95, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
        name: "Company Logo 1",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
        name: "Company Logo 2",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
        name: "Company Logo 3",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
        name: "Company Logo 4",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
        name: "Company Logo 5",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
        name: "Company Logo 6",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
        name: "Company Logo 7",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
        name: "Company Logo 8",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
        name: "Company Logo 9",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
        name: "Company Logo 10",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
        name: "Company Logo 11",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "A 3D portfolio website built with React and Three.js to showcase my projects in an interactive way.",
        imgPath: "/images/project1.png",
        logoPath: "/images/logos/react.png",
        title: "3D Portfolio",
        date: "March 2026 - Present",
        responsibilities: [
            "Developing and maintaining user-facing features for my personal portfolio.",
            "Collaborating closely with my own creative ideas to ensure a seamless user experience.",
            "Optimizing the web application for maximum speed and scalability.",
        ],
    },
    {
        review:
            "A collection of beginner-friendly examples for web animation libraries and techniques to help developers learn and grow.",
        imgPath: "/images/project2.png",
        logoPath: "/images/logos/company-logo-1.png",
        title: "Animate Anything",
        date: "March 2026",
        responsibilities: [
            "Led the development of a project to showcase various animation techniques.",
            "Worked with different animation libraries to create a comprehensive resource.",
            "Contributed to the open-source community by sharing knowledge and code.",
        ],
    },
    {
        review:
            "A Chrome extension to help with Hindi pronunciation and meaning of English words, making language learning easier.",
        imgPath: "/images/project3.png",
        logoPath: "/images/logos/company-logo-2.png",
        title: "Hindi Pronouncer",
        date: "February 2026",
        responsibilities: [
            "Built a cross-platform Chrome extension to assist with language learning.",
            "Improved user experience through code optimization and user feedback.",
            "Coordinated with myself to implement features based on my own ideas.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};