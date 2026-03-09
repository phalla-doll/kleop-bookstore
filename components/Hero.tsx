import Image from 'next/image';
import { Search, Star, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 relative z-10">
      <div className="flex flex-col items-center text-center mb-16 relative">
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(242,117,78,0.08)_0%,transparent_70%)] -z-10 blur-3xl rounded-full"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/5 text-brand-orange text-sm font-medium mb-8">
          <Star size={14} fill="currentColor" />
          <span>Over 30+ genres available</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold leading-[0.85] tracking-tight mb-8">
          A Library That's <br />
          <span className="font-light italic text-brand-orange">Always Open.</span>
        </h1>
        
        <p className="text-brand-gray text-lg md:text-xl max-w-2xl mb-12 font-medium">
          Dive into our curated collection of extraordinary stories. Your next great adventure is just a page away.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center w-full max-w-2xl bg-white p-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/5 relative z-20 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
          <div className="flex items-center flex-1 w-full px-4 py-2">
            <Search className="text-brand-gray mr-3" size={22} />
            <input 
              type="text" 
              placeholder="Search books, authors, or topics..." 
              className="flex-1 outline-none text-base bg-transparent w-full"
            />
          </div>
          <button className="w-full sm:w-auto bg-brand-dark hover:bg-brand-orange text-white px-8 py-4 rounded-full text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 group">
            Search <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      <div className="relative w-full h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden group">
        <Image 
          src="https://picsum.photos/seed/librarycreative/1600/900" 
          alt="Creative Library" 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-white">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-dark overflow-hidden relative">
                  <Image src={`https://picsum.photos/seed/avatar${i}/100/100`} alt="User" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div>
              <div className="text-sm font-bold">+500 Reviews</div>
              <div className="flex text-brand-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
          
          <div className="hidden md:block text-white text-right">
            <p className="font-display text-2xl font-bold">Featured Collection</p>
            <p className="text-white/80 text-sm">Updated weekly</p>
          </div>
        </div>
      </div>
    </section>
  );
}
