import { useState } from 'react';
import { Check, Lock, MessageCircle } from 'lucide-react';
import { kosData } from '../data/kosData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SafeImage from './SafeImage';

export default function Room() {
  const { room, contact } = kosData;
  const { ref, isVisible } = useScrollReveal();
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const activePhoto = room.photos?.[activePhotoIndex] || room.image;

  const roomInquiryUrl =
    'https://wa.me/6281953103751?text=Halo%20Kak%20Indri%2C%20saya%20ingin%20bertanya%20informasi%20mengenai%20kamar%20di%20Bryna%20Kos.';

  return (
    <section
      id="kamar"
      ref={ref}
      className={`py-16 sm:py-20 lg:py-24 bg-[#E9DFD0]/45 border-y border-[#49382B]/10 reveal-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#292522]">
            {room.heading}
          </h2>
          <p className="mt-3 text-base text-[#292522]/80">{room.subheading}</p>
        </div>

        {/* Single-elevation room card */}
        <div className="bg-white rounded-2xl border border-[#49382B]/12 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Room visual + verified interior photo switcher */}
            <div className="lg:col-span-5 bg-[#E9DFD0]/50 flex flex-col justify-between p-4 sm:p-5 border-b lg:border-b-0 lg:border-r border-[#49382B]/10">
              <div className="aspect-3/4 w-full max-h-[440px] rounded-xl overflow-hidden bg-[#E9DFD0]">
                <SafeImage
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  caption={activePhoto.label || room.image.caption}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {room.photos && room.photos.length > 1 && (
                <div
                  role="group"
                  aria-label="Pilih foto area kamar"
                  className="mt-3 grid grid-cols-2 gap-2"
                >
                  {room.photos.map((photo, index) => {
                    const selected = index === activePhotoIndex;
                    return (
                      <button
                        key={photo.id}
                        type="button"
                        onClick={() => setActivePhotoIndex(index)}
                        className={`min-h-[40px] px-2 py-2 text-xs font-medium rounded-lg border transition-colors text-center truncate focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8B6F55] ${
                          selected
                            ? 'bg-[#49382B] text-white border-[#49382B]'
                            : 'bg-white text-[#292522]/80 border-[#49382B]/15 hover:bg-[#F8F5EF]'
                        }`}
                      >
                        {photo.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Room details */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Prominent FULL status banner */}
                <div
                  role="status"
                  className="mb-6 px-4 py-3 rounded-xl bg-[#E9DFD0]/75 border border-[#49382B]/20 flex items-center gap-3 text-[#49382B]"
                >
                  <Lock className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span className="text-sm font-semibold">{room.statusLabel}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 pb-6 border-b border-[#49382B]/10">
                  <div>
                    <p className="text-xs font-semibold text-[#8B6F55]">
                      Tipe Kamar
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-[#292522]">
                      Kamar {room.type}
                    </h3>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-xs font-semibold text-[#8B6F55]">
                      Tarif Sewa
                    </p>
                    <p className="mt-1 text-2xl font-bold text-[#49382B] tabular-nums">
                      {room.price}{' '}
                      <span className="text-sm font-medium text-[#292522]/70">
                        / {room.period.replace('per ', '')}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-sm text-[#292522]/80">
                  <span>Jumlah Total Kamar</span>
                  <span className="font-semibold text-[#292522] tabular-nums">
                    {room.totalRooms} kamar
                  </span>
                </div>

                {/* Room facilities list */}
                <div className="mt-6">
                  <p className="text-xs font-semibold text-[#8B6F55] mb-3">
                    Fasilitas di Dalam Kamar
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {room.facilities.map((facility) => (
                      <li
                        key={facility}
                        className="flex items-center gap-2.5 text-sm text-[#292522]"
                      >
                        <Check
                          className="w-4 h-4 text-[#8B6F55] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{facility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* WhatsApp inquiry CTA (no booking button since FULL) */}
              <div className="mt-8 pt-6 border-t border-[#49382B]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-sm text-[#292522]/75">
                  Narahubung:{' '}
                  <strong className="font-semibold text-[#292522]">
                    {contact.contactPerson}
                  </strong>
                </p>

                <a
                  href={roomInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-white bg-[#49382B] hover:bg-[#292522] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6F55]"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>{room.ctaLabel}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
