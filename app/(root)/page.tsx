// IMPORTS
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SkillCard } from "@/components/shared/skill-card";
import { skillsData } from "@/db/skills";
import { SkillIconsType } from "@/types/Icon";
import { ProjectCard } from "@/components/shared/project-card";
import { ProjectType } from "@/types/project";
import { projectsData } from "@/db/projects";
import Section from "@/components/shared/section";
import { ArrowDownToLineIcon, BriefcaseIcon } from "lucide-react";
import { Title } from "@/components/shared/title";
import {
  MY_FULL_NAME,
  MY_INTRODUCTION_TITLE,
  MY_DESCRIPTION_TITLE,
  MY_ABOUT,
  ABOUT_TITLE,
  SKILLS_TITLE,
  LANGUAGES_TITLE,
  FRONT_TITLE,
  TOOLS_TITLE,
  PROJECTS_TITLE,
} from "@/lib/constants";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  // CONTENT
  const content = (
    <div className="flex flex-col gap-y-5">
      {/* HERO */}
      <Section>
        <div className="flex flex-row justify-center items-center gap-y-5 gap-x-5 w-full md:flex-row md:justify-between">
          <div className="flex justify-center items-center gap-x-2">
            <div className="relative flex justify-center items-center">
              <div className="absolute w-[100px] h-[100px] bg-black dark:bg-white rounded-full blur-xl opacity-50 z-0" />
              <Image
                src={"/images/me.jpg"}
                width={100}
                height={100}
                alt={MY_FULL_NAME}
                className="rounded-full z-10"
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-y-2 ml-5">
              <h1>{MY_INTRODUCTION_TITLE}</h1>
              <h3>{MY_DESCRIPTION_TITLE}</h3>
            </div>
          </div>

          <div className="flex flex-row gap-y-2 justify-center items-center gap-x-2">
            <Button asChild>
              <a href={"/amin-fallahzadeh-cv.pdf"} download>
                <ArrowDownToLineIcon />
                <span className="hidden md:block">Download CV</span>
              </a>
            </Button>

            <Button asChild>
              <Link
                href={"https://www.upwork.com/freelancers/~01c461191687568d25"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BriefcaseIcon />
                <span className="hidden md:block">Hire On UpWork</span>
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section title={ABOUT_TITLE}>
        <div className="flex items-start">
          <p className="text-[15px]">{MY_ABOUT}</p>
        </div>
      </Section>

      {/* SKILLS */}
      <Section title={SKILLS_TITLE}>
        <Title.Secondary title={LANGUAGES_TITLE} />

        <div className="flex gap-x-1 flex-wrap">
          {skillsData.languages.map((skill) => (
            <SkillCard
              key={skill.slug}
              title={skill.title}
              icon={skill.icon as SkillIconsType}
            />
          ))}
        </div>

        <Title.Secondary title={FRONT_TITLE} />

        <div className="flex gap-x-1 flex-wrap">
          {skillsData.front.map((skill) => (
            <SkillCard
              key={skill.slug}
              title={skill.title}
              icon={skill.icon as SkillIconsType}
            />
          ))}
        </div>

        <Title.Secondary title={TOOLS_TITLE} />

        <div className="flex gap-x-1 flex-wrap">
          {skillsData.tools.map((skill) => (
            <SkillCard
              key={skill.slug}
              title={skill.title}
              icon={skill.icon as SkillIconsType}
            />
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section title={PROJECTS_TITLE}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {projectsData.map((item: ProjectType, index: number) => (
            <ProjectCard key={index} item={item} />
          ))}
        </div>
      </Section>
    </div>
  );

  return content;
}
