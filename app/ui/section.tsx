export default function Section({
  name,
  children,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <section className="mt-0 print:mt-1">
      <div className="flex items-baseline justify-center">
        <h2 className="mb-1 text-xl font-bold text-black break-after-avoid">{name} </h2>
        <div className="ml-2 pb-1.5 flex-grow border-t-2 border-black"></div>
      </div>
      {children}
    </section>
  );
}
