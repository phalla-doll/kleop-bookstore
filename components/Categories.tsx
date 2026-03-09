import { ArrowRight } from 'lucide-react';

const categories = [
  'Mystery & Thriller',
  'Historical Fiction',
  'Romance',
  'Science Fiction',
  'Fantasy',
  'Biography & Memoir',
  'Business & Economics',
  'Self-Help',
  'Poetry',
  'Graphic Novels',
  'Young Adult',
  'True Crime'
];

export function Categories() {
  return (
    <section className="w-full py-24 relative z-10 bg-white mt-12 border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Browse by <span className="italic font-light text-brand-orange">Genre</span></h2>
        <p className="text-brand-gray max-w-2xl mx-auto mb-12 text-lg">Find your next favorite book by exploring our wide range of categories.</p>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-black/10 bg-brand-light hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md text-sm md:text-base font-medium text-brand-dark"
            >
              {cat}
              <ArrowRight size={14} className="opacity-0 -ml-4 w-0 group-hover:w-auto group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </button>
          ))}
        </div>
        
        <div className="mt-16">
           <button className="text-brand-dark font-bold hover:text-brand-orange transition-colors underline underline-offset-8 decoration-2 decoration-brand-orange/30 hover:decoration-brand-orange cursor-pointer">
             Explore all 30+ categories
           </button>
        </div>
      </div>
    </section>
  );
}
