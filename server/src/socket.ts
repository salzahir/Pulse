// socket.ts
import { WebSocketServer, WebSocket } from 'ws';
import type { IncomingMessage } from 'http';
import { saveMessage } from './db/messageDb';

export const wss = new WebSocketServer({ noServer: true });

const _logMessage = async (ws: WebSocket, msg: Buffer, userID: string) => {

  const timeStamp = Date.now();
  console.log('Message received:', msg.toString(), timeStamp.toString());
  const message = msg.toString();
  const receiverID = userID === "Dexter Morgan" ? "Arthur Mitchell" : "Dexter Morgan";
  const savedMessage = await saveMessage(
    message,
    userID,
    'fake-conversation-id',
    timeStamp,
    receiverID,
  );
  console.log('Message saved to database' + savedMessage);
  ws.send(`Server received: ${msg}`);

  wss.clients.forEach(client => {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(savedMessage));
    }
  });
}

const _handleConnection = (ws: WebSocket, req: IncomingMessage) => {

  const userID = req.headers["authorization"] || "unknown-user";
  ws.send(`${userID} joined the chat`);

  ws.on('message', (msg: Buffer) => _logMessage(ws, msg, userID));

  ws.on('error', (err: Error) => {
    console.error('WebSocket error:', err);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.send('Welcome to Pulse WebSocket!');
}

export const setupWebSocket = () => {
  wss.on('connection', _handleConnection);
}