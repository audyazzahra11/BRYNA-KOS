import { MapPin, Check } from 'lucide-react';
import { kosData } from '../data/kosData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SafeImage from './SafeImage';

export default function About() {
  const { about } = kosData;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="tentang"
      ref={ref}
      className={`py-16 sm:py-20 lg:py-24 reveal-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left column: Supporting photograph */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="mx-auto max-w-md lg:max-w-none aspect-3/4 lg:max-h-[520px] w-full rounded-2xl overflow-hidden border border-[#49382B]/12 bg-[#E9DFD0]">
              <SafeImage
                src={about.image.src}
                alt={about.image.alt}
                caption={about.image.caption}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right column: Description, address, highlights */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#292522]">
              {about.heading}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#292522]/85">
              {about.description}
            </p>

            {/* Address block */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white border border-[#49382B]/12 flex items-start gap-3.5">
              <MapPin
                className="w-5 h-5 text-[#8B6F55] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-semibold text-[#8B6F55] mb-1">
                  Alamat Lengkap
                </p>
                <p className="text-sm sm:text-base font-medium text-[#292522] leading-relaxed">
                  {about.address}
                </p>
              </div>
            </div>

            {/* Short highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-[#49382B]/10">
              {about.highlights.map((item) => (
                <div key={item.title} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[#49382B]">
                    <Check className="w-4 h-4 text-[#8B6F55] shrink-0" aria-hidden="true" />
                    <h3 className="text-sm font-semibold text-[#292522]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#292522]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
