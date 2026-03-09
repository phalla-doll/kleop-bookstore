import Link from 'next/link';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-white pt-24 pb-8 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="col-span-1 md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="bg-brand-orange text-white p-2 rounded-xl group-hover:rotate-12 transition-transform">
                <BookOpen size={28} strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-3xl tracking-wide">KLEOP</span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              Your gateway to endless stories. We provide the best collection of books across all genres to satisfy your reading cravings.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors"><Twitter size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-xl mb-8">Explore</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link href="#" className="hover:text-brand-orange transition-colors flex items-center gap-2"><ArrowRight size={14}/> Home</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors flex items-center gap-2"><ArrowRight size={14}/> About Us</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors flex items-center gap-2"><ArrowRight size={14}/> Catalog</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors flex items-center gap-2"><ArrowRight size={14}/> Authors</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-5">
            <h4 className="font-bold text-xl mb-8">Stay Updated</h4>
            <p className="text-gray-400 mb-6 font-medium">Subscribe to our newsletter to get the latest releases and exclusive offers.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-base outline-none focus:border-brand-orange transition-colors text-white"
              />
              <button className="bg-brand-orange hover:bg-brand-orange-hover text-white rounded-full px-8 py-4 text-base font-bold transition-transform hover:scale-105 cursor-pointer">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Massive Footer Text */}
        <div className="w-full text-center border-t border-white/10 pt-12 pb-4">
          <h1 className="text-[15vw] font-display font-bold leading-none tracking-tighter text-white/5 select-none">
            KLEOP
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium mt-8">
          <p>&copy; {new Date().getFullYear()} KLEOP Bookstore. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
