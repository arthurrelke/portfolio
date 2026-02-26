import { Mail, Phone, MapPin, Linkedin, Github, Download, Briefcase, GraduationCap, BookOpen, Cpu } from 'lucide-react';
import { profileInfo } from '@/data/profile';
import { SEOHead } from '@/components/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import type { SkillDomain } from '@/types';

/**
 * Resume/CV page with two-column layout
 * Left: professional proof (experience, education, technical knowledge with metrics)
 * Right: contact info, skills as domain-grouped badges, PDF download
 */
export default function Resume() {
  const domainLabels: Record<SkillDomain, string> = {
    'GIS': 'GIS',
    'Programação': 'Programação',
    'Design': 'Design',
    'Idiomas': 'Idiomas',
  };

  // Group skills by domain
  const skillsByDomain = profileInfo.skills.reduce<Record<string, typeof profileInfo.skills>>((acc, skill) => {
    if (!acc[skill.domain]) acc[skill.domain] = [];
    acc[skill.domain].push(skill);
    return acc;
  }, {});

  return (
    <>
      <SEOHead
        title="Currículo"
        description="Analista GIS com experiência em classificação de uso do solo, processamento Sentinel-2 e automação com Python e SQL."
      />

      <div className="min-h-screen py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <ScrollReveal>
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-2">
                {profileInfo.fullName}
              </h1>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                Analista e Desenvolvedor GIS
              </p>
            </div>
          </ScrollReveal>

          {/* Two-column grid: content left, sidebar right. Mobile: sidebar first */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 lg:gap-16">

            {/* === LEFT COLUMN: Professional proof === */}
            <div className="order-2 md:order-1 space-y-12">

              {/* Resumo Profissional */}
              <ScrollReveal>
                <section>
                  <h2 className="text-2xl font-light tracking-wide mb-4 flex items-center gap-3">
                    <BookOpen className="size-5 text-muted-foreground" />
                    Resumo Profissional
                  </h2>
                  <p className="text-base font-light leading-relaxed text-muted-foreground">
                    {profileInfo.summary}
                  </p>
                </section>
              </ScrollReveal>

              <Separator />

              {/* Experiência */}
              <ScrollReveal>
                <section>
                  <h2 className="text-2xl font-light tracking-wide mb-6 flex items-center gap-3">
                    <Briefcase className="size-5 text-muted-foreground" />
                    Experiência
                  </h2>
                  <div className="space-y-8">
                    {profileInfo.experience.map((exp, i) => (
                      <div key={i}>
                        <h3 className="text-lg font-medium tracking-wide">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-muted-foreground font-light mb-1">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground/70 font-light mb-4">
                          {exp.period}
                        </p>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, j) => (
                            <li key={j} className="flex gap-3 text-sm font-light leading-relaxed text-muted-foreground">
                              <span className="text-foreground/40 mt-1.5 shrink-0">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollReveal>

              <Separator />

              {/* Conhecimentos Técnicos */}
              <ScrollReveal>
                <section>
                  <h2 className="text-2xl font-light tracking-wide mb-6 flex items-center gap-3">
                    <Cpu className="size-5 text-muted-foreground" />
                    Conhecimentos Técnicos
                  </h2>
                  <div className="space-y-6">
                    {profileInfo.technicalKnowledge.map((tk, i) => (
                      <div key={i}>
                        <h3 className="text-base font-medium tracking-wide mb-3">
                          {tk.category}
                        </h3>
                        <ul className="space-y-2">
                          {tk.items.map((item, j) => (
                            <li key={j} className="flex gap-3 text-sm font-light leading-relaxed text-muted-foreground">
                              <span className="text-foreground/40 mt-1 shrink-0">–</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollReveal>

              <Separator />

              {/* Formação */}
              <ScrollReveal>
                <section>
                  <h2 className="text-2xl font-light tracking-wide mb-6 flex items-center gap-3">
                    <GraduationCap className="size-5 text-muted-foreground" />
                    Formação
                  </h2>
                  <div className="space-y-6">
                    {profileInfo.certifications.map((cert, i) => (
                      <div key={i}>
                        <h3 className="text-base font-medium tracking-wide">
                          {cert.degree}
                        </h3>
                        <p className="text-sm text-muted-foreground font-light">
                          {cert.institution}
                        </p>
                        <p className="text-sm text-muted-foreground/70 font-light">
                          {cert.period}{cert.status ? ` · ${cert.status}` : ''}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            </div>

            {/* === RIGHT COLUMN: Sidebar (static, no heavy animations) === */}
            <aside className="order-1 md:order-2">
              <div className="md:sticky md:top-24 space-y-8">

                {/* Download PDF */}
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-sm bg-foreground text-background text-sm font-light tracking-wide hover:bg-foreground/90 transition-colors"
                >
                  <Download className="size-4" />
                  Baixar Currículo (PDF)
                </a>

                <Separator />

                {/* Contato */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                    Contato
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${profileInfo.email}`}
                      className="flex items-center gap-3 text-sm font-light hover:text-foreground/80 transition-colors"
                    >
                      <Mail className="size-4 text-muted-foreground shrink-0" />
                      {profileInfo.email}
                    </a>
                    <a
                      href={`tel:${profileInfo.phone}`}
                      className="flex items-center gap-3 text-sm font-light hover:text-foreground/80 transition-colors"
                    >
                      <Phone className="size-4 text-muted-foreground shrink-0" />
                      {profileInfo.phone}
                    </a>
                    <div className="flex items-center gap-3 text-sm font-light text-muted-foreground">
                      <MapPin className="size-4 shrink-0" />
                      {profileInfo.location}
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Links */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                    Links
                  </h3>
                  <div className="space-y-3">
                    {profileInfo.socialLinks.linkedin && (
                      <a
                        href={profileInfo.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm font-light hover:text-foreground/80 transition-colors"
                      >
                        <Linkedin className="size-4 text-muted-foreground shrink-0" />
                        LinkedIn
                      </a>
                    )}
                    {profileInfo.socialLinks.github && (
                      <a
                        href={profileInfo.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm font-light hover:text-foreground/80 transition-colors"
                      >
                        <Github className="size-4 text-muted-foreground shrink-0" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                <Separator />

                {/* Skills agrupadas por domínio */}
                <div className="space-y-5">
                  <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                    Habilidades
                  </h3>
                  {Object.entries(skillsByDomain).map(([domain, skills]) => (
                    <div key={domain} className="space-y-2">
                      <p className="text-xs font-medium tracking-wide text-muted-foreground/70 uppercase">
                        {domainLabels[domain as SkillDomain] || domain}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <Badge
                            key={skill.name}
                            variant="secondary"
                            className="font-light text-xs tracking-wide"
                          >
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
