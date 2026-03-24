import Container from "../components/Container";

const principles = [
  "Build complete systems, not disconnected features.",
  "Prioritize clarity, maintainability, and clean structure.",
  "Design around real workflows and real users.",
  "Finish projects end-to-end with production deployment in mind.",
];

export default function About() {
  return (
    <main className="py-20">
      <Container>
        <section className="max-w-4xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            About
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            I build full-stack applications with a focus on structure, clarity,
            and real-world usability.
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            My approach to development centers on building systems that are
            understandable, maintainable, and complete. I care about strong
            architecture, clean interfaces, and practical execution—not just
            getting something to work once.
          </p>

          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            I am seeking opportunities as a full-stack or backend-focused
            developer, where I can contribute to building reliable,
            production-ready systems.
          </p>
        </section>

        <section className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                How I work
              </h2>

              <p className="text-lg leading-8 text-slate-600">
                I prefer projects with clear systems, defined responsibilities,
                and thoughtful organization. Whether I’m working on frontend presentation, backend APIs, database structure, or deployment; I try to keep each layer clean and intentional.
              </p>

              <p className="text-lg leading-8 text-slate-600">
                I’m especially motivated by projects that require translating
                complexity into something simple, usable, and reliable.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Background
              </h2>

              <p className="text-lg leading-8 text-slate-600">
                My background in recruiting and education strengthened my
                communication, adaptability, and ability to think in terms of
                real users rather than just technical requirements.
              </p>

              <p className="text-lg leading-8 text-slate-600">
                That perspective carries directly into my development work: I
                care about how people actually use systems, how clearly a
                product communicates, and whether the overall experience feels
                coherent.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Current focus
              </h2>

              <p className="text-lg leading-8 text-slate-600">
                I’m focused on building portfolio-grade full-stack applications
                that demonstrate clean architecture, production readiness, and
                thoughtful execution across the stack.
              </p>

              <p className="text-lg leading-8 text-slate-600">
                I’m particularly interested in backend structure, API design,
                data modeling, and building systems that feel solid from both
                the technical and user perspectives.
              </p>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                Core principles
              </h2>

              <ul className="space-y-3 text-sm leading-6 text-slate-600">
                {principles.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </Container>
    </main>
  );
}
