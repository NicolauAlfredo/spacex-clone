import { useEffect, useRef, useState } from 'react';
// <T extends HTMLElement> = il hook è generico: funziona con qualsiasi tipo di elemento HTML
// threshold = 0.2 significa: considera l'elemento "in vista" quando almeno il 20% di esso è visibile.
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {  
    const el = ref.current; 
    if (!el) return; // elemento non ancora montato, esci
                    

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);  // elemento visibile: aggiorna stato
          observer.disconnect(); // anima solo una volta
        }
      },
      { threshold }
    );

    observer.observe(el); // inizia a osservare
    return () => observer.disconnect(); // cleanup se il componente si smonta
  }, [threshold]);

  return { ref, isInView }; // ref da collegare al JSX, isInView per lo stile condizionale
}