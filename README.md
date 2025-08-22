# Pulse 💬

A real-time messaging application built from scratch with modern web technologies. Connect, chat, and stay in touch with friends through instant messaging, group chats, and more.

## ✨ Features

### Core Functionality
- **Real-time messaging** - Instant message delivery with live updates
- **User authentication** - Secure registration and login system
- **User profiles** - Customizable profiles with avatars and status
- **Direct messaging** - One-on-one conversations
- **Group chats** - Create and manage group conversations
- **Friend system** - Send and accept friend requests
- **Online status** - See who's currently online
- **Message history** - Persistent chat history

### Planned Features
- **File sharing** - Send images and documents
- **Typing indicators** - See when someone is typing
- **Message reactions** - React to messages with emojis
- **Push notifications** - Get notified of new messages

## 🛠 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library with modern hooks
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Real-time subscriptions and database

### Backend
- **Node.js** - Runtime environment
- **Express** - Web application framework
- **TypeScript** - Full-stack type safety
- **Prisma ORM** - Type-safe database toolkit
- **PostgreSQL** - Relational database (via Supabase)
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Jest** - Testing framework

## 📁 Project Structure

```
Pulse/
├── client/                    # Next.js frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css    # Global styles
│   │   │   ├── layout.tsx     # Root layout
│   │   │   └── page.tsx       # Home page
│   │   ├── components/        # Reusable UI components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/
│   │   │   ├── api.ts         # API client utilities
│   │   │   └── utils.ts       # Common utility functions
│   │   └── types/
│   │       └── index.ts       # TypeScript type definitions
│   └── package.json
│
└── server/                    # Express backend
    ├── src/
    │   ├── controllers/       # Request handlers
    │   ├── db/               # Database utilities
    │   ├── middleware/       # Express middleware
    │   ├── models/           # Data models
    │   ├── routes/           # API route definitions
    │   ├── test/             # Test files
    │   ├── utils/
    │   │   ├── logger.ts     # Logging utility
    │   │   └── hash.ts       # Password hashing
    │   └── app.ts            # Express application
    ├── prisma/
    │   └── schema.prisma     # Database schema
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Supabase account** (for database and real-time features)

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd Pulse
```

2. **Install server dependencies**
```bash
cd server
npm install
```

3. **Install client dependencies**
```bash
cd ../client
npm install
```

### Environment Setup

1. **Create server environment file**
```bash
cd server
cp .env.example .env
```

2. **Set up Supabase:**
   - Create a new project at [supabase.com](https://supabase.com)
   - Get your database URL from Project Settings > Database
   - Update your `.env` file:

```env
# Database (Supabase)
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"

# JWT
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
JWT_EXPIRES_IN="7d"

# Server
PORT=5000
NODE_ENV="development"

# CORS
CLIENT_URL="http://localhost:3000"
```

3. **Create client environment file**
```bash
cd ../client
cp .env.local.example .env.local
```

### Database Setup

1. **Run Prisma migrations**
```bash
cd server
npx prisma migrate dev
npx prisma generate
```

### Development

1. **Start the backend server**
```bash
cd server
npm run dev
```

2. **Start the frontend development server** (in a new terminal)
```bash
cd client
npm run dev
```

3. **Open your browser**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📋 Available Scripts

### Server (Express)
```bash
npm run dev         # Start development server with nodemon
npm run build       # Build TypeScript to JavaScript
npm run start       # Start production server
npm test            # Run Jest tests
npm run test:watch  # Run tests in watch mode
npm run test:coverage  # Run tests with coverage report
npm run prisma:generate  # Generate Prisma client
npm run prisma:migrate   # Run database migrations
npm run prisma:studio    # Open Prisma Studio
```

### Client (Next.js)
```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
```

## 🗄️ Database Schema

The app uses a robust database schema designed for messaging:

- **Users** - Authentication, profiles, online status
- **Conversations** - Direct messages and group chats
- **Messages** - Chat messages with different types (text, image, file)
- **Friendships** - Friend requests and connections
- **ConversationParticipants** - Many-to-many relationship for group chats

## 🔐 Authentication

- JWT-based authentication
- Secure password hashing with bcryptjs
- HTTP-only cookies for token storage
- Protected routes and middleware

## 🧪 Testing

```bash
cd server
npm test            # Run all tests
npm run test:watch  # Run tests in watch mode
npm run test:coverage  # Generate coverage report
```

## 🚢 Deployment

### Backend
1. Build the TypeScript code: `npm run build`
2. Set environment variables for production
3. Deploy to your preferred platform (Railway, Render, etc.)

### Frontend
1. Build the Next.js app: `npm run build`
2. Deploy to Vercel, Netlify, or your preferred platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy chatting! 💬**