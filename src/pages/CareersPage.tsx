import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Calendar, AlertTriangle } from 'lucide-react';
import TrustBar from '../sections/TrustBar';
import { getApiUrl } from '../utils/api';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  created_at: string;
}

interface SettingsResponse {
  status: string;
  settings: {
    careers_visible: string;
    contact_phone: string;
  };
}

interface JobsResponse {
  status: string;
  jobs: Job[];
}

const CareersPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isCareersVisible, setIsCareersVisible] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    setError('');
    try {
      // 1. Fetch system visibility setting
      const settingsRes = await fetch(getApiUrl('settings.php?action=public'));
      if (!settingsRes.ok) throw new Error('Failed to load portal configuration.');
      const settingsData: SettingsResponse = await settingsRes.json();
      
      const visible = settingsData.settings.careers_visible !== '0';
      setIsCareersVisible(visible);

      if (!visible) {
        setIsLoading(false);
        return;
      }

      // 2. Fetch active job listings
      const jobsRes = await fetch(getApiUrl('jobs.php'));
      if (!jobsRes.ok) throw new Error('Failed to load active job opportunities.');
      const jobsData: JobsResponse = await jobsRes.json();

      setJobs(jobsData.jobs || []);
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: '16px', paddingTop: '100px' }}>
        <div style={{ width: '40px', height: '40px', border: '3px solid rgba(0, 170, 95, 0.1)', borderTopColor: 'var(--color-primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <p style={{ color: 'var(--color-text-muted)', fontSize: '15px' }}>Loading open opportunities...</p>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // If the admin has disabled careers, display a clean, elegant notice page
  if (!isCareersVisible) {
    return (
      <div className="careers-page" style={{ paddingTop: '80px' }}>
        <section style={{ padding: '160px 0', background: 'var(--color-bg-light)', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '600px' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              <AlertTriangle size={64} style={{ color: 'var(--color-primary)' }} />
              <h1 style={{ textTransform: 'uppercase', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900 }}>Career Portal <span style={{ color: 'var(--color-primary)' }}>Closed.</span></h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', lineHeight: 1.7 }}>
                Our recruitment portal is currently closed as we have filled all open vacancies. Please check back later or send your open CV directly to our email address for future consideration.
              </p>
              <Link to="/" className="btn btn-primary" style={{ width: 'auto', padding: '14px 32px' }}>
                Back to Home
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="careers-page" style={{ paddingTop: '80px' }}>
      {/* Header Section */}
      <section style={{ 
        background: 'linear-gradient(rgba(5, 10, 5, 0.9), rgba(5, 10, 5, 0.95)), url(./images/oilandgas.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '120px 0 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'rgba(0, 170, 95, 0.05)',
          transform: 'translateX(20%) skewX(-20deg)'
        }} />
        
        <div className="container">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-tag"
            style={{ color: 'var(--color-primary-light)' }}
          >
            Careers & Growth
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ color: 'white', fontSize: 'clamp(40px, 8vw, 72px)', textTransform: 'uppercase', fontWeight: 900 }}
          >
            Join Our <span style={{ color: 'var(--color-primary)' }}>Team.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'rgba(255,255,255,0.6)', fontSize: '20px', maxWidth: '600px', marginTop: '24px' }}
          >
            Build a sustainable career in global engineering and energy solutions. We foster innovation, safety, and community leadership.
          </motion.p>
        </div>
      </section>

      {/* Trust bar */}
      <TrustBar />

      {/* Main Listing Section */}
      <section className="section" style={{ background: 'var(--color-bg-light)', minHeight: '500px' }}>
        <div className="container">
          {error ? (
            <div style={{ padding: '30px', background: '#ffe3e3', borderLeft: '4px solid #e53e3e', color: '#c53030', borderRadius: '4px' }}>
              <strong>Error:</strong> {error}
            </div>
          ) : (
            <div>
              {/* Jobs List */}
              {jobs.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 40px', background: 'white', border: '1px solid var(--color-gray)', borderRadius: 'var(--radius-premium)' }}>
                  <Briefcase size={48} style={{ color: 'var(--color-text-muted)', opacity: 0.5, marginBottom: '16px' }} />
                  <h3 style={{ textTransform: 'uppercase', marginBottom: '8px', fontWeight: 800 }}>No Vacancies Found</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>No active openings currently found. Please check back later!</p>
                </div>
              ) : (
                <div style={{ display: 'grid', gap: '20px' }}>
                  {jobs.map((job) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="career-card"
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, minWidth: '280px' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-dark)', margin: 0 }}>{job.title}</h3>
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', color: 'var(--color-text-muted)', fontSize: '13px' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <MapPin size={14} /> {job.location}
                          </span>
                          {job.type !== 'Prefer not to say' && (
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <Calendar size={14} /> {job.type}
                            </span>
                          )}
                        </div>
                        <p style={{
                          color: 'var(--color-text-muted)',
                          fontSize: '14px',
                          lineHeight: '1.6',
                          margin: '6px 0 0',
                          display: '-webkit-box',
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>
                          {job.description}
                        </p>
                      </div>
                      <div className="career-card-btn-wrap">
                        <Link to={`/careers/${job.id}`} className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '12px', width: 'auto', display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>
                          View Details & Apply →
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
