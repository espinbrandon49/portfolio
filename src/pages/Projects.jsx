import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const totalProjects = projects.length;
  const primaryStack = ["React", "Node", "MongoDB", "PostgreSQL", "Flask"];

  return (
    <main className="py-20">
      <Container>
        <section className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Portfolio Projects
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Completed full-stack systems built for clarity, structure, and real
            functionality.
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            This portfolio highlights projects that reflect my approach to
            full-stack development: strong architecture, clean execution,
            production deployment, and real user-facing workflows.
          </p>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-slate-500">
              Total Projects
            </p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              {totalProjects}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:col-span-2">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-slate-500">
              Core Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {primaryStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </section>
      </Container>
    </main>
  );
}