import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="py-20">
      <Container>
        <section className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Projects
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            A focused collection of completed full-stack systems built with an
            emphasis on architecture, usability, and production readiness.
          </p>
        </section>

        <section className="mt-10 grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </section>
      </Container>
    </main>
  );
}