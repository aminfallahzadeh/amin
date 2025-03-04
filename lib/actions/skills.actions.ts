"use server";

// IMPORTS
import { PrismaClient } from "@prisma/client";

// Get all skills
export async function getSkills() {
  const prisma = new PrismaClient();
  const data = await prisma.skill.findMany({
    orderBy: { createdAt: "desc" },
  });

  return data;
}
