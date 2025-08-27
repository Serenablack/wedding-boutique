import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  // Use the new scroll animation hook with slide-left animation
  const { setElementRef } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    animationClass: 'animate-slide-left',
    triggerOnce: false, // Allow repeated animations
  });

  const testimonials = [
    {
      id: 1,
      text: "Amazing selection and even better staff! They made finding my dream dress so easy and fun. I couldn't be happier with my experience.",
      author: "Sarah M.",
      location: "Duncan Bride",
      image: "/images/bridal dress/bridal_dress2.jpg",
    },
    {
      id: 2,
      text: "They made my experience so easy and went above and beyond to help me find the perfect dress. The staff is incredibly knowledgeable and patient.",
      author: "Jennifer K.",
      location: "OKC Bride",
      image: "/images/bridal dress/bridal_dress3.jpg",
    },
    {
      id: 3,
      text: "Best customer service in a fun, memorable experience! From the moment I walked in, I felt like a VIP. Found my dress on the first visit!",
      author: "Ashley R.",
      location: "Edmond Bride",
      image: "/images/bridal dress/bridal_dress4.jpg",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title animate-fade-in">What Our Brides Say</h2>
        <p className="section-subtitle animate-fade-in">
          Real experiences from real brides who found their perfect dress
        </p>

        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card"
              ref={setElementRef(index)}>
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.author} />
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">
                - {testimonial.author}, {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
