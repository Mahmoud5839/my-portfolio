import React, { useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Github, Linkedin,
  Mail, Phone, Download, Code2, Smartphone, Gauge, Users, ExternalLink,
  GraduationCap, Sparkles, BrainCircuit, Database, Globe2
} from "lucide-react";

// Add your projects here. Place thumbnail images in /public/projects/ and use paths like:
// image: "/projects/cashier-dashboard.png"
const projects = [
  {
    title: "Zad Almusafir",
    category: "Frontend Development",
    description: "An informative Islamic website that helps travelers understand Qasr prayer through clear, accessible, and user-friendly content.",
    image: "../images/zad-almusafir-cover.png",
    stack: ["React", "JavaScript (ES6+)", "CSS", "git", "GitHub Pages", "Vite", "Responsive Design"],
    live: "https://safr-qasr.vercel.app/",
    github: "https://github.com/Mahmoud5839/safr-qasr"
  },
  {
    title: "My Portfolio",
    category: "Frontend Development",
    description: "MERN Stack Developer building modern, responsive, and user-focused web applications. Passionate about turning ideas into practical digital solutions.",
    image: "../images/Neon Full-Stack Portfolio Hero.png",
    stack: ["React", "JavaScript (ES6+)", "CSS", "git", "Lucide React", "Responsive Design", "Vite"],
    live: "https://myportfolio-m7.vercel.app/",
    github: "https://github.com/Mahmoud5839/my-portfolio"
  },
  {
    title: "ABU-RABEH POS",
    category: "Full-Stack Web Application",
    description: "A complete cashier/POS system built with the MERN stack, featuring a user-friendly interface, real-time updates, and secure data management for efficient sales operations.",
    image: "../images/aburabeh-store-cover-layered.png",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Electron js", "Responsive Design", "APIs", "Authentication", "State Management"],
    live: "",
    github: ""
  },
  {
    title: "Zentro Store",
    category: "Full-Stack Web Development",
    description: "E-commerce web application built with the MERN stack, featuring a user-friendly interface, secure payment integration, and real-time inventory management for a seamless online shopping experience.",
    image: "../images/zentro-store.jfif",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Responsive Design", "APIs", "Authentication", "State Management"],
    live: "https://zentro-store.vercel.app/",
    github: "https://github.com/Mahmoud5839/ZENTRO-STORE-FRONT"
  }, 
  {
    title: "Housing Price Dashboard",
    category: "Data Analysis Project",
    description: "A machine learning model for predicting house prices based on various features and market trends.",
    image: "../images/maxresdefault.jpg",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Dash", "Plotly",],
    live: "",
    github: ""
  }, 
  {
    title: "The Modern Marketing Dashboard",
    category: "Data Analysis Project",
    description: "Dashboard for analyzing and visualizing marketing data using machine learning techniques to optimize marketing strategies.",
    image: "../images/modern-marketing.png",
    stack: ["Python", "Pandas", "NumPy",  "Seaborn", "Dash", "Plotly", "Machine Learning", "Data Analysis", "Data Visualization", "Docker"],
    live: "https://huggingface.co/spaces/mahmoud712/The-Modern-Marketing", 
    github: "https://github.com/Mahmoud5839/Modern-Marketing"
  }, 
  {
    title: "Big Data E-Commerce Analysis",
    category: "Data Analysis Project",
    description: "A big data analysis project that utilizes PySpark to process and analyze large-scale e-commerce datasets, providing insights into customer behavior, sales trends, and product performance.",
    image: "../images/big-data.jpg",
    stack: ["Python", "Pandas", "pyspark", "streamlit", "jupyter", "Plotly", "Data Analysis", "Data Visualization", "Big Data"],
    live: "",
    github: "https://github.com/Mahmoud5839/Big-Data-Project"
  }, 

];


const skills = [
  { name: "React", group: "Frontend", icon: Code2 },
  { name: "Node.js", group: "Backend", icon: Globe2 },
  { name: "Express.js", group: "Backend", icon: Code2 },
  { name: "MongoDB", group: "Database", icon: Database },
  { name: "MERN Stack", group: "Full-Stack", icon: Code2 },
  { name: "Machine Learning", group: "AI & Data", icon: BrainCircuit },
  { name: "Data Analysis", group: "AI & Data", icon: Gauge },
  { name: "AI", group: "AI & Data", icon: Sparkles },
];

