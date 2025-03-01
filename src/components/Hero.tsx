import { Linkedin, FileText, Github } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 "
      title="GitHub"
    >
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="relative z-10 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Hi, I'm Slimene Seif Eddine
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-900 dark:text-gray-300">
            Full Stack Developer specializing in building exceptional digital
            experiences
          </p>
          <div className="flex gap-4 mb-8">
            <a
              href="#contact"
              className="relative z-10 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Me
            </a>
            <a
              href="cv/CV_Seif_Eddine_Slimene.pdf"
              download
              className="relative z-10 px-6 py-3 border-2 border-blue-600 text-white dark:text-purple-400 rounded-lg dark:hover:bg-purple-900/20 transition-colors"
            >
              Download CV
            </a>
          </div>
          <div className="flex gap-4 relative z-10 ">
            <a
              href="https://github.com/SeifESlimene"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              title={"GitHub"}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/SeifESlimene/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              title={"LinkedIn"}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="cv/CV_Seif_Eddine_Slimene.pdf"
              download
              className="social-link"
              title={"Download CV"}
            >
              <FileText className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative">
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                src="images/my_photo.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-blue-600/40 rounded-full z-0" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/80 to-green-600/20 rounded-full z-0" />
        </div>
      </div>
    </section>
  );
}
