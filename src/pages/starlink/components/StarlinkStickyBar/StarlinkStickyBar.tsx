import { useEffect, useState } from 'react';
import { StarlinkLogo } from '../StarlinkLogo/StarlinkLogo';
import { StarlinkButton } from '../StarlinkButton/StarlinkButton';
import './StarlinkStickyBar.css';

export function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // osserva l'elemento con id="hero-actions" (i bottoni get started/view pricing)
    const target = document.getElementById('hero-actions');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // quando l'elemento NON è più visibile (scrollato oltre), mostra la barra
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sticky-bar">
      <StarlinkLogo />
      <StarlinkButton label="Get Started" href="https://www.starlink.com/residential" variant="primary" />
    </div>
  );
}
