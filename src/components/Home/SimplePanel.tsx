const panels = {
  hero: {
    kicker: "HELIX TECH",
    title: "Software for real work",
    rows: [
      ["AI products", "Design and delivery"],
      ["Business software", "Web and internal tools"],
      ["Automation", "Repeatable workflows"],
      ["Analytics", "Clear operating data"],
    ],
  },
  work: {
    kicker: "Delivery",
    title: "A straightforward build",
    rows: [
      ["Discover", "Goals and constraints"],
      ["Design", "Product and architecture"],
      ["Build", "Working software"],
      ["Support", "After it goes live"],
    ],
  },
  services: {
    kicker: "Services",
    title: "What partners get",
    rows: [
      ["Product engineering", "From idea to release"],
      ["Secure systems", "Practical safeguards"],
      ["Operations", "Something the team can run"],
    ],
  },
  company: {
    kicker: "Company",
    title: "A Colorado technology company",
    rows: [
      ["Focus", "AI and business software"],
      ["Structure", "US corporation"],
      ["Style", "Clear scope, plain updates"],
    ],
  },
} as const;

export default function SimplePanel({
  variant,
}: {
  variant: keyof typeof panels;
}) {
  const panel = panels[variant];

  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <p className="text-sm uppercase tracking-[0.14em] text-primary">
        {panel.kicker}
      </p>
      <h3 className="mt-3 text-2xl font-medium text-white">{panel.title}</h3>
      <ul className="mt-6 flex flex-col gap-3">
        {panel.rows.map(([name, detail]) => (
          <li
            key={name}
            className="flex items-center justify-between gap-4 rounded-xl bg-black/20 px-4 py-3"
          >
            <span className="text-white">{name}</span>
            <span className="text-right text-sm text-white/50">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
