import "./App.css";
import Porfile from "./assets/Photo.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/react-chat.png"; 
import LinkedIn from "./assets/linkedin.svg";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    setScrolling(window.scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="max-w-4xl m-auto relative">
      <header
        className={`${
          scrolling ? "border-b border-gray-900" : ""
        } fixed left-0 right-0 top-0 z-20`}
        id="home"
      >
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Ravi Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer">
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm Ravi,</h2>
              <h2 className="font-bold text-4xl mt-1 gradiant-text">frontend developer</h2>
              <p className="mt-4 text-gray-400">
                Proficient in HTML, CSS, and JavaScript, with experience using frameworks like React and Bootstrap to create responsive and interactive user interfaces.
              </p>
              <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                <a href="https://drive.google.com/file/d/1oSWebWgAkFs9VKtS1_rItAjP46M35a7f/view?usp=drive_linknpm" download="resume.pdf">
                  Download resume
                </a>
              </button>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" alt="Project 1" />
                <h3 className="text-2xl font-semibold mt-8">Shoes Store</h3>
                <p className="text-gray-400 text-sm mt-2">Developed responsive website using HTML, CSS, JavaScript.</p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/Max737jdhd/shoes-website">Checkout GitHub</a>
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-auto" alt="Project 2" />
                <h3 className="text-2xl font-semibold mt-8">Portfolio for Front-End Developer</h3>
                <p className="text-gray-400 text-sm mt-2">Responsive layout for landing page using HTML5 and Tailwind CSS.</p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/Max737jdhd/portfoliopage">Checkout GitHub</a>
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-auto" alt="Project 3" />
                <h3 className="text-2xl font-semibold mt-8">React Chat App</h3>
                <p className="text-gray-400 text-sm mt-2">Developed responsive website using HTML, CSS, React.js.</p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://chatappbymax.netlify.app/">Live preview</a>
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/Max737jdhd/chatapp">Checkout GitHub</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technologies Section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              {/* Skills List */}
              {["HTML", "CSS", "C", "JavaScript", "React"].map((tech, index) => (
                <div key={index} className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">{tech}</h2>
                    <p className="text-gray-500">
                      {tech === "React" ? "Intermediate" : "Advanced"}
                    </p>
                  </div>
                  <span className={`w-[${tech === "React" ? "70%" : "95%"}] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md`} />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Additional Skills Section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">Additional Technologies and Skills</h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              {["Git", "WordPress", "Teamwork"].map((skill, index) => (
                <div key={index}>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* About Me Section */}
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="flex flex-col sm:flex-row gap-8 mt-14">
              <div>
                <img src={Porfile} className="w-full h-auto rounded-full sm:w-60" alt="Profile" />
              </div>
              <div className="sm:w-[80%]">
                <p className="text-gray-400">
                  I am a passionate frontend developer with a knack for building functional and visually appealing web applications. I enjoy working on projects that require both creativity and technical skills, and I strive to learn new technologies to stay updated in the fast-paced web development world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
