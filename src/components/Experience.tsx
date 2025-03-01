export default function Experience() {
  const educationData = [
    {
      year: "2021 – Present",
      title: "Engineering Cycle in Computer Science ",
      description: "Institut Supérieur Privé d’Ingénierie de Monastir - ESPRIM",
    },
    {
      year: "2019 – 2021",
      title: "Bachelor’s Degree in Management Informatics",
      description:
        "Institut Supérieur de Gestion de Sousse - Université de Sousse",
    },
    {
      year: "2017 – 2019",
      title: "Baccalauréat in Computer Science ",
      description: "High School of Sayada",
    },
  ];

  const experienceData = [
    {
      year: "2021 – Present",
      title: "Private Tutoring",
      description:
        "Teaching computer science to high school students with a personalized approach, resulting in improved performance for 65% of students.",
    },
    {
      year: "2019 – 2021",
      title: "Technician Internship | Mobelite Tunisie",
      description:
        "Developed a task management web application (AGTIA) using the MERN stack (React.js, Node.js, Express.js, MongoDB) with a microservices architecture focused on modularity and data efficiency.",
    },
    {
      year: "2017 – 2019",
      title: "Summer Internship | PSZ Tunisie",
      description:
        "Contributed to the development of features for a web application using C# .NET and Angular, participating in team meetings and code reviews.",
    },
    {
      year: "September 2023 – November 20233",
      title: "Freelance | Seamaster Project ",
      description:
        "Designed a desktop application for trawler management and invoicing using Python and SQLite3, reducing processing time by 60%.",
    },
    {
      year: "JMarch 2022 – June 2022",
      title: "Final-Year Internship | Infolib",
      description:
        "Developed the 'RAPIDO' application for delivery management using Python and Flutter, significantly reducing order processing time.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in delay-${index}`}
                >
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-white">
                  {edu.year}
                  </h4>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
                  {edu.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                  {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in delay-${index}`}
                >
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-white">
                    {exp.year}
                  </h4>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
