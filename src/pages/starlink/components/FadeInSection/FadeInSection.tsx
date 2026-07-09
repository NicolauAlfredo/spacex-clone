// Wrapper riusabile: fa comparire i figli con fade-in scaglionato quando la sezione entra in vista
import { useInView } from '../FadeInSection/useInView'; 
import './FadeInSection.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function FadeInSection({ children, className = '' }: Props) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    // aggiunge "is-visible" solo quando l'elemento è entrato in viewport
    <div className={`${className}${isInView ? ' is-visible' : ''}`} ref={ref}>
      {children}
    </div>
  );
}