import { Clock3, PackageCheck, ShieldAlert, UserCheck } from 'lucide-react';
import { kosData } from '../data/kosData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap = {
  ShieldAlert,
  PackageCheck,
  Clock3,
  UserCheck,
};

export default function Rules() {
  const { rules } = kosData;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="peraturan"
      ref={ref}
      className={`py-16 sm:py-20 lg:py-24 reveal-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#292522]">
            {rules.heading}
          </h2>
          <p className="mt-3 text-base text-[#292522]/80">{rules.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rules.items.map((rule) => {
            const Icon = iconMap[rule.icon] || ShieldAlert;
            return (
              <article
                key={rule.number}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#49382B]/12 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E9DFD0]/70 text-[#49382B] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8B6F55] tabular-nums mb-1">
                    <span>Peraturan {rule.number}</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#292522]">
                    {rule.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#292522]/80 leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
