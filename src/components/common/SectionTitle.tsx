import { cn } from "@/lib/utils";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-2xl font-semibold tracking-tight sm:text-3xl",
          variant === "dark" ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            variant === "dark" ? "text-white/70" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
