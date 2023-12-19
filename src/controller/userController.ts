import { User } from "@prisma/client";
import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function userController(fastify: FastifyInstance) {
  // fastify.get("/user", async function (
  //   _request: FastifyRequest,
  //   reply: FastifyReply
  // ) {
  //   reply.send({
  //     balance: "$3,277.32",
  //     picture: "http://placehold.it/32x32",
  //     age: 30,
  //     name: "Leonor Cross",
  //     gender: "female",
  //     company: "GRONK",
  //     email: "leonorcross@gronk.com",
  //   });
  // });

  fastify.post("/user", async function (
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    const { body } = request;
    const { email, firstName, lastName} = body as User;
   
    await request.prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
      }
    })

    reply.send({
      email,
      firstName,
      lastName
    });
  })
}
