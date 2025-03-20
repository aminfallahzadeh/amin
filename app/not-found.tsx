"use client";

// IMPORTS
import { House } from "lucide-react";
import { NotFoundIcon } from "@/assets/icons/NotFoundIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  // CONTENT
  const content = (
    <div className="flex flex-col justify-center items-center h-screen">
      <NotFoundIcon />

      <h1>Page not found!</h1>

      <Button asChild className="mt-5">
        <Link href={"/"}>
          <House /> Home
        </Link>
      </Button>
    </div>
  );

  return content;
};

export default NotFoundPage;
