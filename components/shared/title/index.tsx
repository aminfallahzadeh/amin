// IMPORTS
import { TitleSecondaryProps } from "./types";
import { DotIcon } from "lucide-react";

export const Title = () => {
  return null;
};

Title.Secondary = function Secondary({ title }: TitleSecondaryProps) {
  return (
    <div className="flex items-start">
      <DotIcon className="shrink-0" />
      <h1 className="text-[15px]">{title}</h1>
    </div>
  );
};
