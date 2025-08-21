# MERN Template 🚀

A clean, minimal boilerplate for MERN stack applications with TypeScript, modern tooling, and best practices.

## 🛠 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 18** - UI library with modern hooks
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

### Backend
- **Node.js** - Runtime environment
- **Express** - Web application framework
- **TypeScript** - Full-stack type safety
- **Prisma ORM** - Type-safe database toolkit
- **PostgreSQL** - Relational database
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Jest** - Testing framework

## 📁 Project Structure

```
mern-template/
├── client/                    # Next.js frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css    # Global styles
│   │   │   ├── layout.tsx     # Root layout
│   │   │   └── page.tsx       # Home page
│   │   ├── components/        # Reusable UI components
│   │   ├── hooks/             # Custom React hooks
│   │   │   ├── useApi.ts      # API request hook with loading/error states
│   │   │   └── examples.ts    # Usage examples for hooks
│   │   ├── lib/
│   │   │   ├── api.ts         # API client utilities & getApiUrl function
│   │   │   └── utils.ts       # Common utility functions
│   │   └── types/
│   │       └── index.ts       # TypeScript type definitions
│   ├── public/                # Static assets
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
    │   │   ├── setup.ts      # Test configuration
    │   │   └── app.test.ts   # Basic API tests
    │   ├── utils/
    │   │   ├── logger.ts     # Logging utility
    │   │   └── validation.ts # Zod validation schemas
    │   └── app.ts            # Express application
    ├── prisma/
    │   └── schema.prisma     # Database schema
    ├── jest.config.js        # Jest configuration
    ├── tsconfig.json         # TypeScript configuration
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **PostgreSQL** (v12 or higher)
- **npm** or **yarn**

### Installation

1. **Clone or download this template**
```bash
git clone <your-repo-url>
cd mern-template
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

2. **Update the `.env` file with your configuration:**
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/your_database"

# JWT
JWT_SECRET="your-super-secret-jwt-key-here"
JWT_EXPIRES_IN="7d"

# Server
PORT=3001
NODE_ENV="development"

# CORS
CORS_ORIGIN="http://localhost:3000"
```

3. **Create client environment file (optional)**
```bash
cd ../client
echo "NEXT_PUBLIC_API_URL=http://localhost:3001" > .env.local
```

### Database Setup

1. **Create your PostgreSQL database**
```bash
createdb your_database_name
```

2. **Run Prisma migrations**
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
- Backend API: http://localhost:3001

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

## 🧪 Testing

The server includes a comprehensive testing setup with Jest and Supertest:

```bash
cd server
npm test            # Run all tests
npm run test:watch  # Run tests in watch mode
npm run test:coverage  # Generate coverage report
```

## 🔧 Key Features

### Server Features
- **Express** with TypeScript setup
- **Prisma ORM** with PostgreSQL
- **JWT Authentication** ready to implement
- **Request validation** with Zod
- **Security middleware** (Helmet, CORS, Rate limiting)
- **Logging utility** for better debugging
- **Testing setup** with Jest and Supertest
- **Development tools** (nodemon, ts-node)

### Client Features
- **Next.js 15** with App Router
- **TypeScript** configuration
- **Tailwind CSS** for styling
- **useApi hook** with automatic loading/error states and network detection
- **API client** utility for legacy/traditional approach
- **Custom hooks** directory with examples
- **Type definitions** for common data structures
- **Utility functions** (cn, formatDate, debounce, etc.)
- **ESLint** configuration

## 📝 Usage Examples

### Adding a New API Route

1. **Create a controller** (`server/src/controllers/userController.ts`):
```typescript
import { Request, Response } from 'express';

export const getUsers = async (req: Request, res: Response) => {
  try {
    // Your logic here
    res.json({ message: 'Users retrieved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get users' });
  }
};
```

2. **Create a route** (`server/src/routes/userRoutes.ts`):
```typescript
import express from 'express';
import { getUsers } from '../controllers/userController';

const router = express.Router();
router.get('/', getUsers);

export default router;
```

3. **Register the route** in `server/src/app.ts`:
```typescript
import userRoutes from './routes/userRoutes';
app.use('/api/users', userRoutes);
```

### Using the API Hooks (Recommended)

The template includes a powerful `useApi` hook that provides automatic loading states, error handling, and network detection:

```typescript
import useApi from '@/hooks/useApi';
import { useState, useEffect } from 'react';

function UsersList() {
  const { fetchData, loading, error, isApiDown } = useApi('GET');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchData('/api/users');
      if (data) setUsers(data);
    };
    loadUsers();
  }, [fetchData]);

  if (loading) return <div>Loading...</div>;
  if (isApiDown) return <div>Server is down. Please check if the API is running.</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// For POST requests
function CreateUser() {
  const { fetchData, loading, error } = useApi('POST');

  const handleCreate = async (userData) => {
    const result = await fetchData('/api/users', userData);
    if (result) {
      console.log('User created:', result);
    }
  };

  return (
    <button onClick={() => handleCreate({name: 'John', email: 'john@example.com'})} disabled={loading}>
      {loading ? 'Creating...' : 'Create User'}
    </button>
  );
}
```

### Using the Legacy API Client

You can also use the traditional API client approach:

```typescript
import { apiClient } from '@/lib/api';

// In your React component or hook
const fetchUsers = async () => {
  const { data, error } = await apiClient.get('/api/users');
  if (error) {
    console.error('Failed to fetch users:', error);
    return;
  }
  // Handle successful response
  setUsers(data);
};
```

## 🔐 Authentication Setup

The template includes JWT authentication utilities. To implement auth:

1. **Create auth routes** using the validation schemas
2. **Use bcryptjs** to hash passwords
3. **Generate JWT tokens** for authenticated users
4. **Protect routes** with authentication middleware

## 🗄️ Database Models

Extend the Prisma schema in `server/prisma/schema.prisma`:

```prisma
model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  authorId  String
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("posts")
}
```

Then run migrations:
```bash
npx prisma migrate dev
npx prisma generate
```

## 🚢 Deployment

### Server Deployment
1. Build the TypeScript code: `npm run build`
2. Set environment variables for production
3. Deploy the `dist` folder and run `npm start`

### Client Deployment
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

## 🛟 Support

If you encounter any issues or have questions, please:
1. Check the existing issues
2. Create a new issue with detailed information
3. Provide steps to reproduce any bugs

---

**Happy coding! 🎉**