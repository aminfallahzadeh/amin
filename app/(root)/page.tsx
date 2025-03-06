// IMPORTS
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SkillCard } from "@/components/shared/SkillCard";
import {
  ArrowDownToLineIcon,
  BriefcaseIcon,
  MoveRightIcon,
  DotIcon,
} from "lucide-react";
import {
  MY_FULL_NAME,
  MY_INTRODUCTION_TITLE,
  MY_DESCRIPTION_TITLE,
  MY_ABOUT,
  ABOUT_TITLE,
  SKILLS_TITLE,
  LANGUAGES_TITLE,
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
      <section className="flex justify-center items-center mt-20 border border-l-0 border-r-0 md:border-l md:border-r md:mx-20 p-5 md:rounded-md">
        <div className="flex flex-col justify-center items-center gap-y-5 w-full md:flex-row md:justify-between">
          <div className="flex justify-center items-center gap-x-2">
            <div className="relative flex justify-center items-center">
              <div className="absolute w-[100px] h-[100px] bg-black dark:bg-white rounded-full blur-xl opacity-50 z-0" />
              <Image
                src={"/images/me.jpg"}
                width={100}
                height={100}
                alt={MY_FULL_NAME}
                className="rounded-full z-10"
                priority={true}
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-y-2 ml-5">
              <h1>{MY_INTRODUCTION_TITLE}</h1>
              <h3>{MY_DESCRIPTION_TITLE}</h3>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 justify-center items-center gap-x-2 lg:flex-row">
            <Button asChild>
              <a href={"/amin-fallahzadeh-cv.pdf"} download>
                <ArrowDownToLineIcon /> Download CV
              </a>
            </Button>

            <Button asChild>
              <Link
                href={"https://www.upwork.com/freelancers/~01c461191687568d25"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BriefcaseIcon /> Hire On UpWork
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="flex flex-col gap-y-2 border border-l-0 border-r-0 md:border-l md:border-r md:mx-20 p-5 md:rounded-md">
        {/* title */}
        <div className="flex justify-start items-center gap-x-2">
          <h1 className="inline-block text-[20px] italic">{ABOUT_TITLE}</h1>
          <MoveRightIcon />
        </div>

        {/* content */}
        <div className="flex items-start">
          <DotIcon className="shrink-0" />
          <p className="text-[15px]">{MY_ABOUT}</p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="flex flex-col gap-y-2 border border-l-0 border-r-0 md:border-l md:border-r md:mx-20 p-5 md:rounded-md">
        {/* title */}
        <div className="flex justify-start items-center gap-x-2">
          <h1 className="inline-block text-[20px] italic">{SKILLS_TITLE}</h1>
          <MoveRightIcon />
        </div>

        {/* content */}
        <div className="flex items-start">
          <DotIcon className="shrink-0" />
          <h1 className="text-[15px]">{LANGUAGES_TITLE}</h1>
        </div>

        <div className="flex gap-x-1">
          <SkillCard title={"JavaScript"} icon={"js"} />
        </div>
      </section>
    </div>
  );

  return content;
}
