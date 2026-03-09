import Image from 'next/image';

export function FeatureSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
      <div className="bg-brand-dark text-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 relative overflow-hidden">
        {/* Decorative large text background */}
        <div className="absolute -top-20 -right-20 text-[15rem] font-display font-bold text-white/5 leading-none pointer-events-none select-none">
          READ
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="max-w-xl">
            <div className="inline-block bg-brand-orange text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-8">
              Our Mission
            </div>
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
              Keep Reading.<br />
              <span className="text-brand-orange italic font-light">Keep Learning.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-medium">
              Reading books is a wonderful way to spend your time. Here we believe reading will help you make connections with others and discover new worlds. Our curated collection is designed to inspire and educate.
            </p>
            <button className="bg-white text-brand-dark hover:bg-brand-orange hover:text-white px-10 py-4 rounded-full text-base font-bold transition-all transform hover:scale-105 cursor-pointer">
              Explore Collection
            </button>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/reading/800/1000" 
                alt="Person reading" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-brand-orange text-white p-6 md:p-8 rounded-3xl shadow-2xl transform -rotate-6 backdrop-blur-sm border border-white/20">
              <div className="text-4xl md:text-5xl font-display font-bold mb-1">+12k</div>
              <div className="text-base font-medium opacity-90 uppercase tracking-widest">Books</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
