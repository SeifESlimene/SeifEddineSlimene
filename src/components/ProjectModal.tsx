import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    images: string[]; // Changed from `image` to `images`
    achievements: string[];
    duration: string;
    height: string;
    position: string;
    longer_description: string;
    techStack: string[];
  } | null;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  if (!isOpen || !project) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-7xl p-6 relative max-h-screen overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
        >
          ✕
        </button>

        {/* Modal Content */}
        <div>
          {/* Image Carousel */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-xl mb-6"
          >
            {(project.images ?? []).map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Project Image ${index + 1}`}
                  style={{ height: project.height }}
                  className="rounded-xl w-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Main Section */}
          <div className="flex flex-col md:flex-row gap-6 pr-5 pl-5">
            {/* Left Section */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">
                {project.title ?? "Untitled Project"}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {project.longer_description}
              </p>

              <h3 className="text-lg font-semibold mb-3">Achievements/Tasks</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                {(project.achievements ?? []).map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>

            {/* Right Section */}
            <div className="w-auto bg-gray-100 dark:bg-gray-700 rounded-xl p-4 flex-shrink-0 self-start">
              <div className="mb-6">
                <h4 className="font-semibold mb-1 text-gray-700 dark:text-gray-200">
                  Duration
                </h4>
                <span className="inline-block px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600">
                  {project.duration ?? "N/A"}
                </span>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">
                  Tools
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {(project.techStack ?? []).map((tool, index) => (
                    <span
                      key={index}
                      className="inline-block px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
