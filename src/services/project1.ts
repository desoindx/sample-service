import axios from "axios";
import { prisma } from "./prisma";

export const getProject1ById = (id: string) =>
  prisma.project1.findFirst({ where: { id } });

export const createProject1 = async (id: string) => {
  const hubData = await axios.get<{
    name: string;
    description: string;
    ownerUserId: string;
  }>(`${process.env.HUB_URL}/api/projects/${id}`);
  return prisma.project1.create({
    data: {
      id,
      name: hubData.data.name,
      description: hubData.data.description,
      owner: hubData.data.ownerUserId,
      score1: Math.random() * 20,
      score2: Math.random() * 20,
      scoreTotal: Math.random() * 20,
    },
  });
};
