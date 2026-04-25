import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-off-white text-center px-6">
      <div className="max-w-lg">
        <div className="font-display font-black text-neutral-100 leading-none mb-0"
          style={{ fontSize: 'clamp(6rem, 20vw, 10rem)', letterSpacing: '-0.04em' }}>
          404
        </div>
        <h1 className="heading-2 mb-4 -mt-4 relative z-10">Page Not Found</h1>
        <p className="text-neutral-500 mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="btn btn-primary btn-lg gap-2">
            <Home size={17} /> Go Home
          </Link>
          <Link href="/properties" className="btn btn-secondary btn-lg gap-2">
            <Search size={17} /> Browse Properties
          </Link>
        </div>
      </div>
    </div>
  );
}
