import { useRef } from 'react';
import type { Project } from '../data/portfolio';

interface ProjectItemProps {
  project: Project;
  isFirst?: boolean;
}

export function ProjectItem({ project, isFirst = false }: ProjectItemProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <article
      className={`${
        isFirst ? 'pt-0' : 'border-t border-[#222222] pt-10 mt-10'
      } space-y-6`}
    >
      {/* Title & External Links */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
        <div>
          <h3 className="text-lg font-medium text-[#EDEDED]">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="font-mono text-xs text-[#71717A] mt-0.5">
              {project.subtitle}
            </p>
          )}
        </div>

        <div className="font-mono text-xs flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-[#EDEDED] hover:underline underline-offset-4"
            >
              [GitHub ↗]
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-[#EDEDED] hover:underline underline-offset-4"
            >
              [Live ↗]
            </a>
          )}
        </div>
      </div>

      {/* Tech Stack Line: Monospace, plain text, separated by middots, NO badges */}
      <p className="font-mono text-xs text-[#71717A] tracking-tight">
        {project.stack.join(' · ')}
      </p>

      {/* Description */}
      <p className="text-[15px] text-[#A1A1AA] leading-relaxed text-pretty">
        {project.description}
      </p>

      {/* Multimedia Slot: Architecture Diagram */}
      {project.diagramSvg && (
        <div className="space-y-2">
          <div className="relative group bg-[#111111] border border-[#222222] p-3 sm:p-6 rounded overflow-hidden">
            <img
              src={project.diagramSvg}
              alt={`${project.title} Architecture Diagram`}
              className="w-full h-auto object-contain max-h-[380px] mx-auto opacity-90 group-hover:opacity-100 transition-opacity"
              loading="lazy"
            />
            <button
              type="button"
              onClick={openModal}
              className="mt-3 font-mono text-xs text-[#71717A] hover:text-[#EDEDED] flex items-center gap-1.5 cursor-pointer underline-offset-4 hover:underline"
              aria-label="Enlarge architecture diagram"
            >
              <span>[Enlarge Architecture Diagram ↗]</span>
            </button>
          </div>

          {/* Native HTML dialog for accessible zoom */}
          <dialog
            ref={dialogRef}
            onClick={(e) => {
              if (e.target === dialogRef.current) closeModal();
            }}
            className="fixed inset-0 m-auto max-w-5xl w-[94vw] max-h-[90vh] bg-[#0A0A0A] border border-[#222222] p-6 text-[#EDEDED] rounded-lg shadow-2xl backdrop:bg-black/85"
          >
            <div className="flex items-center justify-between border-b border-[#222222] pb-3 mb-4 font-mono text-xs">
              <span className="text-[#A1A1AA]">
                {project.title} — System Architecture
              </span>
              <button
                type="button"
                onClick={closeModal}
                className="text-[#71717A] hover:text-[#EDEDED] cursor-pointer"
              >
                [Esc / Close]
              </button>
            </div>
            <div className="overflow-auto max-h-[75vh] flex justify-center p-2 bg-[#111111] border border-[#222222] rounded">
              <img
                src={project.diagramSvg}
                alt={`${project.title} System Architecture Diagram`}
                className="w-full h-auto max-w-4xl"
              />
            </div>
          </dialog>
        </div>
      )}

      {/* Multimedia Slot: Video (rendered only if videoUrl exists, without broken placeholders) */}
      {project.videoUrl && (
        <div className="bg-[#111111] border border-[#222222] rounded overflow-hidden">
          <video
            src={project.videoUrl}
            controls
            preload="metadata"
            className="w-full h-auto aspect-video"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Architecture & Engineering Challenges / Solutions */}
      {project.challenges && project.challenges.length > 0 && (
        <div className="space-y-4 pt-2">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#71717A]">
            Engineering Challenges &amp; System Solutions
          </h4>
          <ul className="space-y-4">
            {project.challenges.map((c) => (
              <li
                key={c.title}
                className="text-[14px] leading-relaxed text-[#A1A1AA] border-l border-[#222222] pl-4 space-y-1"
              >
                <div>
                  <span className="text-[#EDEDED] font-medium">{c.title}:</span>{' '}
                  <span>{c.problem}</span>
                </div>
                <div>
                  <span className="font-mono text-xs text-[#71717A]">
                    ↳ Solution ({c.solutionTitle}):
                  </span>{' '}
                  <span>{c.solution}</span>{' '}
                  <span className="font-mono text-xs text-[#EDEDED]">
                    [{c.metric}]
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Contextual Stack Note */}
      {project.note && (
        <p className="text-[14px] text-[#71717A] leading-relaxed pt-1">
          {project.note}
        </p>
      )}

      {/* Infrastructure Note */}
      {project.infraNote && (
        <p className="font-mono text-xs text-[#71717A] border-t border-[#1C1C1C] pt-3">
          Note: {project.infraNote}
        </p>
      )}
    </article>
  );
}

