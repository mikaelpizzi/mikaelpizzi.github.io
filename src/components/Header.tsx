import { useState } from 'react';
import type { PortfolioData } from '../data/portfolio';

interface HeaderProps {
  data: PortfolioData['personal'];
}

export function Header({ data }: HeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(data.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <header className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <h1 className="font-sans text-2xl font-semibold tracking-tight text-[#EDEDED]">
          {data.name}
        </h1>
        <span className="font-mono text-xs text-[#71717A]">
          {data.location}
        </span>
      </div>

      <p className="text-sm text-[#A1A1AA]">{data.role}</p>

      <p className="text-[15px] text-[#A1A1AA] leading-relaxed max-w-[65ch] mt-4 text-pretty">
        {data.bio}
      </p>

      <nav
        aria-label="Personal links"
        className="font-mono text-xs text-[#71717A] flex flex-wrap items-center gap-x-4 gap-y-2 pt-2"
      >
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#EDEDED] hover:underline underline-offset-4"
        >
          GitHub ↗
        </a>
        <span>·</span>
        <a
          href={data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#EDEDED] hover:underline underline-offset-4"
        >
          LinkedIn ↗
        </a>
        <span>·</span>
        <a
          href={data.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#EDEDED] hover:underline underline-offset-4"
        >
          Resume (PDF) ↗
        </a>
        <span>·</span>
        <div className="inline-flex items-center gap-1.5 text-[#EDEDED]">
          <a
            href={`mailto:${data.email}`}
            className="hover:underline underline-offset-4"
          >
            {data.email}
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="text-[#71717A] hover:text-[#EDEDED] focus:outline-none focus:underline underline-offset-4 cursor-pointer"
            aria-label="Copy email address to clipboard"
          >
            [{copied ? 'Copied' : 'Copy'}]
          </button>
        </div>
      </nav>
    </header>
  );
}
