import type { Experience } from '../data/portfolio';

interface ExperienceListProps {
  items: Experience[];
}

// Highlights metrics like "40%", "25%", "over 50", etc. in `#EDEDED`
function formatHighlightText(text: string) {
  // Regex matches percentages (e.g. 40%, 25%), or specific metric phrases
  const parts = text.split(/(40% reduction|40%|25%|over 50 reported bugs|100% routing uptime)/gi);

  return parts.map((part, index) => {
    if (
      part.match(/^(40% reduction|40%|25%|over 50 reported bugs|100% routing uptime)$/i)
    ) {
      return (
        <span key={index} className="text-[#EDEDED] font-medium">
          {part}
        </span>
      );
    }
    return part;
  });
}

export function ExperienceList({ items }: ExperienceListProps) {
  return (
    <section id="experience" className="space-y-8">
      <h2 className="font-mono text-xs uppercase tracking-wider text-[#71717A]">
        Experience
      </h2>

      <div className="space-y-10">
        {items.map((item, idx) => (
          <div
            key={`${item.company}-${idx}`}
            className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8"
          >
            {/* Left Column: Dates and Location */}
            <div className="font-mono text-xs text-[#71717A] tabular-nums pt-0.5">
              <div>{item.period}</div>
              <div className="text-[#52525B]">{item.location}</div>
            </div>

            {/* Right Column: Role, Company, and Bullets */}
            <div className="space-y-3">
              <div>
                <h3 className="text-[15px] font-medium text-[#EDEDED]">
                  {item.role}
                </h3>
                <p className="text-sm text-[#71717A]">{item.company}</p>
              </div>

              <ul className="space-y-2 list-none">
                {item.highlights.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="text-[14px] leading-relaxed text-[#A1A1AA] relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-[#52525B]"
                  >
                    {formatHighlightText(bullet)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
