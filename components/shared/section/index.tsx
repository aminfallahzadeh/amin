// IMPORTS
import { SectionProps } from "./types";
import { MoveRightIcon } from "lucide-react";

const Section = ({ title, children }: SectionProps) => {
  // CONTENT
  const content = (
    <section className="flex flex-col gap-y-2 border border-l-0 border-r-0 md:border-l md:border-r md:mx-20 p-5 md:rounded-md">
      {title && (
        <div className="flex justify-start items-center gap-x-2">
          <h1 className="inline-block text-[20px] italic">{title}</h1>
          <MoveRightIcon />
        </div>
      )}

      {children}
    </section>
  );

  return content;
};

export default Section;
