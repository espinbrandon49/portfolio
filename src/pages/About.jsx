import Container from "../components/Container";

export default function About() {
  return (
    <main className="py-20">
      <Container>
        <section className="max-w-3xl space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            About
          </h1>

          <p className="text-lg leading-8 text-slate-600">
            I build full-stack applications with a focus on structure, clarity,
            and real-world usability.
          </p>

          <p className="text-lg leading-8 text-slate-600">
            My work emphasizes clean architecture, API design, and production
            deployment. I prioritize finishing systems end-to-end rather than
            leaving projects incomplete.
          </p>

          <p className="text-lg leading-8 text-slate-600">
            Background in recruiting and education has strengthened my
            communication and ability to design systems for real users.
          </p>
        </section>
      </Container>
    </main>
  );
}