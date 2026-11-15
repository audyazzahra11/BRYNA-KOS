import { ArrowDownRight, MessageCircle } from 'lucide-react';
import { kosData } from '../data/kosData';
import SafeImage from './SafeImage';

export default function Hero() {
  const { hero } = kosData;

  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="beranda"
      className="pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-[#49382B]/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left column: Headline, supporting text, CTAs, unboxed highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-sm font-medium text-[#8B6F55] mb-3">
              Purwokerto, Jawa Tengah
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-bold tracking-tight leading-[1.14] text-[#292522]">
              {hero.headline}
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#292522]/80 max-w-xl">
              {hero.supportingText}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={hero.primaryCta.href}
                onClick={(e) => handleSmoothScroll(e, hero.primaryCta.href)}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 text-sm sm:text-base font-semibold text-white bg-[#49382B] hover:bg-[#292522] rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6F55]"
              >
                <span>{hero.primaryCta.label}</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={hero.secondaryCta.href}
                onClick={(e) => handleSmoothScroll(e, hero.secondaryCta.href)}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 text-sm sm:text-base font-semibold text-[#49382B] bg-white hover:bg-[#E9DFD0]/50 border border-[#49382B]/20 rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6F55]"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>{hero.secondaryCta.label}</span>
              </a>
            </div>

            {/* Clean unboxed highlights strip */}
            <div className="mt-10 pt-6 border-t border-[#49382B]/12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[#49382B]">
              {hero.highlights.map((item, index) => (
                <div key={item.label} className="flex items-center gap-6">
                  <span className="tabular-nums whitespace-nowrap">{item.value}</span>
                  {index < hero.highlights.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="text-[#8B6F55]/50 select-none"
                    >
                      ·
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Authentic facade photograph */}
          <div className="lg:col-span-6">
            <div className="mx-auto max-w-md lg:max-w-none aspect-4/5 lg:max-h-[540px] w-full rounded-2xl overflow-hidden border border-[#49382B]/12 bg-[#E9DFD0] shadow-xs">
              <SafeImage
                src={hero.image.src}
                alt={hero.image.alt}
                caption={hero.image.caption}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
