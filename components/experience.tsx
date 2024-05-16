"use client"

import "react-vertical-timeline-component/style.min.css"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

import SectionHeading from "@/components/section-heading"
import { useTheme } from "@/context/theme-context"
import { experiencesData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import clsx from "clsx"
import { Fragment } from "react"

export default function Experience() {
  const { ref } = useSectionInView("Experience")
  const { theme } = useTheme()
  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 scroll-mt-28 sm:mb-40 font-poppins"
    >
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "center",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              dateClassName={clsx(
                index % 2 === 0 ? "text-left" : "text-right",
                "!float-none"
              )}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "rgba(29, 36, 50, 1)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-0 font-normal">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-800 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
