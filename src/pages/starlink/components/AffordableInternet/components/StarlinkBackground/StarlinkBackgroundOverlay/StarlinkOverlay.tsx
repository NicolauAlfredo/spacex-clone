import './StarlinkOverlay.css';

type Props = {
  variant: 'best-value' | 'reliable';
};

export const StarlinkOverlay = ({ variant }: Props) => {
  return <div className={`starlink-section__overlay starlink-section__overlay--${variant}`} />;
};