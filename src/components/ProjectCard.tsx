import React from 'react';
import { Project } from './projectsData';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  animationDelay: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
  animationDelay,
}) => {
  return (
    <div
      onClick={onClick}
      className='group bg-white dark:bg-gray-700 rounded-xl pt-5 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in'
      style={{ animationDelay }}
    >
      <div className='relative h-48 overflow-hidden'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-full object-contain transition-transform duration-300 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
        <p className='text-gray-600 dark:text-gray-300 mb-4'>
          {project.description}
        </p>

        {/* USED TECH */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className='px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full'
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className='px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full'>
              ...
            </span>
          )}
        </div>

        {/* GitHub Link */}
        <div className='flex gap-4'>
          {project?.githubLink ? (
            <a
              href={project.githubLink}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-3 text-blue-600 dark:text-blue-400 hover:text-green-700 dark:hover:text-green-300'
            >
              <Github className='w-4 h-4' />
              Code
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
