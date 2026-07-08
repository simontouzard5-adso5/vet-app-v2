import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS } from '@/constants/reviews.constants';

/** Carrusel automático de reseñas, con controles manuales y pausa al interactuar. */
export const ReviewsCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const review = REVIEWS[index];

  const goTo = (newIndex: number) => setIndex((newIndex + REVIEWS.length) % REVIEWS.length);

  return (
    <section id="resenas" className="section-container section-padding">
      <div className="max-w-xl mx-auto text-center mb-10">
        <span className="text-xs font-semibold uppercase tracking-wide text-emerald">Reseñas</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Lo que dicen las familias que confían en nosotros</h2>
      </div>

      <div
        className="max-w-xl mx-auto relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={review.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="card-surface p-8 text-center"
          >
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className={i < review.rating ? 'fill-emerald text-emerald' : 'text-petrol/20'} />
              ))}
            </div>
            <p className="text-petrol/80 dark:text-cream/80 italic mb-6">&ldquo;{review.comment}&rdquo;</p>
            <div className="h-12 w-12 rounded-full bg-emerald/10 text-emerald flex items-center justify-center font-bold mx-auto mb-2">
              {review.avatarInitials}
            </div>
            <p className="font-semibold text-sm">{review.name}</p>
            <p className="text-xs text-petrol/50 dark:text-cream/50">Dueño(a) de {review.petName}</p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => goTo(index - 1)}
          aria-label="Reseña anterior"
          className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-petrol shadow-soft"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => goTo(index + 1)}
          aria-label="Siguiente reseña"
          className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-petrol shadow-soft"
        >
          <ChevronRight size={18} />
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {REVIEWS.map((r, i) => (
            <button
              key={r.id}
              onClick={() => goTo(i)}
              aria-label={`Ir a la reseña ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-emerald' : 'w-2 bg-petrol/20 dark:bg-cream/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
