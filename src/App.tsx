import { portfolioData } from './data/portfolio';
import { Header } from './components/Header';
import { ProjectItem } from './components/ProjectItem';
import { ExperienceList } from './components/ExperienceList';
import { SpecsFooter } from './components/SpecsFooter';

export default function App() {
  const { personal, projects, experience, education, skills } = portfolioData;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-sans antialiased selection:bg-[#EDEDED] selection:text-[#0A0A0A]">
      <main className="max-w-[760px] mx-auto px-6 py-16 md:py-24 space-y-16">
        <Header data={personal} />

        <section id="projects" className="space-y-8">
          <h2 className="font-mono text-xs uppercase tracking-wider text-[#71717A]">
            Selected Systems &amp; Projects
          </h2>
          <div>
            {projects.map((project, idx) => (
              <ProjectItem
                key={project.id}
                project={project}
                isFirst={idx === 0}
              />
            ))}
          </div>
        </section>

        <ExperienceList items={experience} />

        <SpecsFooter
          skills={skills}
          education={education}
          name={personal.name}
        />
      </main>
    </div>
  );
}
