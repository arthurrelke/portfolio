import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { profileInfo } from '@/data/profile';
import { cn } from '@/lib/utils';

/**
 * Main header component with scroll-aware styling
 * Simple navigation showing only professional name as home link
 */
export function Header() {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  
  // Header is transparent only on homepage hero when not scrolled
  const isTransparent = location.pathname === '/' && !isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isTransparent
          ? 'bg-transparent'
          : 'bg-background/90 backdrop-blur-lg border-b border-border shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'text-lg font-light tracking-widest transition-all duration-300',
              isTransparent
                ? 'text-white hover:text-white/80'
                : 'text-foreground hover:text-foreground/80'
            )}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {profileInfo.name.toUpperCase()}
            </motion.span>
          </Link>

          {/* Navigation */}
          <nav>
            <Link
              to="/curriculo"
              className={cn(
                'text-sm font-light tracking-wide transition-all duration-300',
                isTransparent
                  ? 'text-white/80 hover:text-white'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Currículo
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
