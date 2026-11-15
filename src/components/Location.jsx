import { useRef, useState } from 'react';
import { Check, Copy, ExternalLink, MapPin, Navigation } from 'lucide-react';
import { kosData } from '../data/kosData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Location() {
  const { location } = kosData;
  const { ref, isVisible } = useScrollReveal();
  const mapFrameRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleViewLocation = () => {
    setIsExpanded((prev) => !prev);
    if (mapFrameRef.current) {
      mapFrameRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(location.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="lokasi"
      ref={ref}
      className={`py-16 sm:py-20 lg:py-24 bg-[#E9DFD0]/45 border-y border-[#49382B]/10 reveal-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Address & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl border border-[#49382B]/12 p-6 sm:p-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#292522]">
                {location.heading}
              </h2>
              <p className="mt-3 text-base text-[#292522]/80 leading-relaxed">
                {location.subheading}
              </p>

              <div className="mt-6 pt-6 border-t border-[#49382B]/10 flex items-start gap-3.5">
                <MapPin
                  className="w-5 h-5 text-[#8B6F55] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-semibold text-[#8B6F55] mb-1">
                    Alamat Lengkap
                  </p>
                  <p className="text-sm sm:text-base font-medium text-[#292522] leading-relaxed">
                    {location.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleViewLocation}
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-[#49382B] bg-[#E9DFD0]/70 hover:bg-[#E9DFD0] rounded-xl transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6F55]"
                >
                  <Navigation className="w-4 h-4" aria-hidden="true" />
                  <span>{isExpanded ? 'Perkecil Peta' : 'Lihat Lokasi'}</span>
                </button>

                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-white bg-[#49382B] hover:bg-[#292522] rounded-xl transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6F55]"
                >
                  <span>Buka Google Maps</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center gap-2 min-h-[40px] px-4 py-2 text-xs sm:text-sm font-medium text-[#49382B] hover:bg-[#F8F5EF] border border-[#49382B]/15 rounded-xl transition-colors self-start focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6F55]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#8B6F55]" aria-hidden="true" />
                    <span>Alamat Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" aria-hidden="true" />
                    <span>Salin Alamat</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Google Maps preview */}
          <div
            ref={mapFrameRef}
            className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#49382B]/12 bg-white flex flex-col"
          >
            <div
              className={`w-full transition-all duration-300 ${
                isExpanded ? 'h-[440px] sm:h-[500px]' : 'h-[320px] sm:h-[380px] lg:h-full lg:min-h-[380px]'
              }`}
            >
              <iframe
                title="Peta Lokasi Bryna Kos Purwokerto"
                src={location.embedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
