import React from 'react';

const partners = [
  { name: 'Chevron', src: '/src/assets/maton/partners/chevron.png' },
  { name: 'Shell', src: '/src/assets/maton/partners/shell.png' },
  { name: 'Total', src: '/src/assets/maton/partners/total.png' },
  { name: 'Security', src: '/src/assets/maton/partners/security.png' },
  { name: 'TotalEnergies', src: '/src/assets/maton/partners/totalenergies.png' },
  { name: 'NNPC', src: '/src/assets/maton/partners/nnpc.png' },
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
