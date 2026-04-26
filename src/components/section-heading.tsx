type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="font-mono text-sm text-signal">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="subcopy mt-5 text-base md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
