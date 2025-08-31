import { Message } from './message';

export interface User {
  id: string;
  email: string;
  name: string;
  username: string;
  password: string;
  avatar?: string;
  bio?: string;
  isOnline: boolean;
  lastSeen: Date;
  createdAt: Date;
  updatedAt: Date;

  // Optional relation fields
  sentMessages?: Message[];
  receivedMessages?: Message[];
//   conversations?: ConversationParticipant[];
//   sentFriendRequests?: Friendship[];
//   receivedFriendRequests?: Friendship[];
}