import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost/maton-oil-gas/backend/email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Failed to send message. Please check your connection.');
    }
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--color-bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px' }}>
          <span className="section-tag">Get in Touch</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', textTransform: 'uppercase' }}>
            Contact <span style={{ color: 'var(--color-primary)' }}>Us.</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', marginTop: '16px' }}>
            We're always interested in new projects, big or small. Don't hesitate to get in touch.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px'
        }}>
          {/* Contact Info */}
          <div>
            <h3 style={{ fontSize: '20px', textTransform: 'uppercase', marginBottom: '32px' }}>Reach Us</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(0, 170, 95, 0.08)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  flexShrink: 0
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', textTransform: 'uppercase', marginBottom: '4px' }}>Phone</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '15px' }}>+234 703 581 8163</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(0, 170, 95, 0.08)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  flexShrink: 0
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', textTransform: 'uppercase', marginBottom: '4px' }}>Email</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '15px' }}>info@matonoilandgas.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(0, 170, 95, 0.08)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  flexShrink: 0
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', textTransform: 'uppercase', marginBottom: '4px' }}>Location</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '15px' }}>Matthew Tonlagha Villa Benikrukru Community, Gbaramatu Kingdom, Delta State</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: 'var(--color-white)',
            padding: '40px',
            borderRadius: 'var(--radius-premium)',
            boxShadow: 'var(--shadow-soft)',
            border: '1px solid var(--color-gray)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h3 style={{ fontSize: '20px', textTransform: 'uppercase', marginBottom: '32px' }}>Send a Message</h3>
            
            {status === 'success' ? (
              <div style={{ 
                textAlign: 'center', 
                padding: '40px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}>
                <CheckCircle2 size={64} color="var(--color-primary)" />
                <h4 style={{ textTransform: 'uppercase' }}>Message Sent!</h4>
                <p style={{ color: 'var(--color-text-muted)' }}>Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => setStatus('idle')}
                  style={{ marginTop: '20px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    style={{
                      padding: '14px 16px',
                      border: '1px solid var(--color-gray)',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      outline: 'none',
                      width: '100%'
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    style={{
                      padding: '14px 16px',
                      border: '1px solid var(--color-gray)',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      outline: 'none',
                      width: '100%'
                    }}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  style={{
                    padding: '14px 16px',
                    border: '1px solid var(--color-gray)',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    outline: 'none',
                    width: '100%'
                  }}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                  style={{
                    padding: '14px 16px',
                    border: '1px solid var(--color-gray)',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical',
                    width: '100%'
                  }}
                />
                
                {status === 'error' && (
                  <div style={{ 
                    display: 'flex', 
                    gap: '8px', 
                    alignItems: 'center', 
                    color: '#e53e3e', 
                    fontSize: '14px',
                    background: 'rgba(229, 62, 62, 0.05)',
                    padding: '12px',
                    borderRadius: '4px'
                  }}>
                    <AlertCircle size={16} />
                    {errorMessage}
                  </div>
                )}

                <button 
                  className="btn btn-primary" 
                  type="submit" 
                  disabled={status === 'submitting'}
                  style={{ gap: '8px', justifyContent: 'center' }}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

