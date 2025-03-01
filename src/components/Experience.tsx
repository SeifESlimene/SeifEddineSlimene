export default function Experience() {
  const educationData = [
    {
      year: '2012 – 2016',
      title: 'Applied License In Computer Networks',
      description:
        "ISITCOM - Instiut Supérieur D'informatique et des Techniques de Communication de Hammam Sousse",
    },
    {
      year: '2010 – 2012',
      title: 'National Engineering Entrance Exam',
      description:
        'IPEIT - Institut Préparatoire aux Etudes d’Ingénieur de Tunis',
    },
    {
      year: '2009 - 2010',
      title: 'Baccalauréat in Computer Science',
      description: 'Secondary School 2 Mars 1934 Ksar Hellal',
    },
  ];

  const experienceData = [
    {
      year: 'Jan 2021 – Present',
      title: 'Frontend Developer | Freelancer',
      description:
        'Led the development of innovative user-focused features, significantly boosting user engagement and satisfaction through detailed analysis of user behavior.',
    },
    {
      year: 'Dec 2019 - Jan 2021',
      title: 'Fullstack JS Developer | Independant Freelancer',
      description:
        'Led numerous projects with a diverse range of clients, significantly contributing to each.',
    },
    {
      year: 'Jun 2017 - Nov 2019',
      title: 'Functional ERP Administrator - La Soie S.A.R.L.',
      description:
        'Took a proactive role in the seamless integration of innovative features into the ERP system, leveraging a wide range of APIs with proficiency.',
    },
  ];

  return (
    <section className='py-20 bg-white dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Education Section */}
          <div>
            <h2 className='text-4xl font-bold text-center mb-12'>
              <span className='bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent'>
                Education
              </span>
            </h2>
            <div className='space-y-6'>
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in delay-${index}`}
                >
                  <h4 className='text-lg font-semibold text-gray-700 dark:text-white'>
                    {edu.year}
                  </h4>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-gray-200'>
                    {edu.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400'>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className='text-4xl font-bold text-center mb-12'>
              <span className='bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent'>
                Experience
              </span>
            </h2>
            <div className='space-y-6'>
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in delay-${index}`}
                >
                  <h4 className='text-lg font-semibold text-gray-700 dark:text-white'>
                    {exp.year}
                  </h4>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-gray-200'>
                    {exp.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400'>
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