const nav = ["About", "Skills", "Education", "Projects", "Contact"];
const email = "hooda7113@gmail.com";
const linkedin = "https://www.linkedin.com/in/mahmoud-abu-rabeh-96a481374";
const github = "https://github.com/mahmoud5839";
const phone = "+201555775839";

function Brand() {
  return <a className="brand" href="#home" aria-label="Mahmoud home"><span>&lt;/M&gt;</span> Mahmoud</a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header">
    <div className="container nav-wrap">
      <Brand />
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={open ? "nav-links nav-open" : "nav-links"}>
        {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let’s Connect <ArrowUpRight size={15} /></a>
      </nav>
    </div>
  </header>;
}

function SectionHeading({ eyebrow, title, accent }) {
  return <div className="section-heading">
    <div className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</div>
    <h2>{title} <span>{accent}</span></h2>
  </div>;
}

function Hero() {
  return <section className="hero section" id="home">
    <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
    <div className="container hero-grid">
      <div className="hero-copy">
        <div className="availability"><span /> OPEN TO OPPORTUNITIES</div>
        <p className="intro">Hi, I’m Mahmoud <span className="wave">👋</span></p>
        <h1>Mahmoud<br /><span>Aburabeh</span></h1>
        <div className="role">MERN Stack Developer</div>
        <div className="short-line" />
        <p className="hero-description">I build modern, responsive, and user-focused web applications — turning ideas into reliable digital experiences.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore My Work <ArrowRight size={17} /></a>
          <a className="button button-outline" href={`mailto:${email}`}>Let’s Talk <ArrowUpRight size={17} /></a>
        </div>
        <div className="socials">
          <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a href={`mailto:${email}`} aria-label="Email"><Mail /></a>
        </div>
      </div>
      <div className="hero-visual profile-visual">
        <div className="visual-glow" />
        <div className="portrait-aura" />
        <div className="portrait-frame">
          <img className="profile-photo" src="/images/mahmoud-profile.png" alt="Mahmoud Aburabeh" />
        </div>
        <div className="float-chip chip-react"><span className="chip-icon">⚛</span> React</div>
        <div className="float-chip chip-stack"><span className="chip-icon">{"</>"}</span> MERN Stack</div>
        <div className="visual-caption"><span className="caption-mark">✳</span><div><strong>Curious by nature.</strong><small>Building with purpose.</small></div></div>
      </div>
    </div>
    <div className="container hero-bottom"><span>SCROLL TO EXPLORE</span><a href="#about" aria-label="Scroll to About"><ArrowDownRight size={18} /></a><span className="hero-bottom-line" /></div>
  </section>;
}

function About() {
  return <section className="section" id="about"><div className="container about-grid">
    <div><SectionHeading eyebrow="A LITTLE ABOUT ME" title="Code with purpose." accent="Grow with curiosity." /></div>
    <div className="about-content">
      <p className="about-lead">I’m <strong>Mahmoud Aburabeh</strong>, a developer from Kafr El Dawwar, Egypt, with <span className="highlight">2+ years of experience</span> creating practical digital solutions.</p>
      <p className="body-copy">I’ve worked on real-world projects, including a complete cashier/POS system, alongside Machine Learning and Data Analysis projects. I enjoy bringing thoughtful UI, dependable backend logic, and useful features together.</p>
      <div className="about-facts">
        <div className="fact"><span className="fact-icon"><Code2 size={19} /></span><div><strong>Real-world projects</strong><small>From concept to implementation</small></div></div>
        <div className="fact"><span className="fact-icon"><BrainCircuit size={19} /></span><div><strong>Cross-disciplinary</strong><small>Web development + data & ML</small></div></div>
      </div>
    </div>
  </div></section>;
}

function Skills() {
  return <section className="section section-tinted" id="skills"><div className="container">
    <SectionHeading eyebrow="MY TOOLKIT" title="Skills &" accent="technologies." />
    <p className="section-subtitle">Tools I use to turn ideas into working products.</p>
    <div className="skills-grid">{skills.map(({ name, group, icon: Icon }) =>
      <div className="skill-card" key={name}><div className="skill-icon"><Icon size={21} /></div><div><h3>{name}</h3><p>{group}</p></div><ArrowUpRight className="skill-arrow" size={17} /></div>
    )}</div>
  </div></section>;
}

function Education() {
  return <section className="section" id="education"><div className="container education-layout">
    <div><SectionHeading eyebrow="LEARNING JOURNEY" title="Education &" accent="courses." /></div>
    <div className="timeline">
      <div className="timeline-item"><span className="timeline-point" /><div className="timeline-meta">2023 — 2027 <span className="tag">IN PROGRESS</span></div><h3>B.Sc. in Computers & Information</h3><p className="timeline-place"><GraduationCap size={16} /> Damanhour University</p><p className="timeline-desc">Faculty of Computers and Information, building a strong foundation in computing and software development.</p></div>
      <div className="timeline-item"><span className="timeline-point" /><div className="timeline-meta">PROFESSIONAL TRAINING</div><h3>MERN Stack Development</h3><p className="timeline-place"><GraduationCap size={16} /> Information Technology Institute (ITI)</p></div>
      <div className="timeline-item"><span className="timeline-point" /><div className="timeline-meta">PROFESSIONAL TRAINING</div><h3>Machine Learning for Data Analysis</h3><p className="timeline-place"><GraduationCap size={16} /> National Telecommunication Institute (NTI)</p></div>
    </div>
  </div></section>;
}

function Projects() {
  return <section className="section section-tinted" id="projects"><div className="container">
    <div className="projects-head"><div><SectionHeading eyebrow="SELECTED WORK" title="Projects in" accent="progress." /></div><p className="section-subtitle">A home for the ideas I’ve built and the problems I’ve explored.</p></div>
    <div className="projects-grid">{projects.map((project, i) =>
      <article className="project-card" key={project.title}>
        <div className={`project-preview preview-${i + 1}`}>
          {project.image ? <img src={project.image} alt={`${project.title} preview`} /> :
            <div className="preview-placeholder"><div className="placeholder-orbit" /><div className="placeholder-icon"><Code2 size={36} /></div><span>PROJECT PREVIEW</span><small>Replace with your project image</small></div>}
          <span className="project-number">0{i + 1}</span>
        </div>
        <div className="project-info"><div className="project-category">{project.category}</div><h3>{project.title}</h3><p>{project.description}</p>
          <div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
          <div className="project-links">{project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={14} /></a> : <span className="link-pending">Live demo coming soon</span>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer">Source <Github size={14} /></a>}</div>
        </div>
      </article>
    )}</div>
    <p className="projects-note"><span /> Project cards are ready to customized</p>
  </div></section>;
}

function Contact() {
  return <section className="section contact-section" id="contact"><div className="container">
    <div className="contact-panel"><div className="contact-glow" />
      <div className="contact-copy"><div className="eyebrow"><span className="eyebrow-dot" /> HAVE A PROJECT IN MIND?</div><h2>Let’s build<br />something <span>great.</span></h2><p>Open to full-time opportunities and freelance collaborations. Have an idea? I’d love to hear about it.</p><a className="button button-primary" href={`mailto:${email}`}>Start a conversation <ArrowUpRight size={17} /></a></div>
      <div className="contact-details">
        <a className="contact-row" href={`mailto:${email}`}><span className="contact-icon"><Mail size={19} /></span><div><small>EMAIL ME</small><strong>{email}</strong></div><ArrowUpRight size={16} /></a>
        <a className="contact-row" href={`tel:${phone}`}><span className="contact-icon"><Phone size={19} /></span><div><small>CALL ME</small><strong>{phone}</strong></div><ArrowUpRight size={16} /></a>
        <a className="contact-row" href={linkedin} target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={19} /></span><div><small>CONNECT ON</small><strong>LinkedIn</strong></div><ArrowUpRight size={16} /></a>
        <a className="contact-row" href={github} target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={19} /></span><div><small>EXPLORE CODE</small><strong>GitHub</strong></div><ArrowUpRight size={16} /></a>
      </div>
    </div>
  </div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner"><Brand /><p>Designed & built with curiosity <span>✳</span></p><span className="copyright">© {new Date().getFullYear()} Mahmoud Aburabeh</span></div></footer>;
}

export default function App() {
  return <><Header /><main><Hero /><About /><Skills /><Education /><Projects /><Contact /></main><Footer /></>;
}