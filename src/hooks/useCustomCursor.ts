// SOLID: Single Responsibility - Hook para el cursor personalizado
import { useEffect } from 'react';

export const useCustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseEnter = () => {
      cursor.style.transform = 'scale(2.5)';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'scale(1)';
    };

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);

    // Add hover effect to glass cards
    const glassCards = document.querySelectorAll('.glass-card');
    glassCards.forEach((card) => {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      glassCards.forEach((card) => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
};
