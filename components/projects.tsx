import { Fragment } from "react";
import { projectsData } from "@/lib/data";
import Project from "@/components/project";
import SectionHeading from "@/components/section-heading";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
