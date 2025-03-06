"use client";

// IMPORTS
import GridLoader from "react-spinners/GridLoader";
import { useTheme } from "next-themes";

const LoadingPage = () => {
  // CONSTS
  const { resolvedTheme } = useTheme();

  // CONTENT
  const content = (
    <div className="flex justify-center items-center h-screen">
      <GridLoader color={resolvedTheme === "dark" ? "white" : "black"} />
    </div>
  );

  return content;
};

export default LoadingPage;
