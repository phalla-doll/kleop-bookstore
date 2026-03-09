'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { BookCard } from './BookCard';

const books = [
  { id: 1, title: 'Soul', author: 'Olivia Wilson', price: '29.99$', rating: 5, image: 'https://picsum.photos/seed/book1/400/600' },
  { id: 2, title: 'Alone', author: 'Morgan Maxwell', price: '24.99$', rating: 4, image: 'https://picsum.photos/seed/book2/400/600' },
  { id: 3, title: 'A Million To One', author: 'Tony Faggioli', price: '39.99$', rating: 5, image: 'https://picsum.photos/seed/book3/400/600' },
  { id: 4, title: 'Don\'t Look Back', author: 'Isaac Nelson', price: '23.99$', rating: 4, image: 'https://picsum.photos/seed/book4/400/600' },
  { id: 5, title: 'The Design of Books', author: 'Debbie Berne', price: '21.99$', rating: 5, image: 'https://picsum.photos/seed/book5/400/600' },
  { id: 11, title: 'Silent Echoes', author: 'Marcus Vance', price: '27.50$', rating: 4, image: 'https://picsum.photos/seed/book11/400/600' },
  { id: 12, title: 'Beyond the Horizon', author: 'Elena Rostova', price: '32.00$', rating: 5, image: 'https://picsum.photos/seed/book12/400/600' },
  { id: 13, title: 'The Last Empire', author: 'Julian Thorne', price: '28.99$', rating: 4, image: 'https://picsum.photos/seed/book13/400/600' },
  { id: 14, title: 'Whispers in the Dark', author: 'Sarah Jenkins', price: '19.99$', rating: 3, image: 'https://picsum.photos/seed/book14/400/600' },
  { id: 15, title: 'Echoes of Time', author: 'David Chen', price: '25.99$', rating: 5, image: 'https://picsum.photos/seed/book15/400/600' },
];

export function BookCarousel({ title }: { title: string }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-brand-gray max-w-md">Discover our latest additions. Hand-picked stories that will transport you to new dimensions.</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {books.map((book) => (
          <div key={book.id} className="min-w-[240px] md:min-w-[280px] snap-start flex-shrink-0">
            <BookCard {...book} />
          </div>
        ))}
      </div>
    </section>
  );
}
