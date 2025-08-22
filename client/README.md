# Pulse Client 💬

The frontend for Pulse - a real-time messaging application built with Next.js 15 and React 19.

## Features

- **Real-time chat interface** - Live messaging with instant updates
- **Responsive design** - Works seamlessly on desktop and mobile
- **Modern UI** - Clean, intuitive interface built with Tailwind CSS
- **Type-safe** - Full TypeScript integration
- **Fast performance** - Optimized with Next.js App Router

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Set up environment variables**
```bash
cp .env.local.example .env.local
```

Update `.env.local` with your API URL:
```env
NEXT_PUBLIC_API_URL="http://localhost:5000"
```

3. **Start development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
```

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library with modern features
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/
│   ├── api.ts          # API utilities
│   └── utils.ts        # Helper functions
└── types/
    └── index.ts        # TypeScript type definitions
```

## Building Features

This client is set up to easily integrate with real-time messaging features:

- API hooks for data fetching
- Type definitions for messaging data
- Utility functions for common operations
- Component structure ready for chat UI

## Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Set your environment variables
4. Deploy!

---

Part of the **Pulse** messaging application.