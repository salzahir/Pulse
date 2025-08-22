// socket.ts
import { WebSocketServer, WebSocket } from 'ws';
import type { IncomingMessage } from 'http';

export const wss = new WebSocketServer({ noServer: true });

export const setupWebSocket = () => {
  wss.on('connection', (ws: WebSocket, req: IncomingMessage) => {
    console.log('New WebSocket client connected');

    ws.on('message', (msg: WebSocket) => {
      console.log('Message received:', msg.toString());
      ws.send(`Server received: ${msg}`);
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });

    ws.send('Welcome to Pulse WebSocket!');
  });
}