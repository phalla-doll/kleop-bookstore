const categories = [
  { name: 'Mystery', size: 'large', color: 'bg-brand-dark text-white' },
  { name: 'Fiction', size: 'medium', color: 'bg-white text-brand-dark' },
  { name: 'Horror', size: 'small', color: 'bg-brand-orange text-white' },
  { name: 'Science Fiction', size: 'large', color: 'bg-white text-brand-dark' },
  { name: 'Romance', size: 'medium', color: 'bg-brand-dark text-white' },
  { name: 'Business', size: 'small', color: 'bg-white text-brand-dark' },
  { name: 'Memoir', size: 'medium', color: 'bg-brand-orange text-white' },
  { name: 'Economics', size: 'large', color: 'bg-white text-brand-dark' },
  { name: 'Thriller', size: 'medium', color: 'bg-brand-dark text-white' },
];

export function Categories() {
  return (
    <section className="w-full py-24 relative z-10 bg-black/5 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-16">Browse by <span className="italic font-light text-brand-orange">Genre</span></h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`
                rounded-full font-bold transition-all transform hover:scale-105 hover:-rotate-2 cursor-pointer shadow-sm hover:shadow-xl border border-black/5
                ${cat.color}
                ${cat.size === 'large' ? 'px-10 py-5 text-xl md:text-2xl' : ''}
                ${cat.size === 'medium' ? 'px-8 py-4 text-lg md:text-xl' : ''}
                ${cat.size === 'small' ? 'px-6 py-3 text-base md:text-lg' : ''}
              `}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
