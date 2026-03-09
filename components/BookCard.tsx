import Image from 'next/image';
import { Star } from 'lucide-react';

interface BookCardProps {
  title: string;
  author: string;
  price: string;
  rating: number;
  image: string;
}

export function BookCard({ title, author, price, rating, image }: BookCardProps) {
  return (
    <div className="group cursor-pointer perspective-1000 flex flex-col h-full">
      <div className="relative aspect-[2/3] w-full mb-6 transform transition-all duration-500 group-hover:rotate-y-12 group-hover:-translate-y-4 group-hover:scale-105 shadow-[10px_10px_20px_rgba(0,0,0,0.08)] group-hover:shadow-[20px_20px_30px_rgba(0,0,0,0.15)] rounded-r-xl rounded-l-sm border-l-[6px] border-black/20 bg-white">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover rounded-r-xl rounded-l-sm"
          referrerPolicy="no-referrer"
        />
        {/* Book sheen effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-black/10 rounded-r-xl rounded-l-sm pointer-events-none"></div>
      </div>
      <div className="text-left mt-auto">
        <p className="text-xs text-brand-orange font-bold uppercase tracking-wider mb-1.5">{author}</p>
        <h3 className="font-display font-bold text-xl leading-tight mb-3 group-hover:text-brand-orange transition-colors">{title}</h3>
        <div className="flex items-center justify-between border-t border-black/5 pt-3">
          <span className="font-bold text-lg">{price}</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                fill={i < rating ? "currentColor" : "none"} 
                className={i < rating ? "text-brand-orange" : "text-gray-300"} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
