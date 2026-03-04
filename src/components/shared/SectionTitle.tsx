interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ badge, title, subtitle }: SectionTitleProps) => (
  <div className="text-center mb-10">
    {badge && (
      <span className="inline-block bg-accent text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
        {badge}
      </span>
    )}
    <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary">{title}</h2>
    {subtitle && <p className="mt-2 text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionTitle;
