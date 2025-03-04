// IMPORTS
import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();
  await prisma.skill.deleteMany();

  await prisma.skill.createMany({
    data: sampleData.skills,
  });

  console.log("Database seeded successfully!");
}

main();
