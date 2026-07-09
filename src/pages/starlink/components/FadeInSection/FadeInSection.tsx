import { useInView } from '../FadeInSection/useInView'; 
import './FadeInSection.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function FadeInSection({ children, className = '' }: Props) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div className={`${className}${isInView ? ' is-visible' : ''}`} ref={ref}>
      {children}
    </div>
  );
}