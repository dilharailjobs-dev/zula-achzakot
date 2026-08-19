import Container from "@/components/common/Container";

const languages = [
  { code: "en", label: "English" },
  { code: "si", label: "සිංහල" },
  { code: "ta", label: "தமிழ்" },
];

export default function TopBar() {
  return (
    <div className="bg-navy text-white">
      <Container className="flex items-center justify-end py-2 text-xs sm:justify-between">
        <span className="hidden tracking-wide text-white/80 sm:inline">A Sri Lankan Business Group</span>
        <div className="flex items-center gap-2 text-white/70">
          {languages.map((language, index) => (
            <span key={language.code} className="flex items-center gap-2">
              {index > 0 && <span className="text-white/30">|</span>}
              <button
                type="button"
                className="tracking-wide transition-colors hover:text-teal"
                aria-current={language.code === "en" ? "true" : undefined}
              >
                {language.label}
              </button>
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
