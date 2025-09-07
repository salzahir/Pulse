import { randomUUID } from "crypto";
import prisma from './prisma';
import { MessageType } from '@prisma/client';

export const saveMessage = async(
    messageContent: string, 
    userId: string, 
    conversationId: string,
    timeStamp: number,
    receiverId?: string,
    messageType: MessageType = MessageType.TEXT
) => {
    const messageData = {
        id: randomUUID(),
        content: messageContent,
        messageType: messageType,
        senderId: userId,
        receiverId: receiverId,
        conversationId: conversationId,
        createdAt: new Date(timeStamp),
        updatedAt: new Date(timeStamp),
        isRead: false,
        isEdited: false,
    };

    return await prisma.message.create({
        data: messageData
    });
}

export const getMessages = async() => {
    return await prisma.message.findMany();
}

export const getMessagesByConversationId = async(conversationId: string) => {
    return await prisma.message.findMany({
        where: {
            conversationId: conversationId
        },
        orderBy: {
            createdAt: 'asc'
        }
    });
}

