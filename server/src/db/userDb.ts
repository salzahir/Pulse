import prisma from "./prisma";

export const postFakeUser = async () => {
  return await prisma.user.create({
    data: {
      id: 'test-user-id',
      email: 'test@example.com',
      name: 'Test User',
      username: 'testuser',
      password: 'password123'
    }
  });
};

postFakeUser()
  .then(() => {
    console.log("✅ Fake user inserted");
  })
  .catch((err) => {
    console.error("❌ Failed to insert fake user:", err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });