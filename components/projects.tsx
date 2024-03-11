"use client"

import Project from "@/components/project"
import SectionHeading from "@/components/section-heading"
import { projectsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import { Fragment } from "react"

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5)

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  )
}
