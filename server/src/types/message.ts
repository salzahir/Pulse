export type MessageType = 'TEXT' | 'IMAGE' | 'VIDEO' | 'FILE'; // expand as needed

export interface Message {
  id: string;
  content: string;
  messageType: MessageType;
  imageUrl?: string;
  senderId: string;
  receiverId?: string;
  conversationId: string;
  isRead: boolean;
  isEdited: boolean;
  createdAt: Date;
  updatedAt: Date;

//   // Optional relation fields (depending on how you hydrate the object)
//   sender?: User | null;
//   receiver?: User | null;
//   conversation?: Conversation | null;
}