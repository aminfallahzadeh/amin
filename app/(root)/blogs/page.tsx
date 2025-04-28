"use client";

// IMPORTS
import { House } from "lucide-react";
import { NotFoundIcon } from "@/assets/icons/NotFoundIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BlogsPage = () => {
  // CONTENT
  const content = (
    <div className="flex flex-col justify-center items-center h-screen pb-40">
      <NotFoundIcon />

      <h1>Page under development</h1>

      <Button asChild className="mt-5">
        <Link href={"/"}>
          <House /> Home
        </Link>
      </Button>
    </div>
  );

  return content;
};

export default BlogsPage;
