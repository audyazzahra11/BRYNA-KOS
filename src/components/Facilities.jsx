import {
  Archive,
  Bath,
  BedDouble,
  CarFront,
  LampDesk,
  Layers,
  Sun,
  UtensilsCrossed,
  Wifi,
  Wind,
  Zap,
} from 'lucide-react';
import { kosData } from '../data/kosData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SafeImage from './SafeImage';

const iconMap = {
  Wind,
  Bath,
  BedDouble,
  Archive,
  LampDesk,
  Zap,
  Wifi,
  CarFront,
  UtensilsCrossed,
  Sun,
  Layers,
};

function FacilityCard({ item }) {
  const Icon = iconMap[item.icon] || Wind;

  return (
    <article className="p-6 rounded-2xl bg-white border border-[#49382B]/10 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8B6F55]/45">
      <div className="w-10 h-10 rounded-xl bg-[#E9DFD0]/70 text-[#49382B] flex items-center justify-center mb-4">
        <Icon className="w-5 h-5" aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-[#292522]">{item.name}</h3>
      <p className="mt-2 text-sm text-[#292522]/75 leading-relaxed">
        {item.description}
      </p>
    </article>
  );
}

export default function Facilities() {
  const { facilities } = kosData;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="fasilitas"
      ref={ref}
      className={`pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 reveal-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#292522]">
            {facilities.heading}
          </h2>
          <p className="mt-3 text-base text-[#292522]/80">
            {facilities.subheading}
          </p>
        </div>

        {/* Room Facilities */}
        <div>
          <h3 className="text-lg font-semibold text-[#49382B] mb-5">
            Fasilitas Kamar
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.roomFacilities.map((item) => (
              <FacilityCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* General Facilities */}
        <div className="mt-12 pt-10 border-t border-[#49382B]/10">
          <h3 className="text-lg font-semibold text-[#49382B] mb-5">
            Fasilitas Umum
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {facilities.generalFacilities.map((item) => (
              <FacilityCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Additional Shared Facilities */}
        {facilities.additionalFacilities && facilities.additionalFacilities.length > 0 && (
          <div className="mt-12 pt-10 border-t border-[#49382B]/10">
            <h3 className="text-lg font-semibold text-[#49382B] mb-5">
              Fasilitas Tambahan &amp; Area Bersama
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {facilities.additionalFacilities.map((item) => (
                <FacilityCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* Verified Visual Documentation of Facilities */}
        {facilities.visualDocs && facilities.visualDocs.length > 0 && (
          <div className="mt-12 pt-10 border-t border-[#49382B]/10">
            <h3 className="text-lg font-semibold text-[#49382B] mb-5">
              Dokumentasi Fasilitas
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {facilities.visualDocs.map((doc) => (
                <figure
                  key={doc.id}
                  className="bg-white rounded-2xl border border-[#49382B]/10 overflow-hidden"
                >
                  <div className="aspect-3/4 bg-[#E9DFD0] overflow-hidden">
                    <SafeImage
                      src={doc.src}
                      alt={doc.alt}
                      caption={doc.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <figcaption className="px-3.5 py-3 text-xs sm:text-sm font-medium text-[#292522]">
                    {doc.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
