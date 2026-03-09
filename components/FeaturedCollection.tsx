import { ArrowRight } from 'lucide-react';
import { BookCard } from './BookCard';

const books = [
  { id: 6, title: 'Lunar Storm', author: 'Terry Crosby', price: '24.99$', rating: 4, image: 'https://picsum.photos/seed/book6/400/600' },
  { id: 7, title: 'City Of Orange', author: 'David Yoon', price: '24.99$', rating: 4, image: 'https://picsum.photos/seed/book7/400/600' },
  { id: 8, title: 'The Book Of Art', author: 'Regina Phalange', price: '23.99$', rating: 5, image: 'https://picsum.photos/seed/book8/400/600' },
  { id: 9, title: 'Bigger & Better', author: 'Kevin Lee', price: '21.99$', rating: 5, image: 'https://picsum.photos/seed/book9/400/600' },
  { id: 10, title: 'The Girl In Red', author: 'Christina Henry', price: '21.99$', rating: 5, image: 'https://picsum.photos/seed/book10/400/600' },
];

export function FeaturedCollection({ title }: { title: string }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-black/10 pb-8">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">{title}</h2>
        <button className="text-brand-dark font-bold hover:text-brand-orange flex items-center gap-2 group transition-colors cursor-pointer text-lg">
          View All Collection <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
}
