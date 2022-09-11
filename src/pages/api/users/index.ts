// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient, User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import * as bcrypt from "bcrypt";

type Data = {
  data?: any | any[];
  message?: string;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(
    typeof req.body === "string" ? req.body : JSON.stringify(req.body)
  );

  switch (req.method) {
    case "GET":
      break;
    case "POST":
      const { email, password, name } = body;

      const exists = await prisma.user.findFirst({
        where: {
          email,
        },
      });

      if (exists)
        return res.status(409).json({
          message: "Email não disponível.",
        });

      const hashedPassword = await bcrypt.hash(password, 10);

      const { password: pwd, ...user } = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
        },
      });

      return res.status(201).json({
        data: user,
        message: "Usuário criado com sucesso!",
      });
    default:
      res.status(500).json({
        message: "Metodo não permitido.",
      });
  }
}
