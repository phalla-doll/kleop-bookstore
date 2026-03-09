import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BookCard } from './BookCard';

const books = [
  { id: 1, title: 'Soul', author: 'Olivia Wilson', price: '29.99$', rating: 5, image: 'https://picsum.photos/seed/book1/400/600' },
  { id: 2, title: 'Alone', author: 'Morgan Maxwell', price: '24.99$', rating: 4, image: 'https://picsum.photos/seed/book2/400/600' },
  { id: 3, title: 'A Million To One', author: 'Tony Faggioli', price: '39.99$', rating: 5, image: 'https://picsum.photos/seed/book3/400/600' },
  { id: 4, title: 'Don\'t Look Back', author: 'Isaac Nelson', price: '23.99$', rating: 4, image: 'https://picsum.photos/seed/book4/400/600' },
  { id: 5, title: 'The Design of Books', author: 'Debbie Berne', price: '21.99$', rating: 5, image: 'https://picsum.photos/seed/book5/400/600' },
];

export function BookCarousel({ title }: { title: string }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-brand-gray max-w-md">Discover our latest additions. Hand-picked stories that will transport you to new dimensions.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all cursor-pointer">
            <ChevronLeft size={20} />
          </button>
          <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all cursor-pointer">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
}
