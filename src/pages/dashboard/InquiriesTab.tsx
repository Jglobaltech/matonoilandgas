import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, RefreshCw } from 'lucide-react';
import { getApiUrl } from '../../utils/api';

interface Inquiry {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

interface InquiriesTabProps {
  token: string;
}

const InquiriesTab: React.FC<InquiriesTabProps> = ({ token }) => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [inquiriesLoading, setInquiriesLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setInquiriesLoading(true);
    try {
      const res = await fetch(getApiUrl('settings.php?action=inquiries'), {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (res.ok && data.status === 'success') {
        setInquiries(data.inquiries || []);
      }
    } catch (e) {
      console.error('Failed to load inquiries:', e);
    } finally {
      setInquiriesLoading(false);
    }
  };

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const filteredInquiries = inquiries.filter(inq => 
    inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inq.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inq.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Search and Action Bar */}
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
        <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
          <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#a0aec0', display: 'flex' }}>
            <Clock size={15} />
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search through messages, names, or emails..."
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

        <button 
          onClick={fetchInquiries}
          disabled={inquiriesLoading}
          style={{
            height: '42px',
            borderRadius: '5px', // 5px border-radius
            border: '1px solid #e2e8f0',
            background: 'white',
            padding: '0 20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#718096',
            fontSize: '12px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            transition: '0.3s'
          }}
        >
          <RefreshCw size={14} className={inquiriesLoading ? "animate-spin" : ""} /> Refresh
        </button>
      </div>

      {/* Horizontal Scroll Wrapper for Mobile Viewports */}
      <div style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch', paddingBottom: '12px' }}>
        <div style={{ minWidth: '850px' }}>
          
          {/* Column Headers */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '50px 1.5fr 1fr 1fr 120px',
            padding: '12px 28px',
            fontSize: '11px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: '#8c9ea6',
            alignItems: 'center'
          }}>
            <div></div>
            <div>Inquirer Info</div>
            <div>Subject Line</div>
            <div>Date Logged</div>
            <div style={{ textAlign: 'right' }}>Actions</div>
          </div>

          {/* Row Card List */}
          {inquiriesLoading ? (
            <div style={{ padding: '60px 0', textAlign: 'center', color: '#718096', background: 'white', border: '1px solid #e2e8f0', borderRadius: '5px' }}>
              Retrieving inquiries log...
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div style={{ padding: '60px 0', textAlign: 'center', color: '#718096', background: 'white', border: '1px solid #e2e8f0', borderRadius: '5px' }}>
              <p style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>No contact form enquiries matched your search.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredInquiries.map((inq) => {
                const initials = inq.name
                  .split(' ')
                  .map(word => word[0])
                  .join('')
                  .substring(0, 2)
                  .toUpperCase();

                const isExpanded = expandedId === inq.id;

                return (
                  <div 
                    key={inq.id}
                    style={{
                      background: 'white',
                      border: '1px solid #eef2f5',
                      borderRadius: '5px', // 5px border-radius
                      boxShadow: '0 2px 8px rgba(0,0,0,0.015)',
                      transition: 'all 0.2s',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Horizontal Header Row Card */}
                    <div 
                      onClick={() => toggleExpand(inq.id)}
                      style={{
                        padding: '18px 28px',
                        display: 'grid',
                        gridTemplateColumns: '50px 1.5fr 1fr 1fr 120px',
                        alignItems: 'center',
                        cursor: 'pointer',
                        background: isExpanded ? '#fafcfe' : 'white'
                      }}
                    >
                      {/* Initials Square Badge */}
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '5px', // 5px border-radius
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

                      {/* Submitter Info */}
                      <div style={{ paddingRight: '16px' }}>
                        <h4 style={{ textTransform: 'uppercase', fontSize: '13px', fontWeight: 800, color: '#051f2b', margin: 0 }}>
                          {inq.name}
                        </h4>
                        <span style={{ color: '#8c9ea6', fontSize: '11px', display: 'block', marginTop: '3px' }}>
                          {inq.email}
                        </span>
                      </div>

                      {/* Subject Line */}
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#4a5568', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', paddingRight: '16px' }}>
                        {inq.subject}
                      </div>

                      {/* Date Created */}
                      <div style={{ fontSize: '12px', color: '#718096' }}>
                        {new Date(inq.created_at).toLocaleDateString(undefined, {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        })}
                      </div>

                      {/* Expand / Collapse Action */}
                      <div style={{ textAlign: 'right' }}>
                        <span style={{
                          display: 'inline-block',
                          background: isExpanded ? '#00bfa5' : '#f0f3f6',
                          color: isExpanded ? 'white' : '#718096',
                          fontSize: '10px',
                          fontWeight: 800,
                          padding: '6px 14px',
                          borderRadius: '5px', // 5px border-radius
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          transition: 'all 0.3s'
                        }}>
                          {isExpanded ? 'Collapse' : 'View Message'}
                        </span>
                      </div>
                    </div>

                    {/* Expanded Drawer Area containing message */}
                    {isExpanded && (
                      <div style={{
                        padding: '24px 28px',
                        background: '#f8fafc',
                        borderTop: '1px solid #eef2f5',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <h5 style={{ textTransform: 'uppercase', fontSize: '11px', fontWeight: 800, color: '#8c9ea6', margin: 0 }}>
                            Logged Message Body
                          </h5>
                          <span style={{ fontSize: '11px', color: '#a0aec0' }}>
                            Timestamp: {new Date(inq.created_at).toLocaleString()}
                          </span>
                        </div>

                        <div style={{
                          background: 'white',
                          border: '1px solid #e2e8f0',
                          borderRadius: '5px', // 5px border-radius
                          padding: '20px',
                          fontSize: '13px',
                          lineHeight: '1.7',
                          color: '#2d3748',
                          whiteSpace: 'pre-wrap',
                          fontFamily: 'var(--font-body)'
                        }}>
                          {inq.message}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default InquiriesTab;
