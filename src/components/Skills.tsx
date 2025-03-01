import React from "react";
import { UserPlus, Laptop } from "lucide-react";
import {
  Code2,
  Database,
  Layout,
  Server,
  Smartphone,
  GitBranch
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
}

const skills: Skill[] = [
  {
    name: "Frontend Development",
    icon: <Layout />,
    level: 90,
    category: "Development",
  },
  {
    name: "Backend Development",
    icon: <Server />,
    level: 85,
    category: "Development",
  },
  {
    name: "Database Management",
    icon: <Database />,
    level: 80,
    category: "Development",
  },
  {
    name: "Mobile Development",
    icon: <Smartphone />,
    level: 75,
    category: "Development",
  },
  {
    name: "Version Control",
    icon: <GitBranch />,
    level: 95,
    category: "Tools",
  },
  {
    name: "Desktop Development",
    icon: <Laptop />,
    level: 70,
    category: "Tools",
  },

  {
    name: "Problem Solving",
    icon: <Code2 />,
    level: 90,
    category: "Soft Skills",
  },
  {
    name: "Leadership",
    icon: <UserPlus />,
    level: 90,
    category: "Soft Skills",
  },
];
export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-6 bg-white dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
