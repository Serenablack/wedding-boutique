import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './BridalGallery.css';

const BridalGallery: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Use the new scroll animation hook
  const { setElementRef } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '50px 0px',
    animationClass: 'animate-fade-in',
    triggerOnce: false, // Set to false to allow repeated animations
    onIntersect: index => {
      // Load image when element comes into view
      if (!loadedImages.has(index)) {
        setLoadedImages(prev => new Set(prev).add(index));
      }
    },
  });

  const bridalDresses = [
    {
      id: 1,
      name: 'Elegant A-Line Gown',
      description: 'Timeless silhouette with intricate beading',
      image: '/images/bridal dress/bridal_dress1.jpg',
      placeholder:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmNGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzhjNGI2YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
    },
    {
      id: 2,
      name: 'Romantic Ball Gown',
      description: 'Princess-style with flowing tulle skirt',
      image: '/images/bridal dress/bridal_dress2.jpg',
      placeholder:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmNGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzhjNGI2YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
    },
    {
      id: 3,
      name: 'Modern Mermaid Dress',
      description: 'Contemporary fit with lace details',
      image: '/images/bridal dress/bridal_dress3.jpg',
      placeholder:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmNGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzhjNGI2YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
    },
    {
      id: 4,
      name: 'Boho Lace Gown',
      description: 'Free-spirited design with vintage charm',
      image: '/images/bridal dress/bridal_dress4.jpg',
      placeholder:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmNGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzhjNGI2YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
    },
    {
      id: 5,
      name: 'Classic Sheath Dress',
      description: 'Sophisticated simplicity at its finest',
      image: '/images/bridal dress/bridal_dress5.jpg',
      placeholder:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmNGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzhjNGI2YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
    },
    {
      id: 6,
      name: 'Luxury Designer Gown',
      description: 'Haute couture with premium fabrics',
      image: '/images/bridal dress/bridal_dress6.jpg',
      placeholder:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmNGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzhjNGI2YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
    },
  ];

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  return (
    <section className='bridal-gallery'>
      <div className='container'>
        <h2 className='section-title animate-fade-in'>
          Bridal Dress Collection
        </h2>
        <p className='section-subtitle animate-fade-in'>
          Discover our stunning selection of wedding dresses for every style and
          budget
        </p>

        <div className='gallery-grid'>
          {bridalDresses.map((dress, index) => (
            <div
              key={dress.id}
              className='gallery-item'
              data-index={index}
              ref={setElementRef(index)}
            >
              <div className='gallery-image'>
                <img
                  src={
                    loadedImages.has(index) ? dress.image : dress.placeholder
                  }
                  alt={dress.name}
                  loading='lazy'
                  onLoad={() => handleImageLoad(index)}
                  className={loadedImages.has(index) ? 'loaded' : 'loading'}
                />
                <div className='gallery-overlay'>
                  <div className='gallery-content'>
                    <h4>{dress.name}</h4>
                    <p>{dress.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='gallery-cta'>
          <a href='#contact' className='cta-button'>
            Schedule Your Fitting
          </a>
        </div>
      </div>
    </section>
  );
};

export default BridalGallery;
