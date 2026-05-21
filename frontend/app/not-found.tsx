import Link from "next/link";
import { Home, Search } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center bg-off-white px-6">
      <Image src={'/img/404.jpg'} alt="404" fill />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent z-[1]"/>

      <div className="container-site relative z-10">
        <h1 className=" heading-3 md:heading-1 text-neutral-50 mb-4 -mt-4 max-w-2xl">
          Sorry, That page could not be found
        </h1>
        <p className="mb-10 leading-relaxed text-xl text-neutral-50">
          The requested age either doesn’t exist or you don’t have access to it.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href="/" className="btn btn-secondary-outlined btn-lg gap-2">
            <Home size={17} /> Go Back Home
          </Link>
          <Link
            href="/accommodations"
            className="btn btn-secondary btn-lg gap-2 text-neutral-50"
          >
            <Search size={17} /> Browse Accommodations
          </Link>
        </div>
      </div>
    </div>
  );
}
