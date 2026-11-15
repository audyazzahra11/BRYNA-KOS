import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { kosData } from '../data/kosData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SafeImage from './SafeImage';

const categories = ['Semua', 'Kamar', 'Area Kos', 'Fasilitas'];

export default function Gallery() {
  const { gallery } = kosData;
  const { ref, isVisible } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'Semua') return gallery.items;
    return gallery.items.filter((item) => item.category === activeCategory);
  }, [activeCategory, gallery.items]);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredItems.length) % filteredItems.length;
    });
  }, [filteredItems.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredItems.length;
    });
  }, [filteredItems.length]);

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowLeft') {
        showPrevious();
      } else if (event.key === 'ArrowRight') {
        showNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, closeLightbox, showPrevious, showNext]);

  const activeItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <section
      id="galeri"
      ref={ref}
      className={`pt-12 sm:pt-14 pb-16 sm:pb-20 bg-[#E9DFD0]/45 border-y border-[#49382B]/10 reveal-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#292522]">
              {gallery.heading}
            </h2>
            <p className="mt-3 text-base text-[#292522]/80">
              {gallery.subheading}
            </p>
          </div>

          {/* Interactive category filter */}
          <div
            role="group"
            aria-label="Filter kategori galeri"
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl bg-white border border-[#49382B]/12 self-start md:self-auto"
          >
            {categories.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedIndex(null);
                  }}
                  className={`min-h-[36px] px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8B6F55] ${
                    active
                      ? 'bg-[#49382B] text-white'
                      : 'text-[#292522]/75 hover:text-[#292522] hover:bg-[#F8F5EF]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid (3:4 portrait ratio matching original photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Lihat foto ${item.title}`}
              className="group text-left bg-white rounded-2xl border border-[#49382B]/12 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8B6F55]/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6F55]"
            >
              <div className="relative aspect-3/4 overflow-hidden bg-[#E9DFD0]">
                <SafeImage
                  src={item.src}
                  alt={item.alt}
                  caption={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-white/90 text-[#49382B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-[#49382B]/10"
                >
                  <Expand className="w-4 h-4" />
                </span>
              </div>
              <div className="p-4 flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-[#292522] truncate">
                  {item.title}
                </span>
                <span className="text-xs font-medium text-[#8B6F55] shrink-0">
                  {item.category}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Pratinjau foto: ${activeItem.title}`}
          className="fixed inset-0 z-50 bg-[#292522]/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-3xl bg-[#F8F5EF] rounded-2xl border border-white/15 overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Top bar */}
            <div className="px-4 sm:px-6 py-3.5 border-b border-[#49382B]/12 flex items-center justify-between gap-4 bg-white shrink-0">
              <div className="min-w-0">
                <p className="text-sm sm:text-base font-semibold text-[#292522] truncate">
                  {activeItem.title}
                </p>
                <p className="text-xs text-[#8B6F55] tabular-nums">
                  {activeItem.category} · {selectedIndex + 1} / {filteredItems.length}
                </p>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Tutup pratinjau foto"
                className="w-10 h-10 rounded-xl inline-flex items-center justify-center text-[#49382B] hover:bg-[#E9DFD0]/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6F55]"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Image viewport */}
            <div className="relative flex-1 min-h-0 bg-[#292522] flex items-center justify-center">
              <SafeImage
                src={activeItem.src}
                alt={activeItem.alt}
                caption={activeItem.title}
                className="w-full max-h-[72vh] object-contain"
              />

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Foto sebelumnya"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-white/95 hover:bg-white text-[#49382B] border border-[#49382B]/15 shadow-sm flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6F55]"
                  >
                    <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Foto berikutnya"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-white/95 hover:bg-white text-[#49382B] border border-[#49382B]/15 shadow-sm flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6F55]"
                  >
                    <ChevronRight className="w-5 h-5" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            {/* Footer hint */}
            <div className="px-4 sm:px-6 py-3 bg-white border-t border-[#49382B]/10 flex items-center justify-between text-xs text-[#292522]/70 shrink-0">
              <span>Gunakan tombol panah kiri/kanan untuk navigasi</span>
              <span>Tekan Esc untuk menutup</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
