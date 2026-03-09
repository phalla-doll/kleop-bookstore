import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="w-full max-w-5xl glass-nav rounded-full px-6 py-3 flex items-center justify-between border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] pointer-events-auto transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand-dark text-white p-2 rounded-full group-hover:bg-brand-orange transition-colors">
            <BookOpen size={20} strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-xl tracking-wide">KLEOP</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link href="#" className="hover:text-brand-orange transition-colors">Home</Link>
          <Link href="#" className="hover:text-brand-orange transition-colors">Our Story</Link>
          <Link href="#" className="hover:text-brand-orange transition-colors">Catalog</Link>
          <Link href="#" className="hover:text-brand-orange transition-colors">Submit</Link>
        </div>

        <button className="hidden md:block bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-2.5 rounded-full font-medium text-sm transition-transform hover:scale-105 cursor-pointer">
          Contact Us
        </button>
      </nav>
    </div>
  );
}
