import { useEffect, useState } from 'react';
import { planOptions } from '../../../../../../../content/selectPlanModal.content';
import type { PlanOption } from '../../../../../../../types/selectPlanModal.types';
import './SelectPlanModal.css';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function SelectPlanModal({ isOpen, onClose }: Props) {
  const [selectedPlan, setSelectedPlan] = useState<PlanOption['id']>('residential');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const header = document.querySelector<HTMLElement>('.header');
    if (!header) return;

    function applyHeaderState() {
      if (!isOpen) {
        header!.style.filter = '';
        header!.style.display = '';
        return;
      }
      if (window.innerWidth <= 767) {
        header!.style.display = 'none';
        header!.style.filter = '';
      } else {
        header!.style.display = '';
        header!.style.filter = 'blur(8px)';
      }
    }

    applyHeaderState();
    document.body.style.overflow = isOpen ? 'hidden' : '';
    window.addEventListener('resize', applyHeaderState);

    return () => {
      document.body.style.overflow = '';
      header.style.filter = '';
      header.style.display = '';
      window.removeEventListener('resize', applyHeaderState);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="select-plan-overlay" onClick={onClose} />
      <div className={`select-plan-modal${selectedPlan === 'roam' ? ' select-plan-modal--roam' : ''}`}>
        <button className="select-plan-modal__close" aria-label="Close" onClick={onClose}>
          ✕
        </button>

        <h2 className="select-plan-modal__title">Select a plan.</h2>

        <div className="select-plan-modal__options">
          {planOptions.map((plan) => (
            <button
              key={plan.id}
              className={`select-plan-modal__option${
                selectedPlan === plan.id ? ' select-plan-modal__option--active' : ''
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <span className="select-plan-modal__option-title">{plan.title}</span>
              <span className="select-plan-modal__option-desc">{plan.description}</span>
            </button>
          ))}
        </div>

        {selectedPlan === 'residential' && (
          <>
            <h3 className="select-plan-modal__subtitle">Where will you use Starlink?</h3>

            <input
              type="text"
              className="select-plan-modal__input"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </>
        )}

        <button
          className={`select-plan-modal__submit${
            selectedPlan === 'roam' ? ' select-plan-modal__submit--roam' : ''
          }`}
        >
          View Plans
        </button>
      </div>
    </>
  );
}