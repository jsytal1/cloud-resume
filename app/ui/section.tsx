export default function Section({
  name,
  children,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <section>
      <div>
        <h2>{name}</h2>
      </div>
      {children}
    </section>
  );
}
