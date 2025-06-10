"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import LaunchIcon from '@mui/icons-material/Launch';

export default function Home() {
  const [modalUrl, setModalUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeout = useRef();

  // Notion project URLs
  const projects = [
    {
      title: "Sweet Home 24",
      url: "https://half-fontina-300.notion.site/Sweet-home-24-20d5533d00e580b69900e2855959b846",
      img: "/sweet-home-24.png",
      desc: "A Notion project showcasing my design and organization skills.",
    },
    {
      title: "Dash Board 2023",
      url: "https://half-fontina-300.notion.site/Dash_Board-2023-cc3e1c57c4524c86b8d3d738288e36d5",
      img: "/dash-board-2023.png",
      desc: "A Notion dashboard project for productivity and organization.",
    },
    {
      title: "HomePage",
      url: "https://half-fontina-300.notion.site/HomePage-b51fefe227ef4430ac892d142876fb87",
      img: "/home-page.png",
      desc: "A Notion homepage template for personal or project use.",
    },
    {
      title: "HomePage 2023",
      url: "https://half-fontina-300.notion.site/HomePage-2023-fa2fdd6ecf31478b8957935c34ad9cab",
      img: "/home-page-2023.png",
      desc: "A modern Notion homepage for 2023 projects and tasks.",
    },
  ];

  // Open modal
  const openModal = (url) => {
    setModalUrl(url);
    setIsModalOpen(true);
    setIsClosing(false);
  };

  // Close modal (triggers animation)
  const closeModal = () => {
    setIsClosing(true);
    closeTimeout.current = setTimeout(() => {
      setIsModalOpen(false);
      setModalUrl(null);
      setIsClosing(false);
    }, 300); // match animation duration
  };

  // Esc key handler
  useEffect(() => {
    if (!isModalOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isModalOpen]);

  // Prevent background scroll when modal is open or animating
  useEffect(() => {
    if (isModalOpen || isClosing) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen, isClosing]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => clearTimeout(closeTimeout.current);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center p-0">
      {/* Modal */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${!isClosing ? 'animate-fadeIn' : 'animate-fadeOut'}`}
          style={{ pointerEvents: isClosing ? 'none' : 'auto' }}
          onClick={closeModal}
        >
          <div
            className={`bg-gray-900/90 shadow-lg border border-slate-800 rounded-2xl shadow-2xl p-4 max-w-4xl w-full relative flex flex-col items-center ${!isClosing ? 'scale-100 opacity-100 animate-modalIn' : 'scale-95 opacity-0 animate-modalOut'}`}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl font-bold"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <a
              href={modalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 left-2 text-indigo-400 hover:text-indigo-200"
              title="Open in new tab"
            >
              <LaunchIcon style={{ fontSize: 22 }} />
            </a>
            {/* Larger screenshot and message */}
            <div className="flex flex-col items-center mt-8">
              <Image
                src={projects.find(p => p.url === modalUrl)?.img || "/file.svg"}
                alt="Project Screenshot"
                width={819}
                height={460}
                className="rounded-xl w-full max-w-4xl h-[460px] object-cover border border-slate-900 mb-4 shadow-lg"
                priority
              />
              <p className="text-gray-300 text-center max-w-lg mb-2">
                Live preview is not available due to Notion's security settings. <br />
                You can view this project directly on Notion by clicking the icon above.
              </p>
            </div>
          </div>
        </div>
      )}
      <main className="flex flex-col gap-16 w-full max-w-5xl px-4 py-12">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-700 rounded-3xl shadow-2xl p-10 border border-gray-700">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-200 mb-2 drop-shadow-lg">
              Mahmuda Akter Lopa
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-indigo-400 mb-2">
              Flutter Developer & Designer
            </h2>
            <p className="text-lg text-gray-200 max-w-xl mb-4">
              I love crafting beautiful, user-friendly web experiences. Explore my
              projects, skills, and journey below!
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/Lopa1030"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white font-semibold shadow hover:bg-indigo-700 hover:text-white transition-colors border border-indigo-500"
              >
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85.004 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                  />
                </svg>
                GitHub
              </a>
              <a
                href="mailto:mahmuda.lopa@example.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-700 text-white font-semibold shadow hover:bg-indigo-800 transition-colors border border-indigo-500"
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.217l8 5.333 8-5.333V6.5a.5.5 0 0 0-.5-.5h-15Zm15 13a.5.5 0 0 0 .5-.5v-8.217l-7.5 5-7.5-5V17.5a.5.5 0 0 0 .5.5h15Z"
                  />
                </svg>
                Email
              </a>
            </div>
          </div>
          <Image
            src="https://avatars.githubusercontent.com/u/111636961"
            alt="Mahmuda Akter Lopa profile picture"
            width={140}
            height={140}
            className="rounded-full border-4 border-indigo-500 shadow-xl bg-white object-cover"
          />
        </section>

        {/* About Section */}
        <section className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-2xl shadow p-8 border border-gray-700 flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-indigo-200 mb-2">About Me</h3>
          <p className="text-gray-200 text-base">
            Hi! I'm Lopa, a web and mobile developer with a keen eye for design
            and a love for learning new technologies. My main focus is building
            cross-platform apps using{" "}
            <span className="font-semibold text-blue-500">Flutter</span>
            {" (Dart), and I also leverage "}
            <span className="font-semibold text-blue-500">FlutterFlow</span>{" "}
            for rapid prototyping and UI development. I enjoy turning ideas into
            reality through code and design. My goal is to create impactful
            digital experiences that delight users.
          </p>
        </section>

        {/* Skills Section */}
        <section className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow p-8 border border-gray-700 flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-indigo-200 mb-2">Skills</h3>
          <ul className="flex flex-wrap gap-3 mt-2">
            <li className="px-4 py-2 bg-indigo-700 text-white rounded-full font-medium shadow">
              Flutter
            </li>
            <li className="px-4 py-2 bg-indigo-600 text-white rounded-full font-medium shadow">
              Dart
            </li>
            <li className="px-4 py-2 bg-indigo-500 text-white rounded-full font-medium shadow">
              FlutterFlow
            </li>
            <li className="px-4 py-2 bg-indigo-400 text-white rounded-full font-medium shadow">
              React
            </li>
            <li className="px-4 py-2 bg-indigo-300 text-gray-900 rounded-full font-medium shadow">
              Next.js
            </li>
            <li className="px-4 py-2 bg-indigo-200 text-gray-900 rounded-full font-medium shadow">
              Tailwind CSS
            </li>
            <li className="px-4 py-2 bg-gray-700 text-indigo-200 rounded-full font-medium shadow">
              Figma
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="w-full bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl shadow p-8 border border-gray-700 flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-indigo-200 mb-2">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((proj) => (
              <div
                key={proj.title}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-indigo-500 rounded-xl p-5 shadow hover:scale-105 hover:shadow-xl transition-transform flex flex-col gap-3 cursor-pointer"
                onClick={() => openModal(proj.url)}
              >
                <Image
                  src={proj.img}
                  alt={proj.title + " Screenshot"}
                  width={600}
                  height={160}
                  className="rounded-lg w-full h-40 object-cover border border-indigo-900 mb-2"
                />
                <span className="font-semibold text-lg text-indigo-200 group-hover:text-white transition-colors">
                  {proj.title}
                </span>
                <span className="text-gray-300 text-sm">
                  {proj.desc}
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-indigo-400">
                    Click to preview in modal
                  </span>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-indigo-400 hover:text-indigo-200"
                    title="Open in new tab"
                    onClick={e => e.stopPropagation()}
                  >
                    <LaunchIcon style={{ fontSize: 16 }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow p-8 border border-gray-700 flex flex-col gap-4 items-center">
          <h3 className="text-2xl font-bold text-indigo-200 mb-2">
            Let's Connect!
          </h3>
          <p className="text-gray-200 text-base mb-2 text-center">
            Interested in collaborating or want to know more? Reach out via email
            or connect on GitHub!
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:mahmuda.lopa@example.com"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-indigo-700 text-white font-semibold shadow hover:bg-indigo-800 transition-colors border border-indigo-500"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.217l8 5.333 8-5.333V6.5a.5.5 0 0 0-.5-.5h-15Zm15 13a.5.5 0 0 0 .5-.5v-8.217l-7.5 5-7.5-5V17.5a.5.5 0 0 0 .5.5h15Z"
                />
              </svg>
              Email Me
            </a>
            <a
              href="https://github.com/Lopa1030"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-900 text-white font-semibold shadow hover:bg-indigo-700 hover:text-white transition-colors border border-indigo-500"
            >
              <svg
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85.004 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                />
              </svg>
              GitHub
            </a>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="w-full text-center text-xs text-gray-500 mt-12">
          &copy; {new Date().getFullYear()} Mahmuda Akter Lopa. All rights
          reserved.
        </footer>
      </main>

      {/* Add animation styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes modalOut {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.95); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-fadeOut {
          animation: fadeOut 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-modalIn {
          animation: modalIn 0.3s cubic-bezier(0.4,0,0.2,1);
          animation-fill-mode: forwards;
        }
        .animate-modalOut {
          animation: modalOut 0.3s cubic-bezier(0.4,0,0.2,1);
          animation-fill-mode: forwards;
        }
        /* Custom Scrollbar Styles */
        ::-webkit-scrollbar {
          width: 12px;
          background: #18181b;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #6366f1 30%, #312e81 100%);
          border-radius: 8px;
          border: 2px solid #18181b;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #818cf8 30%, #6366f1 100%);
        }
        ::-webkit-scrollbar-corner {
          background: #18181b;
        }
        /* Firefox */
        html {
          scrollbar-width: none;
          scrollbar-color: #6366f1 #18181b;
        }
      `}
      </style>
    </div>
  );
}
