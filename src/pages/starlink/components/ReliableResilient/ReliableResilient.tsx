

import { reliableContent } from '../../../../content/reliablecontent.content';
import { StarlinkButton } from '../StarlinkButton/StarlinkButton';
import './ReliableResilient.css';
import "./ReliableResilientBackground/ReliableBackground.css";

export function ReliableResilient() {
  return (
    <div className="starlink-section__content">
      <h1 className="starlink-section__title">{reliableContent.title}</h1>
      <p className="starlink-section__lable">{reliableContent.description}</p>
      <div className="starlink-section__actions">
        <StarlinkButton label="Learn More" href="/learn-more" variant="primary" />
      </div>
    </div>
  );
}