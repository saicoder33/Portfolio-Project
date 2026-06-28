import React, { useState } from "react";
import portfolio from "./assets/portfolio-image.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#061b24] min-h-screen">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 z-50 w-full bg-[#061b24]/70 backdrop-blur-md px-6 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">
              Port<span className="text-cyan-400">folio</span>
            </h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8">
              <li>
                <a href="#hero" className="text-white hover:text-cyan-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-cyan-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white hover:text-cyan-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>

            {/* Mobile Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white text-3xl"
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="md:hidden mt-6 flex flex-col gap-5 bg-[#061b24] border border-cyan-400/20 rounded-xl p-5">
              <li>
                <a
                  onClick={() => setMenuOpen(false)}
                  href="#hero"
                  className="text-white hover:text-cyan-400 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => setMenuOpen(false)}
                  href="#about"
                  className="text-white hover:text-cyan-400 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => setMenuOpen(false)}
                  href="#projects"
                  className="text-white hover:text-cyan-400 transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={() => setMenuOpen(false)}
                  href="#contact"
                  className="text-white hover:text-cyan-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-24 px-10 pt-28"
        >
          <div className="relative w-80 h-80 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-30"></div>

            <div className="relative w-80 h-80 rounded-full bg-cyan-500 overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.7)]">
              <img
                src={portfolio}
                alt="Sai Dighe"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute w-[360px] h-[290px] border-2 border-cyan-300 rounded-[50%] rotate-[-35deg]"></div>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-white text-lg">Hello I'm</p>

            <h1 className="text-5xl md:text-6xl font-bold text-white mt-2">
              Sai Dighe
            </h1>

            <h2 className="text-2xl text-white mt-4">
              And I'm a{" "}
              <span className="text-cyan-400 font-semibold">
                Frontend Developer
              </span>
            </h2>

            <p className="text-gray-300 mt-6 leading-8 max-w-lg">
              I create beautiful, modern, responsive websites using React,
              Tailwind CSS, and other cutting-edge technologies. I also design
              intuitive UI/UX experiences in Figma and enjoy building web
              applications that are visually appealing and user-friendly.
            </p>

            <a
              href="https://www.linkedin.com/in/sai-dighe-178337387"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-8 bg-cyan-400 hover:bg-cyan-500 transition px-6 py-3 rounded-lg text-white font-semibold shadow-lg">
                LinkedIn Profile
              </button>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen px-8 py-20">
          <h2 className="text-5xl font-bold text-white text-center mb-16">
            About Me
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
            <div className="relative w-80 h-80 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-30"></div>

              <div className="relative w-56 h-56 rounded-full bg-cyan-500 overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.7)]">
                <img
                  src={portfolio}
                  alt="Sai Dighe"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="absolute w-[220px] h-[260px] border-2 border-cyan-300 rounded-[50%] rotate-[-35deg]"></div>
            </div>

            <div className="max-w-xl">
              <p className="text-gray-300 text-lg leading-8">
                I am a{" "}
                <span className="text-cyan-400">
                  Computer and IOT Engineering
                </span>{" "}
                Diploma student in 2nd year with a strong interest in web
                development, IOT and design. I am a passionate{" "}
                <span className="text-cyan-400">Frontend Developer</span> who
                enjoys building clean, modern, and responsive web applications.
                I work with React, JavaScript, Tailwind CSS, and Figma to create
                user-friendly interfaces. I have also learned Python and AI.
                <br />
                <br />I love turning ideas into beautiful digital experiences
                and continuously improving my development skills through real
                projects. I am currently learning the{" "}
                <span className="text-cyan-400">MERN stack</span> and exploring
                new technologies to enhance my skill set.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            {[
              ["IoT Skills", "95%"],
              ["React Development Skills", "90%"],
              ["Tailwind CSS Skills", "100%"],
              ["JavaScript Skills", "90%"],
              ["MERN Stack", "20%"],
              ["GitHub Skills", "98%"],
            ].map(([skill, percent]) => (
              <div className="mt-6" key={skill}>
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold text-white">{skill}</h3>
                  <span className="text-white">{percent}</span>
                </div>

                <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
                  <div
                    className="h-2 bg-cyan-400 rounded-full"
                    style={{ width: percent }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen px-8 py-20">
          <div>
            <h1 className="text-3xl font-bold text-white">
              My <span className="text-cyan-400">Projects</span>
            </h1>
            <h3 className="text-lg font-bold text-white mt-4">
              Here's the projects I have worked on:
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
            <div className="bg-[#0f1e27] p-6 rounded-lg shadow-lg hover:shadow-cyan-400 transition">
              <h4 className="text-xl font-bold text-white">Travel Log App</h4>
              <p className="text-gray-300 mt-2">
                I have created this application using React and Tailwind CSS. It
                helps people log their travel experiences and add todos in it.
              </p>
              <a
                href="https://travel-log-sooty-delta.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                View Project
              </a>
            </div>

            <div className="bg-[#0f1e27] p-6 rounded-lg shadow-lg hover:shadow-cyan-400 transition">
              <h4 className="text-xl font-bold text-white">
                Space Exploration Website
              </h4>
              <p className="text-gray-300 mt-2">
                I have created this application using simple HTML and CSS. It
                helps people explore different aspects of space.
              </p>
              <a
                href="https://space-exploration-chi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                View Project
              </a>
            </div>

            <div className="bg-[#0f1e27] p-6 rounded-lg shadow-lg hover:shadow-cyan-400 transition">
              <h4 className="text-xl font-bold text-white">
                Travel Agency UI Design
              </h4>
              <p className="text-gray-300 mt-2">
                I have created the sample UI design for travel agency using
                Figma.
              </p>
              <a
                href="https://www.figma.com/proto/gNJBJy9ndIVKo5joIpRhpn/sample?node-id=1-3&p=f&viewport=156%2C25%2C0.73&t=ZTc1QaKTmKURXJfk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                View Project
              </a>
            </div>

            <div className="bg-[#0f1e27] p-6 rounded-lg shadow-lg hover:shadow-cyan-400 transition">
              <h4 className="text-xl font-bold text-white">
                Growth UI Design
              </h4>
              <p className="text-gray-300 mt-2">
                I have created the sample UI design for a Growth application
                using Figma.
              </p>
              <a
                href="https://www.figma.com/proto/gNJBJy9ndIVKo5joIpRhpn/sample?node-id=1-3&p=f&viewport=156%2C25%2C0.73&t=ZTc1QaKTmKURXJfk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                View Project
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center px-8 py-20"
        >
          <div className="w-full max-w-5xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Get In <span className="text-cyan-400">Touch</span>
              </h1>
              <p className="text-gray-300 mt-4">
                Have a project idea, question, or opportunity? Feel free to
                reach out.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 border border-cyan-400/30 rounded-2xl p-8 backdrop-blur-md shadow-lg shadow-cyan-500/10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  <div>
                    <p className="text-cyan-400 font-semibold">Email</p>
                    <p className="text-gray-300">saidighe731@gmail.com</p>
                  </div>

                  <div>
                    <p className="text-cyan-400 font-semibold">Phone</p>
                    <p className="text-gray-300">8830487062</p>
                  </div>

                  <div>
                    <p className="text-cyan-400 font-semibold">Location</p>
                    <p className="text-gray-300">
                      Pune, Maharashtra, India
                    </p>
                  </div>

                  <div>
                    <p className="text-cyan-400 font-semibold">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/sai-dighe-178337387"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition"
                    >
                      linkedin.com/in/sai-dighe-178337387
                    </a>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold">GitHub username:-saicoder33</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;