import server from '../app';

export async function getUserById(userId: number) {
  const user = await server.prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
}
