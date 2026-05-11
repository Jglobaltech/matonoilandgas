import React from 'react';

import chevron from '../assets/maton/partners/chevron.png';
import shell from '../assets/maton/partners/shell.png';
import total from '../assets/maton/partners/total.png';
import security from '../assets/maton/partners/security.png';
import totalenergies from '../assets/maton/partners/totalenergies.png';
import nnpc from '../assets/maton/partners/nnpc.png';

const partners = [
  { name: 'Chevron', src: chevron },
  { name: 'Shell', src: shell },
  { name: 'Total', src: total },
  { name: 'Security', src: security },
  { name: 'TotalEnergies', src: totalenergies },
  { name: 'NNPC', src: nnpc },
];

/**
 * Infinite marquee — duplicates the logo list so the animation
 * seamlessly loops without gaps.
 */
const TrustBar: React.FC = () => {
  return (
    <section style={{ padding: '48px 0', background: 'var(--color-white)', borderBottom: '1px solid var(--color-gray)', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ 
          color: 'var(--color-text-muted)', 
          fontSize: '11px', 
          fontWeight: 700, 
          textTransform: 'uppercase', 
          letterSpacing: '0.4em', 
          marginBottom: '32px' 
        }}>
          In partnership with global energy leaders
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* First set */}
          {partners.map((partner) => (
            <img 
              key={partner.name} 
              src={partner.src} 
              alt={partner.name} 
              className="marquee-logo"
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner) => (
            <img 
              key={`dup-${partner.name}`} 
              src={partner.src} 
              alt={partner.name} 
              className="marquee-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
