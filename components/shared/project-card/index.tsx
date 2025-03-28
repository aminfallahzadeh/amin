"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { ProjectType } from "@/types/project";
import { LEARN_MORE_BUTTON_TEXT } from "@/lib/constants";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ProjectCard = ({ item }: { item: ProjectType }) => {
  // STATES
  const [mounted, setMounted] = useState<boolean>(false);

  // CONSTS
  const { resolvedTheme } = useTheme();

  // EFFECTS
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Card>
      <Link href={`/project/${item.slug}`} className="rounded-[inherit]">
        <MagicCard
          gradientColor={resolvedTheme === "dark" ? "#262626" : "#92929255"}
          gradientFrom={resolvedTheme === "dark" ? "#fafafa" : "#000"}
          gradientTo={resolvedTheme === "dark" ? "#fff" : "#000"}
          gradientSize={120}
          className="h-full"
        >
          <CardHeader>
            <Image
              src={item.imgUrl}
              style={{
                borderRadius: 5,
                width: "auto",
                height: "auto",
              }}
              width={200}
              height={100}
              alt={item.title}
              placeholder="blur"
              blurDataURL={item.imgUrl}
            />
            <CardTitle>{item.title}</CardTitle>

            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="relative flex flex-row items-center h-full">
              <h1 className="group-hover:text-blue-400">
                {LEARN_MORE_BUTTON_TEXT}
              </h1>
              <ChevronRight
                size={18}
                className="group-hover:text-blue-400 transition-colors"
              />
              <div className="absolute -bottom-1 left-0 w-0 h-[2px] border-b-2 border-dashed border-black dark:border-white group-hover:w-full group-hover:border-blue-400 transition-all duration-300 ease-in-out" />
            </div>
          </CardFooter>
        </MagicCard>
      </Link>
    </Card>
  );
};
