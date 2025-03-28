// IMPORTS
import { TitleSecondaryProps, TitlePrimaryProps } from "./types";
import { DotIcon } from "lucide-react";

export const Title = () => {
  return null;
};

Title.Primary = function Primary({ title }: TitlePrimaryProps) {
  return <h1>{title}</h1>;
};

Title.Secondary = function Secondary({ title }: TitleSecondaryProps) {
  return (
    <div className="flex items-start">
      <DotIcon className="shrink-0" />
      <h1 className="text-[15px]">{title}</h1>
    </div>
  );
};
