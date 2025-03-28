"use client";

// IMPORTS
import { SectionProps, SectionTitleProps } from "./types";
import { MoveRightIcon } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, House } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Section = ({ title, children }: SectionProps) => {
  // CONTENT
  const content = (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col gap-y-2 border border-l-0 border-r-0 md:border-l md:border-r md:mx-20 p-5 md:rounded-md border-gray-300 dark:border-gray-700"
    >
      {title && (
        <div className="flex justify-start items-center gap-x-2">
          <h1 className="inline-block text-[20px] italic">{title}</h1>
          <MoveRightIcon />
        </div>
      )}

      {children}
    </motion.section>
  );

  return content;
};

export const SectionTitle = ({
  title,
  back = true,
  home = true,
}: SectionTitleProps) => {
  // CONSTS
  const router = useRouter();

  // CONTENT
  const content = (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-row justify-between gap-y-2 border border-l-0 border-r-0 md:border-l md:border-r md:mx-20 p-5 md:rounded-md border-gray-300 dark:border-gray-700"
    >
      {back && (
        <Button size={"icon"} variant={"ghost"} onClick={() => router.back()}>
          <ArrowLeft />
        </Button>
      )}
      <h1 className="text-2xl font-extrabold text-center uppercase">{title}</h1>

      {home && (
        <Button size={"icon"} variant={"ghost"} asChild>
          <Link href="/">
            <House />
          </Link>
        </Button>
      )}
    </motion.section>
  );

  return content;
};
