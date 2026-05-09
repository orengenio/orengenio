/**
 * Author byline block for /blog/[slug]. Server component.
 *
 * Bios are looked up by author name. Anything not in the directory
 * falls back to a minimal name-only render so missing data never
 * breaks a post. Adding bios is a content task: update `bios` below.
 */

type Bio = {
  title: string;
  bio: string;
  links?: { label: string; href: string }[];
};

const bios: Record<string, Bio> = {
  "Andre Mandel, CEO": {
    title: "Founder & CEO, OrenGen Worldwide",
    bio: "Andre leads OrenGen Worldwide, an AI infrastructure company that deploys autonomous agents for voice, chat, SMS, and email. He has 15+ years building and operating systems for growth-stage companies and federal contractors.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/orengenio" },
      { label: "X", href: "https://x.com/orengenio" },
    ],
  },
  "OrenGen Editorial": {
    title: "OrenGen Worldwide Editorial",
    bio: "The OrenGen editorial team publishes deployment playbooks, automation case studies, and operator guidance for businesses adopting autonomous AI infrastructure.",
    links: [{ label: "Insights", href: "/blog" }],
  },
};

export function AuthorBio({ author }: { author: string }) {
  const bio = bios[author];
  if (!bio) {
    return (
      <aside className="mt-16 pt-8 border-t border-white/10">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-burnt-orange/20 flex items-center justify-center text-burnt-orange font-semibold">
            {author.slice(0, 1)}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{author}</p>
            <p className="text-xs text-white/50 mt-1">Contributor, OrenGen Insights</p>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="mt-16 pt-8 border-t border-white/10">
      <p className="text-xs font-semibold tracking-widest uppercase text-burnt-orange mb-4">
        About the author
      </p>
      <div className="flex items-start gap-4">
        <div className="h-14 w-14 shrink-0 rounded-full bg-burnt-orange/20 flex items-center justify-center text-burnt-orange font-bold text-lg">
          {author.split(" ").map((part) => part[0]).slice(0, 2).join("")}
        </div>
        <div className="flex-1">
          <p className="text-base font-semibold text-white">{author}</p>
          <p className="text-sm text-white/60">{bio.title}</p>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">{bio.bio}</p>
          {bio.links && bio.links.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-3">
              {bio.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-xs font-semibold px-3 py-1.5 rounded-md border border-white/10 text-white/70 hover:text-white hover:border-burnt-orange transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
