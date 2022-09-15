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

  switch (req.method) {
    case "GET":
      try {
        const posts = await prisma.post.findMany({
          include: {
            author: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        });

        return res.status(200).json({
          data: posts,
          message: `${posts.length} encontrados`,
        });
      } catch (err: any) {
        return res.status(400).json({
          message: "Erro ao buscar publicações.",
        });
      }
    case "POST":
      try {
        if (!token || !token.email)
          return res.status(401).json({
            message: "Não autorizado.",
          });

        const body = JSON.parse(
          typeof req.body === "string" ? req.body : JSON.stringify(req.body)
        );

        const created = await prisma.post.create({
          data: {
            title: body.title,
            description: body?.description,
            stars: body?.stars,
            author: {
              connect: {
                email: token.email,
              },
            },
          },
        });

        return res.status(201).json({
          data: created,
          message: "Publicação criada com sucesso!",
        });
      } catch (err: any) {
        console.log(err.message);
        return res.status(400).json({
          message: "Erro ao criar publicação.",
        });
      }
    default:
      return res.status(500).json({
        message: "Metodo não permitido.",
      });
  }
}
