import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center p-0">
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
            <span className="font-semibold text-indigo-300">Flutter</span>
            {" (Dart), and I also leverage "}
            <span className="font-semibold text-indigo-300">FlutterFlow</span>{" "}
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
            <a
              href="https://half-fontina-300.notion.site/Sweet-home-24-20d5533d00e580b69900e2855959b846?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-indigo-500 rounded-xl p-5 shadow hover:scale-105 hover:shadow-xl transition-transform flex flex-col gap-3"
            >
              <Image
                src="/sweet-home-24.png"
                alt="Sweet Home 24 Screenshot"
                width={600}
                height={160}
                className="rounded-lg w-full h-40 object-cover border border-indigo-900 mb-2"
              />
              <span className="font-semibold text-lg text-indigo-200 group-hover:text-white transition-colors">
                Sweet Home 24
              </span>
              <span className="text-gray-300 text-sm">
                A Notion project showcasing my design and organization skills.
              </span>
            </a>
            <a
              href="https://half-fontina-300.notion.site/Dash_Board-2023-cc3e1c57c4524c86b8d3d738288e36d5?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-indigo-500 rounded-xl p-5 shadow hover:scale-105 hover:shadow-xl transition-transform flex flex-col gap-3"
            >
              <Image
                src="/dash-board-2023.png"
                alt="Dash Board 2023 Screenshot"
                width={600}
                height={160}
                className="rounded-lg w-full h-40 object-cover border border-indigo-900 mb-2"
              />
              <span className="font-semibold text-lg text-indigo-200 group-hover:text-white transition-colors">
                Dash Board 2023
              </span>
              <span className="text-gray-300 text-sm">
                A Notion dashboard project for productivity and organization.
              </span>
            </a>
            <a
              href="https://half-fontina-300.notion.site/HomePage-b51fefe227ef4430ac892d142876fb87?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-indigo-500 rounded-xl p-5 shadow hover:scale-105 hover:shadow-xl transition-transform flex flex-col gap-3"
            >
              <Image
                src="/home-page.png"
                alt="HomePage Screenshot"
                width={600}
                height={160}
                className="rounded-lg w-full h-40 object-cover border border-indigo-900 mb-2"
              />
              <span className="font-semibold text-lg text-indigo-200 group-hover:text-white transition-colors">
                HomePage
              </span>
              <span className="text-gray-300 text-sm">
                A Notion homepage template for personal or project use.
              </span>
            </a>
            <a
              href="https://half-fontina-300.notion.site/HomePage-2023-fa2fdd6ecf31478b8957935c34ad9cab?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-indigo-500 rounded-xl p-5 shadow hover:scale-105 hover:shadow-xl transition-transform flex flex-col gap-3"
            >
              <Image
                src="/home-page-2023.png"
                alt="HomePage 2023 Screenshot"
                width={600}
                height={160}
                className="rounded-lg w-full h-40 object-cover border border-indigo-900 mb-2"
              />
              <span className="font-semibold text-lg text-indigo-200 group-hover:text-white transition-colors">
                HomePage 2023
              </span>
              <span className="text-gray-300 text-sm">
                A modern Notion homepage for 2023 projects and tasks.
              </span>
            </a>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-5 shadow flex flex-col gap-2 opacity-60 cursor-not-allowed">
              <span className="font-semibold text-lg text-indigo-300">
                More Projects Coming Soon...
              </span>
              <span className="text-gray-400 text-sm">
                Stay tuned for more Notion and web projects!
              </span>
            </div>
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
    </div>
  );
}
