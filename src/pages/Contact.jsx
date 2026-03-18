import Container from "../components/Container";

export default function Contact() {
  return (
    <main className="py-20">
      <Container>
        <section className="space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Contact
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            I’m actively seeking full-stack and backend development
            opportunities. For roles, collaboration, or project discussions,
            reach out by email or connect with me on GitHub.
          </p>
          <div className="space-y-3 text-lg text-slate-600">
            <p>
              Email:{" "}
              <a
                href="mailto:espinbrandon49@gmail.com"
                className="text-slate-900 underline underline-offset-4"
              >
                espinbrandon49@gmail.com
              </a>
            </p>

            <p>
              GitHub:{" "}
              <a
                href="https://github.com/espinbrandon49"
                target="_blank"
                rel="noreferrer"
                className="text-slate-900 underline underline-offset-4"
              >
                github.com/espinbrandon49
              </a>
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
}