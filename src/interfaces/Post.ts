import { Prisma, Post } from "@prisma/client";

export interface PostWithAuthor
  extends Prisma.PostGetPayload<{ include: { author: true } }> {}
