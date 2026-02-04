import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '@/components/ui/button';
import type { ProjectImage } from '@/types';
import { cn } from '@/lib/utils';

interface LightboxProps {
  images: ProjectImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/**
 * Full-screen lightbox component with keyboard and touch navigation
 * Features: arrow navigation, image counter, ESC to close, swipe gestures
 */
export function Lightbox({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNavigate 
}: LightboxProps) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const currentImage = images[currentIndex];
  const totalImages = images.length;

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, currentIndex]);

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalImages - 1) {
      onNavigate(currentIndex + 1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-screen max-h-screen w-screen h-screen p-0 bg-black/95 border-none [&>button]:hidden !overflow-visible"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <VisuallyHidden>
          <DialogTitle>
            {currentImage.alt || `Image ${currentIndex + 1} of ${totalImages}`}
          </DialogTitle>
          <DialogDescription>
            {currentImage.caption || 'Project image viewer'}
          </DialogDescription>
        </VisuallyHidden>
        
        <div className="relative w-full h-full overflow-hidden">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-50 size-10 text-white hover:bg-white/10 rounded-full"
            aria-label="Close lightbox"
          >
            <X className="size-6" />
          </Button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 z-50 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm">
            <span className="text-white text-sm font-light tracking-wide">
              {currentIndex + 1} / {totalImages}
            </span>
          </div>

          {/* Previous Button */}
          {currentIndex > 0 && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 size-12 text-white hover:bg-white/10 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-8" />
            </Button>
          )}

          {/* Next Button */}
          {currentIndex < totalImages - 1 && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 size-12 text-white hover:bg-white/10 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight className="size-8" />
            </Button>
          )}

          {/* Scrollable Image Container */}
          <div className="absolute inset-0 overflow-y-auto overflow-x-hidden">
            <div className="min-h-full flex flex-col items-center justify-center px-4 md:px-8 py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage.id}
                  className="flex flex-col items-center gap-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="w-full max-w-[80vw] h-auto"
                    loading="eager"
                  />
                  {currentImage.caption && (
                    <p className="text-white/80 text-sm md:text-base font-light text-center tracking-wide max-w-3xl px-4">
                      {currentImage.caption}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
