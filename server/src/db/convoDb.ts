import prisma from './prisma';

export const createFakeConversation = async () => {
  return await prisma.conversation.create({
    data: {
      id: 'fake-conversation-id',
      name: 'Test Chat',
      isGroup: false,
    }
  });
};

createFakeConversation()
  .then(() => {
    console.log("✅ Fake conversation inserted");
  })
  .catch((err) => {
    console.error("❌ Failed to insert fake conversation:", err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
