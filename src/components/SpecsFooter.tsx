import type { Education, SkillCategory } from '../data/portfolio';

interface SpecsFooterProps {
  skills: SkillCategory[];
  education: Education;
  name: string;
}

export function SpecsFooter({ skills, education, name }: SpecsFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="skills" className="space-y-12">
      {/* Technical Specifications */}
      <div className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-wider text-[#71717A]">
          Technical Specifications
        </h2>

        <div className="border-t border-[#222222] divide-y divide-[#1C1C1C]">
          {skills.map((item) => (
            <div
              key={item.category}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-1 md:gap-8 py-3"
            >
              <span className="font-mono text-xs text-[#71717A]">
                {item.category}
              </span>
              <span className="font-sans text-sm text-[#EDEDED]">
                {item.skills}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-wider text-[#71717A]">
          Education
        </h2>
        <div className="text-sm">
          <p className="text-[#EDEDED]">
            {education.degree}{' '}
            <span className="text-[#71717A]">—</span>{' '}
            <span className="text-[#A1A1AA]">{education.institution}</span>
          </p>
          {education.details && (
            <p className="text-xs text-[#71717A] mt-1">
              {education.details}
            </p>
          )}
        </div>
      </div>

      {/* Minimalist Footer */}
      <div className="border-t border-[#222222] pt-6 mt-16 font-mono text-xs text-[#71717A]">
        <span>© {currentYear} {name}</span>
      </div>
    </footer>
  );
}

