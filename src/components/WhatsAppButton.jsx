import { MessageCircle } from 'lucide-react';
import { kosData } from '../data/kosData';

export default function WhatsAppButton() {
  const { contact } = kosData;

  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi Bryna Kos via WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-full bg-[#49382B] hover:bg-[#292522] text-white text-sm font-semibold shadow-lg transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6F55]"
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
