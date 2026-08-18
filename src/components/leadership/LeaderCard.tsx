import type { Leader } from "@/types/leader";

export default function LeaderCard({ leader }: { leader: Leader }) {
  const initials = leader.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="border border-navy/10 bg-white p-8">
      <span className="flex h-16 w-16 items-center justify-center bg-navy text-lg font-semibold uppercase tracking-wide text-gold">
        {initials}
      </span>
      <h3 className="mt-6 text-lg font-semibold tracking-tight text-navy">{leader.name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
        {leader.title}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted">{leader.bio}</p>
    </div>
  );
}
