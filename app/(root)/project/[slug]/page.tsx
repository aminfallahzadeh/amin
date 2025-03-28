// IMPORTS
import { ProjectType, ExplanationItem } from "@/types/project";
import { projectsData } from "@/db/projects";
import { Section, SectionTitle } from "@/components/shared/section";
import Image from "next/image";

const ProjectDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  // CONSTS
  const { slug } = await props.params;
  const project = projectsData.find((item: ProjectType) => item.slug === slug);

  // CONTENT
  const content = (
    <div className="flex flex-col gap-y-5">
      <SectionTitle title={project?.title || ""} back home />
      {project?.explanations.map((item: ExplanationItem, index: number) => (
        <Section title={item.title} key={index}>
          <div className="flex flex-col gap-y-4 md:flex-row justify-center md:justify-between items-center">
            <div className="flex flex-col gap-y-2">
              {item.desc.map((desc: string, index: number) => (
                <div key={index} className="flex items-start gap-x-2 ml-5">
                  - <p className="text-sm">{desc}</p>
                </div>
              ))}
            </div>

            <div>
              <Image
                src={item.image || ""}
                alt={project?.title || ""}
                width={250}
                height={250}
                style={{
                  borderRadius: 5,
                  width: "auto",
                  height: "auto",
                }}
                className="rounded-md z-10"
                placeholder="blur"
                blurDataURL={item.image}
              />
            </div>
          </div>
        </Section>
      ))}
    </div>
  );

  return content;
};
export default ProjectDetailsPage;
