function LinkButton({ href, children }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900"
    >
      {children}
    </a>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            {project.name}
          </h2>
          <p className="max-w-3xl text-base leading-7 text-slate-600">
            {project.description}
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            Highlights
          </h3>
          <ul className="grid gap-2 text-sm leading-6 text-slate-600 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          <LinkButton href={project.demo}>Live Demo</LinkButton>
          <LinkButton href={project.github}>GitHub</LinkButton>
        </div>
      </div>
    </article>
  );
}