import axios from "axios";
import { prisma } from "./prisma";

export const getProject2ById = (id: string) =>
  prisma.project2.findFirst({ where: { id } });

export const createProject2 = async (id: string) => {
  const hubData = await axios.get<{
    name: string;
    description: string;
    owner: string;
  }>(`${process.env.HUB_URL}/api/projects/${id}`);
  return prisma.project2.create({
    data: {
      id,
      name: hubData.data.name,
      description: hubData.data.description,
      owner: hubData.data.owner,
      person: Math.random() * 10000000 + 10000000,
      saved: Math.random() * 10000000 + 10000000,
    },
  });
};
