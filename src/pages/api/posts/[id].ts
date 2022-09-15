// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

type Data = {
  data?: any | any[];
  message?: string;
};

const prisma = new PrismaClient();

export default async function postHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const token = await getToken({ req });

  if (!token) {
    return res.status(401).json({
      message: `Não Autorizado.`,
    });
  }

  switch (req.method) {
    case "GET":
      try {
        const id = req.query.id;
        const post = await prisma.post.findFirst({
          where: {
            id: `${id}`,
          },
          include: {
            author: true,
          },
        });

        return res.status(200).json({
          data: post,
          message: `Publicação encontrada`,
        });
      } catch (err: any) {
        return res.status(400).json({
          message: "Erro ao buscar publicação.",
        });
      }
    case "DELETE":
      try {
        const id = req.query.id;
        await prisma.post.delete({
          where: {
            id: `${id}`,
          },
          include: {
            author: true,
          },
        });

        return res.status(200).json({
          message: `Publicação ${id} deletada com sucesso.`,
        });
      } catch (err: any) {
        return res.status(400).json({
          message: "Erro ao deletar publicação.",
        });
      }
    default:
      return res.status(500).json({
        message: "Metodo não permitido.",
      });
  }
}
