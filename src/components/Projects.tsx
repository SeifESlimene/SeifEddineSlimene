import { useState } from "react";
import { projects } from "./projectsData";
import { categories } from "./categoriesData";
import ProjectModal from "./ProjectModal";
import ProjectCard from "./ProjectCard";
import { Project, ProjectCategory } from "./projectsData";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-green-600 text-white"
                  : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              onClick={() => openModal(project)}
              animationDelay={`${index * 150}ms`}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
}
