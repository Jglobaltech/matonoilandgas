import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowLeft, Send, CheckCircle, HelpCircle } from 'lucide-react';
import { getApiUrl } from '../utils/api';

interface JobDetails {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
  application_method: string;
  created_at: string;
}

interface JobResponse {
  status: string;
  job: JobDetails;
}

const JobDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<JobDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
    loadJobDetails();
  }, [id]);

  const loadJobDetails = async () => {
    if (!id) return;
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch(getApiUrl(`jobs.php?id=${id}`));
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error('This job listing does not exist or has expired.');
        }
        throw new Error('Failed to retrieve job details.');
      }
      const data: JobResponse = await res.json();
      setJob(data.job);
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An error occurred loading the job.');
    } finally {
      setIsLoading(false);
    }
  };

  // Utility to format newline text into clean paragraphs
  const formatText = (text: string) => {
    return text.split('\n').map((para, idx) => {
      const trimmed = para.trim();
      if (!trimmed) return null;
      
      // If it looks like a bullet point
      if (trimmed.startsWith('-') || trimmed.startsWith('•')) {
        return (
          <li key={idx} style={{ marginBottom: '8px', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
            {trimmed.substring(1).trim()}
          </li>
        );
      }
      
      return (
        <p key={idx} style={{ marginBottom: '16px', color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: '15px' }}>
          {trimmed}
        </p>
      );
    });
  };

  const isListText = (text: string) => {
    return text.split('\n').some(line => line.trim().startsWith('-') || line.trim().startsWith('•'));
  };

  if (isLoading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: '16px', paddingTop: '100px' }}>
        <div style={{ width: '40px', height: '40px', border: '3px solid rgba(0, 170, 95, 0.1)', borderTopColor: 'var(--color-primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <p style={{ color: 'var(--color-text-muted)', fontSize: '15px' }}>Loading job details...</p>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="job-detail-page" style={{ paddingTop: '80px' }}>
        <section style={{ padding: '120px 0', background: 'var(--color-bg-light)', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '600px' }}>
            <h2 style={{ textTransform: 'uppercase', marginBottom: '16px' }}>Listing Not Found</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '32px' }}>{error || 'The job listing you requested could not be located.'}</p>
            <Link to="/careers" className="btn btn-primary" style={{ width: 'auto', padding: '14px 32px', textDecoration: 'none' }}>
              Back to Careers
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="job-detail-page" style={{ paddingTop: '80px' }}>
      {/* Header Section */}
      <section style={{ 
        background: 'linear-gradient(rgba(5, 10, 5, 0.9), rgba(5, 10, 5, 0.95)), url(./images/pipeline-welding.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '100px 0 60px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <Link to="/careers" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
            <ArrowLeft size={16} /> Back to Careers
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ color: 'white', fontSize: 'clamp(32px, 6vw, 56px)', textTransform: 'uppercase', fontWeight: 900, marginTop: '8px' }}
          >
            {job.title}
          </motion.h1>
          
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginTop: '24px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={16} style={{ color: 'var(--color-primary)' }} /> {job.location}
            </span>
            {job.type !== 'Prefer not to say' && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={16} style={{ color: 'var(--color-primary)' }} /> {job.type}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main Details */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="job-detail-grid">
            
            {/* Description & Requirements Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <div>
                <h3 style={{ textTransform: 'uppercase', fontSize: '20px', fontWeight: 800, color: 'var(--color-dark)', borderBottom: '1px solid var(--color-gray)', paddingBottom: '12px', marginBottom: '24px' }}>
                  Role Overview
                </h3>
                <div>
                  {isListText(job.description) ? (
                    <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>{formatText(job.description)}</ul>
                  ) : (
                    formatText(job.description)
                  )}
                </div>
              </div>

              <div>
                <h3 style={{ textTransform: 'uppercase', fontSize: '20px', fontWeight: 800, color: 'var(--color-dark)', borderBottom: '1px solid var(--color-gray)', paddingBottom: '12px', marginBottom: '24px' }}>
                  Job Requirements
                </h3>
                <div>
                  {isListText(job.requirements) ? (
                    <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>{formatText(job.requirements)}</ul>
                  ) : (
                    formatText(job.requirements)
                  )}
                </div>
              </div>
            </div>

            {/* Application Method Sidebar */}
            <div className="job-detail-sidebar">
              <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-primary)', letterSpacing: '1.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Send size={12} /> Instructions
              </span>
              <h4 style={{ textTransform: 'uppercase', fontSize: '18px', fontWeight: 800, color: 'var(--color-dark)' }}>
                How to Apply
              </h4>
              
              <div style={{ color: 'var(--color-text-muted)', fontSize: '14px', lineHeight: 1.6 }}>
                {formatText(job.application_method)}
              </div>

              <div style={{ borderTop: '1px solid var(--color-gray)', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '13px' }}>
                  <CheckCircle size={16} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h5 style={{ textTransform: 'uppercase', fontWeight: 700, margin: 0 }}>Review Period</h5>
                    <p style={{ color: 'var(--color-text-muted)', margin: '4px 0 0' }}>Applications are typically reviewed within 7-14 business days.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '13px' }}>
                  <HelpCircle size={16} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h5 style={{ textTransform: 'uppercase', fontWeight: 700, margin: 0 }}>Need Assistance?</h5>
                    <p style={{ color: 'var(--color-text-muted)', margin: '4px 0 0' }}>Reach our hr department directly at info@matonoilandgas.com.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetailPage;
