import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Wrench, User } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { getProjectBySlug } from '@/data/projects';
import { ImageWithLightbox } from '@/components/ImageWithLightbox';
import { Lightbox } from '@/components/Lightbox';

/**
 * Project detail page with hero image, gallery, and full-screen lightbox
 * Features smooth animations and immersive image viewing experience
 */
export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // 404 if project not found
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        image={project.coverImage}
        type="article"
      />
      
      <div className="min-h-screen">
        {/* Image/Video Gallery - Edge to edge, starting from top */}
        <section className="pt-16 pb-12 md:pb-16">
          <div className="space-y-16 max-w-6xl mx-auto px-6 md:px-8">
            {project.images.map((image, index) => {
              // Skip if this image was already rendered as part of a grid
              const prevImage = index > 0 ? project.images[index - 1] : null;
              if (prevImage?.gridWith === image.id) {
                return null;
              }

              // Check if this image should be in a grid with the next one
              const nextImage = image.gridWith ? project.images.find(img => img.id === image.gridWith) : null;

              return (
                <ScrollReveal key={image.id} delay={index * 0.1}>
                  {image.src.endsWith('.mp4') ? (
                    <div className="w-full relative group">
                      <video
                        src={image.src}
                        controls
                        loop
                        playsInline
                        autoPlay={index === 0}
                        muted={index === 0}
                        controlsList="nodownload"
                        className="w-full rounded-lg"
                        style={{ maxHeight: '75vh' }}
                        id={`video-${image.id}`}
                      />
                      <button
                        onClick={() => {
                          const video = document.getElementById(`video-${image.id}`) as HTMLVideoElement;
                          if (video && !document.fullscreenElement) {
                            video.requestFullscreen().catch(err => {
                              console.log('Erro ao entrar em tela cheia:', err);
                            });
                          }
                        }}
                        className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white p-3 rounded-lg transition-all opacity-0 group-hover:opacity-100 flex items-center gap-2 text-sm font-light"
                        aria-label="Tela cheia"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        Tela Cheia
                      </button>
                    </div>
                  ) : nextImage ? (
                    // Grid layout for 2 images side by side
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <ImageWithLightbox
                          image={image}
                          onClick={() => openLightbox(index)}
                          priority={index === 0}
                          index={0}
                          className="w-full"
                        />
                        {image.caption && (
                          <p className="text-sm text-muted-foreground font-light text-center px-4">
                            {image.caption}
                          </p>
                        )}
                      </div>
                      <div className="space-y-3">
                        <ImageWithLightbox
                          image={nextImage}
                          onClick={() => openLightbox(project.images.findIndex(img => img.id === nextImage.id))}
                          priority={false}
                          index={0}
                          className="w-full"
                        />
                        {nextImage.caption && (
                          <p className="text-sm text-muted-foreground font-light text-center px-4">
                            {nextImage.caption}
                          </p>
                        )}
                      </div>
                    </div>
                  ) : (
                    // Single image layout
                    <div className="space-y-3">
                      <ImageWithLightbox
                        image={image}
                        onClick={() => openLightbox(index)}
                        priority={index === 0}
                        index={0}
                        className="w-full"
                      />
                      {image.caption && (
                        <p className="text-sm text-muted-foreground font-light text-center px-4">
                          {image.caption}
                          </p>
                        )}
                      </div>
                    )}
                  </ScrollReveal>
                );
              })}
          </div>
        </section>

      {/* Project Info Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Title and Category */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground font-light">
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2 capitalize">
                <span>•</span>
                <span>{project.category}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Description */}
          <div className="space-y-4">
            {project.description.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex} className="text-lg md:text-xl font-light leading-relaxed text-foreground">
                {paragraph.split(/(\[.*?\]\(.*?\))/g).map((part, index) => {
                  const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                  if (linkMatch) {
                    return (
                      <a
                        key={index}
                        href={linkMatch[2]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-normal"
                      >
                        {linkMatch[1]}
                      </a>
                    );
                  }
                  return part;
                })}
              </p>
            ))}
          </div>

          {/* Technical Details */}
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            {project.tools && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                  <Wrench className="size-4" />
                  <span>Ferramentas</span>
                </div>
                <p className="font-light text-foreground">{project.tools}</p>
              </div>
            )}
            {project.client && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                  <User className="size-4" />
                  <span>Cliente</span>
                </div>
                <p className="font-light text-foreground">{project.client}</p>
              </div>
            )}
          </div>
        </motion.div>
      </section>

        {/* Lightbox */}
        <Lightbox
          images={project.images}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNavigate={setCurrentImageIndex}
        />
      </div>
    </>
  );
}
