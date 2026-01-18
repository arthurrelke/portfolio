import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/SEOHead';
import { ContactForm } from '@/components/ContactForm';
import { Separator } from '@/components/ui/separator';

/**
 * Homepage with immersive hero section and featured projects grid
 * Showcases photographer's best work with minimal, elegant design
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();
  return <>
      <SEOHead />
      
      <div className="min-h-screen">
        {/* Hero Section - Full viewport with featured image */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover" onError={e => {
            const target = e.currentTarget;
            target.style.opacity = '0';
            console.error('Erro ao carregar o vídeo');
          }}>
            <source src="/intro.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6">
          <motion.div className="text-center space-y-6 max-w-4xl" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1,
            ease: "easeOut"
          }}>
            <motion.h1 className="text-6xl md:text-8xl font-extralight tracking-widest text-white lg:text-xl" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 1,
              delay: 0.2
            }}>
              {photographerInfo.name.toUpperCase()}
            </motion.h1>
            
            <motion.div className="text-xl md:text-2xl font-light tracking-wide text-white/90 space-y-4" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 1,
              delay: 0.4
            }}>
              {photographerInfo.tagline.split(/\n+/).filter(line => line.trim()).map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </motion.div>

          </motion.div>

          {/* Scroll Indicator */}
          <motion.div className="absolute bottom-12" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.2,
            duration: 0.8
          }}>
            <ScrollIndicator />
          </motion.div>
        </div>
      </section>

        {/* Featured Projects Section */}
        <section className="py-24 md:py-32 border-t border-border">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                Ciência de Dados Espaciais, Visão Computacional e Urbanismo.
              </h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                Abaixo, uma seleção de trabalhos:
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Grid - 4 projects in 2x2, project 5 full width below */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mb-2 md:mb-4">
            {featuredProjects.slice(0, 4).map((project, index) => <ProjectCard key={project.id} project={project} aspectRatio="landscape" showCategory={true} index={index} />)}
          </div>
          {featuredProjects[4] && (
            <div className="max-h-[60vh] overflow-hidden">
              <ProjectCard project={featuredProjects[4]} aspectRatio="landscape" showCategory={true} index={4} />
            </div>
          )}
        </section>

        {/* Contact & About Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              {/* Left: Contact Form, Info & About */}
              <ScrollReveal>
                <div className="flex flex-col h-full">
                  {/* Contact Form */}
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                      Envie uma Mensagem
                    </h2>
                    <p className="text-muted-foreground font-light">
                      Preencha o formulário abaixo e entrarei em contato em até 24-48 horas. {photographerInfo.availability}
                    </p>
                    <ContactForm />
                  </div>

                  <Separator className="my-8" />

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light tracking-wide">
                      Informações de Contato
                    </h3>

                    {/* Contact Details */}
                    <div className="space-y-4 pt-4">
                      {/* Email */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-sm bg-accent">
                          <Mail className="size-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-light tracking-wide text-muted-foreground">
                            E-mail
                          </p>
                          <a
                            href={`mailto:${photographerInfo.email}`}
                            className="text-base font-light hover:text-muted-foreground transition-colors"
                          >
                            {photographerInfo.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* About Section - pushed to bottom */}
                  <div className="mt-auto pt-8">
                    <Separator className="mb-8" />
                    <div className="space-y-4">
                      <h3 className="text-2xl font-light tracking-wide">
                        Sobre
                      </h3>
                      <p className="text-lg font-light leading-relaxed text-muted-foreground">
                        {photographerInfo.biography}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right: Photo */}
              <ScrollReveal delay={0.2}>
                <div className="h-full min-h-[600px] md:min-h-[800px]">
                  <img 
                    src={photographerInfo.portraitImage} 
                    alt={photographerInfo.name}
                    className="w-full h-full rounded-lg object-cover object-center"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </>;
}