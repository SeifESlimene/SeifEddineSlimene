import { Mail, Phone, Linkedin } from 'lucide-react'; // Added LinkedIn icon

export default function Contact() {
  return (
    <section id='contact' className='py-20 bg-white dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-center mb-12'>
          <span className='bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent'>
            Get In Touch
          </span>
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left side - "Let's Connect" with fixed width */}
          <div className='flex-1 border-r-2 border-gray-300 dark:border-gray-600 pr-8'>
            <h3 className='text-2xl font-semibold mb-6'>Let's Connect</h3>
            <p className='text-gray-600 dark:text-gray-300 mb-8'>
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>
          </div>

          {/* Right side - Contact info */}
          <div className='space-y-2'>
            {[
              {
                icon: <Mail />,
                label: 'Email',
                value: 's.slimene19@gmail.com',
                link: 'mailto:s.slimene19@gmail.com',
              },
              {
                icon: <Linkedin />,
                label: 'LinkedIn',
                value: 'Seifeslimene',
                link: 'https://www.linkedin.com/in/Seifeslimene/',
                target: '_blank',
              },
              {
                icon: <Phone />,
                label: 'Phone',
                value: '+216 53 891 387',
                link: 'tel:+21653891387',
              },
            ].map((item) => (
              <div key={item.label} className='flex items-center gap-4'>
                <div className='p-3 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-lg'>
                  {item.icon}
                </div>
                <div>
                  <div className='font-medium'>{item.label}</div>
                  <div className='text-gray-600 dark:text-gray-300'>
                    <a
                      href={item.link}
                      className='text-blue-600 dark:text-blue-400 hover:underline'
                      target={item.target}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
