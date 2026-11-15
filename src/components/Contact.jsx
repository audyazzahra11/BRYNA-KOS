import { MessageCircle, Phone, User } from 'lucide-react';
import { kosData } from '../data/kosData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { contact } = kosData;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="kontak"
      ref={ref}
      className={`py-16 sm:py-20 lg:py-24 reveal-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#49382B] text-[#F8F5EF] p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {contact.heading}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#E9DFD0] leading-relaxed max-w-xl">
                {contact.supportingText}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-6 text-sm sm:text-base text-[#F8F5EF]">
                <div className="flex items-center gap-2.5">
                  <User className="w-4 h-4 text-[#E9DFD0]" aria-hidden="true" />
                  <span>
                    Kontak: <strong className="font-semibold text-white">{contact.contactPerson}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-2.5 tabular-nums">
                  <Phone className="w-4 h-4 text-[#E9DFD0]" aria-hidden="true" />
                  <span>{contact.whatsappDisplay}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex lg:justify-end">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-7 py-3.5 text-base font-semibold text-[#292522] bg-[#F8F5EF] hover:bg-white rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9DFD0]"
              >
                <MessageCircle className="w-5 h-5 text-[#49382B]" aria-hidden="true" />
                <span>{contact.ctaLabel}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
