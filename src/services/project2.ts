import { prisma } from "./prisma";

export const getProject2ById = (id: string) =>
  prisma.project2.findFirst({ where: { id } });
