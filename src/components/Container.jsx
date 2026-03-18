export default function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">
      {children}
    </div>
  );
}