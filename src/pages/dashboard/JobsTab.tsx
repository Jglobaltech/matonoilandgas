import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Edit3, ClipboardList, RefreshCw, Search } from 'lucide-react';
import { getApiUrl } from '../../utils/api';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  created_at: string;
}

interface JobDetails extends Job {
  description: string;
  requirements: string;
  application_method: string;
}

interface JobsTabProps {
  token: string;
}

const JobsTab: React.FC<JobsTabProps> = ({ token }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobsLoading, setJobsLoading] = useState<boolean>(false);
  
  // Job Form Modal/State
  const [isJobFormOpen, setIsJobFormOpen] = useState<boolean>(false);
  const [editingJobId, setEditingJobId] = useState<number | null>(null);
  const [jobFormData, setJobFormData] = useState({
    title: '',
    department: '',
    location: 'Warri, Delta State',
    type: 'Full-time',
    description: '',
    requirements: '',
    application_method: 'Interested candidates should send their comprehensive CV and cover letter to careers@matonoilandgas.com using the job title as the subject of the mail.'
  });
  const [jobFormError, setJobFormError] = useState<string>('');
  const [jobFormSubmitting, setJobFormSubmitting] = useState<boolean>(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setJobsLoading(true);
    try {
      const res = await fetch(getApiUrl('jobs.php'));
      const data = await res.json();
      if (res.ok && data.status === 'success') {
        setJobs(data.jobs || []);
      }
    } catch (e) {
      console.error('Failed to load jobs:', e);
    } finally {
      setJobsLoading(false);
    }
  };

  const handleOpenJobForm = async (jobId: number | null) => {
    setJobFormError('');
    if (jobId) {
      // Fetch details of specific job to edit
      setEditingJobId(jobId);
      try {
        const res = await fetch(getApiUrl(`jobs.php?id=${jobId}`));
        const data = await res.json();
        if (res.ok && data.status === 'success') {
          const j = data.job as JobDetails;
          setJobFormData({
            title: j.title,
            department: j.department,
            location: j.location,
            type: j.type,
            description: j.description,
            requirements: j.requirements,
            application_method: j.application_method
          });
          setIsJobFormOpen(true);
        }
      } catch (e) {
        console.error(e);
        alert('Failed to retrieve job details for editing.');
      }
    } else {
      setEditingJobId(null);
      setJobFormData({
        title: '',
        department: '',
        location: 'Warri, Delta State',
        type: 'Full-time',
        description: '',
        requirements: '',
        application_method: 'Interested candidates should send their comprehensive CV and cover letter to careers@matonoilandgas.com using the job title as the subject of the mail.'
      });
      setIsJobFormOpen(true);
    }
  };

  const handleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setJobFormError('');
    setJobFormSubmitting(true);

    const payload = {
      action: editingJobId ? 'update' : 'create',
      id: editingJobId,
      ...jobFormData
    };

    try {
      const res = await fetch(getApiUrl('jobs.php'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok && data.status === 'success') {
        setIsJobFormOpen(false);
        fetchJobs();
      } else {
        setJobFormError(data.message || 'Failed to submit job details.');
      }
    } catch (err) {
      console.error(err);
      setJobFormError('Connection error during job submission.');
    } finally {
      setJobFormSubmitting(false);
    }
  };

  const handleDeleteJob = async (jobId: number) => {
    if (!window.confirm('Are you sure you want to delete this job listing permanently?')) return;

    try {
      const res = await fetch(getApiUrl('jobs.php'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          action: 'delete',
          id: jobId
        })
      });

      const data = await res.json();

      if (res.ok && data.status === 'success') {
        fetchJobs();
      } else {
        alert(data.message || 'Failed to delete listing.');
      }
    } catch (e) {
      console.error(e);
      alert('Connection error occurred while deleting.');
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Modal Job Form Overlay */}
      <AnimatePresence>
        {isJobFormOpen && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1500,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="job-modal-container"
            >
              <h3 style={{ textTransform: 'uppercase', fontSize: '20px', fontWeight: 900, borderBottom: '1px solid var(--color-gray)', paddingBottom: '12px', marginBottom: '24px' }}>
                {editingJobId ? 'Edit Job Opening' : 'Create New Job Opening'}
              </h3>

              <form onSubmit={handleJobSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase' }}>Job Title</label>
                  <input
                    type="text"
                    value={jobFormData.title}
                    onChange={(e) => setJobFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="e.g. Pipeline Welding Inspector"
                    required
                    style={{ padding: '12px 14px', border: '1px solid var(--color-gray)', borderRadius: '5px', outline: 'none', fontSize: '14px' }}
                  />
                </div>

                <div className="job-modal-grid-2">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase' }}>Location</label>
                    <input
                      type="text"
                      value={jobFormData.location}
                      onChange={(e) => setJobFormData(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="e.g. Warri, Delta State"
                      required
                      style={{ padding: '12px 14px', border: '1px solid var(--color-gray)', borderRadius: '5px', outline: 'none', fontSize: '14px' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase' }}>Job Type</label>
                    <select
                      value={jobFormData.type}
                      onChange={(e) => setJobFormData(prev => ({ ...prev, type: e.target.value }))}
                      style={{ padding: '12px 14px', border: '1px solid var(--color-gray)', borderRadius: '5px', outline: 'none', fontSize: '14px', background: 'white' }}
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase' }}>Job Description</label>
                  <textarea
                     value={jobFormData.description}
                     onChange={(e) => setJobFormData(prev => ({ ...prev, description: e.target.value }))}
                     placeholder="Provide a detailed description of the role..."
                     rows={4}
                     required
                     style={{ padding: '12px 14px', border: '1px solid var(--color-gray)', borderRadius: '5px', outline: 'none', fontSize: '14px', fontFamily: 'var(--font-body)', resize: 'vertical' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase' }}>
                    Requirements & Qualifications (One per line)
                  </label>
                  <textarea
                    value={jobFormData.requirements}
                    onChange={(e) => setJobFormData(prev => ({ ...prev, requirements: e.target.value }))}
                    placeholder="e.g. Minimum of 5 years of pipeline field inspection experience.&#10;Certified Welding Inspector (CWI) credential."
                    rows={4}
                    required
                    style={{ padding: '12px 14px', border: '1px solid var(--color-gray)', borderRadius: '5px', outline: 'none', fontSize: '14px', fontFamily: 'var(--font-body)', resize: 'vertical' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase' }}>Application Instructions / Method</label>
                  <textarea
                    value={jobFormData.application_method}
                    onChange={(e) => setJobFormData(prev => ({ ...prev, application_method: e.target.value }))}
                    placeholder="Describe how candidates should apply..."
                    rows={3}
                    required
                    style={{ padding: '12px 14px', border: '1px solid var(--color-gray)', borderRadius: '5px', outline: 'none', fontSize: '14px', fontFamily: 'var(--font-body)', resize: 'vertical' }}
                  />
                </div>

                {jobFormError && (
                  <div style={{ padding: '12px', background: '#fff5f5', color: '#c53030', borderLeft: '3px solid #e53e3e', fontSize: '13px', borderRadius: '5px' }}>
                    {jobFormError}
                  </div>
                )}

                <div className="job-modal-actions">
                  <button
                    type="button"
                    onClick={() => setIsJobFormOpen(false)}
                    style={{ padding: '12px 24px', border: '1px solid var(--color-gray)', background: 'transparent', cursor: 'pointer', fontSize: '12px', fontWeight: 700, borderRadius: '5px' }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={jobFormSubmitting}
                    className="btn btn-primary"
                    style={{ padding: '12px 30px', fontSize: '12px', width: 'auto', borderRadius: '5px' }}
                  >
                    {jobFormSubmitting ? 'Saving...' : 'Save Job Opening'}
                  </button>
                </div>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Jobs Directory Panel */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Search, Date, and Filter Control Bar (Screenshot Style) */}
        <div style={{
          background: 'white',
          border: '1px solid #e2e8f0',
          borderRadius: '5px', // 5px border-radius
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          boxShadow: '0 4px 6px rgba(0,0,0,0.01)'
        }}>
          {/* Search Pill Input */}
          <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
            <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#a0aec0', display: 'flex' }}>
              <Search size={15} />
            </span>
            <input
              type="text"
              placeholder="Search for job openings by title, location or department..."
              style={{
                width: '100%',
                padding: '12px 16px 12px 48px',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '5px', // 5px border-radius
                outline: 'none',
                fontSize: '13px',
                color: '#2d3748',
                fontFamily: 'var(--font-body)'
              }}
            />
          </div>

          {/* Quick Date Inputs (Screenshot Style) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="DD/MM/YYYY"
                readOnly
                style={{
                  padding: '12px 14px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '5px', // 5px border-radius
                  fontSize: '12px',
                  textAlign: 'center',
                  width: '120px',
                  color: '#718096'
                }}
              />
            </div>
            <span style={{ color: '#cbd5e0' }}>/</span>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="DD/MM/YYYY"
                readOnly
                style={{
                  padding: '12px 14px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '5px', // 5px border-radius
                  fontSize: '12px',
                  textAlign: 'center',
                  width: '120px',
                  color: '#718096'
                }}
              />
            </div>
          </div>

          <button style={{
            background: '#041720',
            color: 'white',
            border: 'none',
            borderRadius: '0px', // Strict 0 border-radius
            padding: '12px 28px',
            fontSize: '12px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>
            Filter
          </button>

          {/* Refresh Arrow Button */}
          <button 
            onClick={fetchJobs}
            disabled={jobsLoading}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '5px', // 5px border-radius
              border: '1px solid #e2e8f0',
              background: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#718096',
              transition: '0.3s'
            }}
          >
            <RefreshCw size={15} className={jobsLoading ? "animate-spin" : ""} />
          </button>

          {/* Add Job Trigger */}
          <button
            onClick={() => handleOpenJobForm(null)}
            className="btn btn-primary"
            style={{
              padding: '12px 24px',
              fontSize: '11px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              borderRadius: '5px', // 5px border-radius
              width: 'auto'
            }}
          >
            Add New Job
          </button>
        </div>

        {/* Horizontal Scroll Wrapper for Mobile Viewports */}
        <div style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch', paddingBottom: '12px' }}>
          <div style={{ minWidth: '850px' }}>
            
            {/* Floating Table Column Headers */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '50px 1.5fr 1fr 1fr 80px',
              padding: '12px 28px',
              fontSize: '11px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: '#8c9ea6',
              alignItems: 'center'
            }}>
              <div></div>
              <div>Opening Info</div>
              <div>Type Badge</div>
              <div>Date Created</div>
              <div style={{ textAlign: 'right' }}>Actions</div>
            </div>

            {/* Row List Stack */}
            {jobsLoading ? (
              <div style={{ padding: '60px 0', textAlign: 'center', color: '#718096', background: 'white', border: '1px solid #e2e8f0', borderRadius: '5px' }}>
                Loading job listings...
              </div>
            ) : jobs.length === 0 ? (
              <div style={{ padding: '60px 0', textAlign: 'center', color: '#718096', background: 'white', border: '1px solid #e2e8f0', borderRadius: '5px' }}>
                <ClipboardList size={40} style={{ opacity: 0.3, marginBottom: '12px' }} />
                <p style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>No active openings listed.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {jobs.map((job) => {
                  // Extract initials from title (e.g. Pipeline Welder => PW)
                  const initials = job.title
                    .split(' ')
                    .map(word => word[0])
                    .join('')
                    .substring(0, 2)
                    .toUpperCase();

                  return (
                    <div 
                      key={job.id}
                      style={{
                        background: 'white',
                        border: '1px solid #eef2f5',
                        borderRadius: '5px', // 5px border-radius
                        padding: '18px 28px',
                        display: 'grid',
                        gridTemplateColumns: '50px 1.5fr 1fr 1fr 80px',
                        alignItems: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.015)',
                        transition: 'all 0.2s'
                      }}
                    >
                      {/* Initials Circle Indicator */}
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '5px', // 5px border-radius (Square badge)
                        background: 'rgba(0, 191, 165, 0.08)',
                        color: '#00bfa5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 800
                      }}>
                        {initials}
                      </div>

                      {/* Title & Location details */}
                      <div style={{ paddingRight: '16px' }}>
                        <h4 style={{ textTransform: 'uppercase', fontSize: '13px', fontWeight: 800, color: '#051f2b', margin: 0 }}>
                          {job.title}
                        </h4>
                        <span style={{ color: '#8c9ea6', fontSize: '11px', display: 'block', marginTop: '3px' }}>
                          {job.location}
                        </span>
                      </div>

                      {/* Badges for Job Type */}
                      <div>
                        <span style={{
                          border: '1px solid #00bfa5',
                          background: 'rgba(0, 191, 165, 0.03)',
                          color: '#00bfa5',
                          padding: '3px 10px',
                          borderRadius: '5px', // 5px border-radius
                          fontSize: '10px',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          {job.type}
                        </span>
                      </div>

                      {/* Date Created */}
                      <div style={{ fontSize: '12px', color: '#718096' }}>
                        {new Date(job.created_at).toLocaleDateString(undefined, {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        })}
                      </div>

                      {/* Actions Column */}
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                        <button
                          onClick={() => handleOpenJobForm(job.id)}
                          style={{
                            width: '32px',
                            height: '32px',
                            border: '1px solid #e2e8f0',
                            background: 'white',
                            borderRadius: '5px', // 5px border-radius
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#00bfa5',
                            transition: '0.3s'
                          }}
                          title="Edit Opening"
                        >
                          <Edit3 size={13} />
                        </button>
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          style={{
                            width: '32px',
                            height: '32px',
                            border: '1px solid #ffdede',
                            background: '#fff5f5',
                            borderRadius: '5px', // 5px border-radius
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#c53030',
                            transition: '0.3s'
                          }}
                          title="Delete Listing"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobsTab;
