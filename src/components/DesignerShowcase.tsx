import React, { useEffect, useRef } from 'react';
import './DesignerShowcase.css';

const DesignerShowcase: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-zoom-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const designers = [
    {
      id: 1,
      name: 'Luxury Collection',
      description: 'Exquisite haute couture gowns',
      image: '/images/bridal dress/bridal_dress1.jpg',
    },
    {
      id: 2,
      name: 'Romantic Collection',
      description: 'Timeless romantic designs',
      image: '/images/bridal dress/bridal_dress2.jpg',
    },
    {
      id: 3,
      name: 'Modern Collection',
      description: 'Contemporary bridal fashion',
      image: '/images/bridal dress/bridal_dress3.jpg',
    },
    {
      id: 4,
      name: 'Boho Collection',
      description: 'Free-spirited bohemian styles',
      image: '/images/bridal dress/bridal_dress4.jpg',
    },
  ];

  return (
    <section className='designers'>
      <div className='container'>
        <h2 className='section-title animate-fade-in'>
          Featured Designer Collections
        </h2>
        <p className='section-subtitle animate-fade-in'>
          Discover gowns from the world's most celebrated bridal designers
        </p>

        <div className='designers-grid'>
          {designers.map((designer, index) => (
            <div
              key={designer.id}
              className='designer-card'
              ref={el => {
                cardsRef.current[index] = el;
              }}
            >
              <img src={designer.image} alt={designer.name} />
              <div className='designer-card-content'>
                <h4>{designer.name}</h4>
                <p>{designer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignerShowcase;
