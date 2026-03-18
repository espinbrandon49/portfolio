import { Link } from "react-router-dom";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      <section className="py-20 sm:py-24">
        <Container>
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Full-Stack Developer
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Structured, production-ready systems built with clarity and
              purpose.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              I build full-stack applications with a focus on architecture,
              usability, and clean execution.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Featured Projects
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-600">
                Selected systems that reflect my approach to full-stack
                architecture, structured problem-solving, and production-ready
                development.
              </p>
            </div>

            <Link
              to="/projects"
              className="hidden text-sm font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900 sm:inline"
            >
              View all projects
            </Link>
          </div>

          <div className="mt-10 grid gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}