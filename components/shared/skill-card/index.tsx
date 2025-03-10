"use client";

// IMPORTS
import { SkillIcons } from "@/assets/icons/SkillIcons";
import { SkillCardProps } from "./types";

export const SkillCard = ({ title, icon }: SkillCardProps) => {
  // CONSTS
  const IconComponent = SkillIcons[icon];

  if (!IconComponent) {
    return null;
  }

  return (
    <div className="group flex flex-col items-center justify-center gap-x-2 rounded-md px-2 py-1 shadow-gray-500/30 dark:shadow-gray-100/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-transparent">
      <IconComponent />

      <h5 className="opacity-0 translate-y-2 text-center cursor-default text-[12px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        {title}
      </h5>
    </div>
  );
};
