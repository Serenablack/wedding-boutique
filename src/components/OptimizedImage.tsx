import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  width,
  height,
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  const defaultPlaceholder = `data:image/svg+xml;base64,${btoa(`
    <svg width="${width || 300}" height="${
    height || 400
  }" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f8f4f0"/>
      <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#8c4b6b" text-anchor="middle" dy=".3em">Loading...</text>
    </svg>
  `)}`;

  const imageSrc = isInView ? src : placeholder || defaultPlaceholder;

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`optimized-image ${isLoaded ? 'loaded' : 'loading'} ${
        hasError ? 'error' : ''
      } ${className}`}
      onLoad={handleLoad}
      onError={handleError}
      loading={priority ? 'eager' : 'lazy'}
      width={width}
      height={height}
    />
  );
};

export default OptimizedImage;
