// IMPORTS
import { getSkills } from "@/lib/actions/skills.actions";
import Image from "next/image";
import {
  MY_FULL_NAME,
  MY_INTRODUCTION_TITLE,
  MY_DESCRIPTION_TITLE,
} from "@/lib/constants";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default async function HomePage() {
  // FETCH DATA
  const skills = await getSkills();

  // DEBUG
  console.log(skills);

  // CONTENT
  const content = (
    <section className="flex justify-center items-center mt-20 border mx-20 p-5 rounded-md">
      <div className="flex flex-row justify-between items-center w-full">
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

          <div>
            <h1>{MY_INTRODUCTION_TITLE}</h1>

            <h3>{MY_DESCRIPTION_TITLE}</h3>
          </div>
        </div>
      </div>
    </section>
  );

  return content;
}
