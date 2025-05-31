import { useState } from "react";
import ProjectFilters from "./ProjectFilters/ProjectFilters";
import ProjectCard from "./ProjectCard/ProjectCard";
import SubmissionForm from "./SubmissionForm/SubmissionForm";

const Projects = () => {
  const [isSubmissionFormOpen, setIsSubmissionFormOpen] = useState(false);

  return (
    <div className="bg-gray-50 font-sans">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">CLUSTER Projects</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore innovative projects by KU CSE students, from AI to IoT and beyond.
          </p>
          <button
            onClick={() => setIsSubmissionFormOpen(true)}
            className="mt-6 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
          >
            Submit a Project
          </button>
        </div>
      </section>
      <ProjectFilters />
      <ProjectCard />
      {isSubmissionFormOpen && (
        <SubmissionForm onClose={() => setIsSubmissionFormOpen(false)} />
      )}
    </div>
  );
};

export default Projects;