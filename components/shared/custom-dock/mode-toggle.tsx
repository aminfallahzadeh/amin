"use client";

// IMPORTS
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ModeToggle = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & { className?: string }
>(({ className, ...props }, ref) => {
  // STATES
  const [mounted, setMounted] = useState(false);

  // CONSTS
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      ref={ref}
      variant="ghost"
      type="button"
      size="icon"
      className={cn("px-2", className)}
      aria-label="Toggle theme"
      onClick={() =>
        setTheme(
          theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
        )
      }
      {...props}
    >
      {theme === "light" ? (
        <SunIcon className="size-[1.2rem] text-neutral-800 dark:text-neutral-200" />
      ) : theme === "dark" ? (
        <MoonIcon className="size-[1.2rem] text-neutral-800 dark:text-neutral-200" />
      ) : (
        <SunMoon className="size-[1.2rem] text-neutral-800 dark:text-neutral-200" />
      )}
    </Button>
  );
});

ModeToggle.displayName = "ModeToggle";
