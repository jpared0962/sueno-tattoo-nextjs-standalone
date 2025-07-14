import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-8 text-center">
      <div className="text-8xl md:text-9xl mb-6">🎨</div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-900 to-yellow-500 bg-clip-text text-transparent">
        404 - Page Not Found
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md">
        Looks like this page got lost in the ink! Let&apos;s get you back to exploring our amazing tattoo work.
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
        <Link 
          href="/"
          className="flex-1 bg-red-900 text-white px-8 py-3 rounded-lg font-bold text-center hover:bg-red-800 transition-colors"
        >
          🏠 Go Home
        </Link>
        <Link 
          href="/gallery"
          className="flex-1 bg-white text-red-900 border-2 border-red-900 px-8 py-3 rounded-lg font-bold text-center hover:bg-red-900 hover:text-white transition-colors"
        >
          📸 View Gallery
        </Link>
      </div>
    </div>
  );
}