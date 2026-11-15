import { MapPin, Phone } from 'lucide-react';
import { kosData } from '../data/kosData';

export default function Footer() {
  const { brand, footer, location, contact, navigation } = kosData;
  const currentYear = new Date().getFullYear();

  const handleNavClick = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="border-t border-[#49382B]/12 bg-white text-[#292522]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#beranda"
              onClick={(e) => handleNavClick(e, '#beranda')}
              className="inline-block text-xl font-bold tracking-tight text-[#49382B]"
            >
              {brand.name}
            </a>
            <p className="text-sm text-[#292522]/75 leading-relaxed max-w-sm">
              {footer.shortDescription}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h2 className="text-sm font-semibold text-[#49382B] mb-3">
              Navigasi Cepat
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-y-2 gap-x-4 text-sm text-[#292522]/80">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-[#49382B] hover:underline underline-offset-4 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & WhatsApp */}
          <div className="md:col-span-4 space-y-3">
            <h2 className="text-sm font-semibold text-[#49382B]">
              Alamat &amp; Kontak
            </h2>
            <div className="flex items-start gap-2.5 text-sm text-[#292522]/80 leading-relaxed">
              <MapPin
                className="w-4 h-4 text-[#8B6F55] shrink-0 mt-1"
                aria-hidden="true"
              />
              <span>{location.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-[#292522]/80">
              <Phone className="w-4 h-4 text-[#8B6F55] shrink-0" aria-hidden="true" />
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#49382B] hover:underline underline-offset-4 transition-colors tabular-nums"
              >
                {contact.contactPerson} · {contact.whatsappDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#49382B]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[#292522]/65">
          <p className="tabular-nums">
            &copy; {currentYear} {brand.name}. Seluruh hak cipta dilindungi.
          </p>
          <p>Purwokerto, Jawa Tengah</p>
        </div>
      </div>
    </footer>
  );
}
