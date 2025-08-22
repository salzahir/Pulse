import http from 'http';
import dotenv from 'dotenv';
import app from './app';
import { wss, setupWebSocket } from './socket';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer(app);

// Setup WebSocket server
setupWebSocket();

// Handle WebSocket upgrade
server.on('upgrade', (req, socket, head) => {
  wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit('connection', ws, req);
  });
});

// Start server (only if not in test environment)
if (process.env.NODE_ENV !== 'test') {
  server.listen(PORT, () => {
    console.log('🚀 Pulse Server running on http://localhost:' + PORT);
    console.log(`📖 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 Health check: http://localhost:${PORT}/health`);
    console.log('💬 WebSocket server ready for real-time messaging');
  });
}

export { server };
export default server;
