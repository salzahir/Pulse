// socket.ts
import { WebSocketServer, WebSocket } from 'ws';
import type { IncomingMessage } from 'http';
import { saveMessage } from './db/messageDb';

export const wss = new WebSocketServer({ noServer: true });

export const setupWebSocket = () => {
  wss.on('connection', (ws: WebSocket, req: IncomingMessage) => {
    console.log('New WebSocket client connected');

    ws.on('message', async (msg: Buffer) => {
      const timeStamp = Date.now();
      console.log('Message received:', msg.toString(), timeStamp.toString());
      const message = msg.toString();
      const savedMessage = await saveMessage(
        message,
        'test-user-id',
        'fake-conversation-id',
        timeStamp
      );
      console.log('Message saved to database' + savedMessage);
      ws.send(`Server received: ${msg}`);
    });

    ws.on('error', (err: Error) => {
      console.error('WebSocket error:', err);
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });

    ws.send('Welcome to Pulse WebSocket!');
  });
}