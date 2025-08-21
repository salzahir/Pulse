export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          MERN Template
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A clean boilerplate for MERN stack applications
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
            Get Started
          </button>
          <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-2 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
          <div className="p-4 bg-gray-50 rounded-lg">
            <strong>Frontend</strong><br />
            Next.js, React, TypeScript
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <strong>Backend</strong><br />
            Express, Node.js, TypeScript
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <strong>Database</strong><br />
            PostgreSQL, Prisma ORM
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <strong>Auth</strong><br />
            JWT, bcrypt
          </div>
        </div>
      </div>
    </main>
  );
}
