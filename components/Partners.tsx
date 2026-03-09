export function Partners() {
  const partners = ['Amazon', 'Fnac', 'Cultura', 'Decitre', 'Gibert', 'Waterstones', 'Barnes & Noble'];
  
  return (
    <section className="w-full py-16 relative z-10 overflow-hidden bg-brand-dark text-white transform -skew-y-2 my-12">
      <div className="transform skew-y-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-brand-orange">Trusted by the best</p>
        </div>
        
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-16 md:gap-24 px-8">
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <div key={i} className="font-display font-bold text-3xl md:text-5xl tracking-wider uppercase text-outline-light hover:text-white transition-colors duration-300 cursor-pointer whitespace-nowrap">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
