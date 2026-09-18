import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState(null);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-surface-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading
          index="03"
          label="Projects"
          title="Selected Projects"
          description="A collection of practical projects that reflect my journey of learning, building, and solving real-world problems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} featured />
          ))}
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
