export default function Section({
  name,
  children,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <section className="mt-0">
      <div className="flex items-baseline justify-center">
        <h2 className="mb-1 print:mb-0 text-xl font-bold text-black">
          {name}{" "}
        </h2>
        <div className="ml-2 pb-1.5 flex-grow border-t-2 border-black"></div>
      </div>
      {children}
    </section>
  );
}
