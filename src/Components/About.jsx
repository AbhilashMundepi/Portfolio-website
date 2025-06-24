import '../Styles/About.css';

export default function About() {
    return (
        <section className="about-section" id="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                        Hi! I'm <strong>Abhilash</strong>, a passionate and detail-oriented <strong>Full Stack Developer</strong> with hands-on experience in building scalable web applications using the <strong>MERN stack</strong>. I enjoy transforming complex problems into simple, beautiful, and intuitive solutions.
                    </p>
                    <p>
                        I have a strong foundation in JavaScript, React, Node.js, and MongoDB, and I love learning new technologies that help me build better, faster, and more efficient products.
                    </p>
                    <p>
                        Beyond coding, I’m curious about system design, developer tools, and contributing to open-source projects. I also love collaborating on side projects that aim to create real-world impact.
                    </p>

                    <ul className="about-highlights">
                        <li>🚀 Always eager to learn and explore new technologies</li>
                        <li>🤝 Strong believer in teamwork and community-driven development</li>
                        <li>🎯 Focused on clean code, performance, and accessibility</li>
                    </ul>

                    <a href="../public/updatedResume.pdf" className="btn" target="_blank" rel="noopener noreferrer" download>
                        📄 Download Resume
                    </a>
                </div>

                {/* Optional image section */}
                {/* <div className="about-image">
                    <img src="/images/Abhilash.jpg" alt="Abhilash's profile" />
                </div> */}
            </div>
        </section>
    );
}
