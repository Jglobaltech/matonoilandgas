import React, { useState, useEffect } from 'react';
import { LogOut, Menu, Search, Settings, Briefcase, Mail, X } from 'lucide-react';
import Login from './Login';
import SettingsTab from './SettingsTab';
import JobsTab from './JobsTab';
import InquiriesTab from './InquiriesTab';
import { getApiUrl } from '../../utils/api';

const DashboardPage: React.FC = () => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const [username, setUsername] = useState<string>('admin');

  // Active Tab
  const [activeTab, setActiveTab] = useState<'settings' | 'jobs' | 'inquiries'>('jobs');

  // Responsive Drawer/Sidebar state
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Dynamic counts for tab badges
  const [jobsCount, setJobsCount] = useState<number>(0);
  const [inquiriesCount, setInquiriesCount] = useState<number>(0);

  // Auto-Check Session on Mount
  useEffect(() => {
    const savedToken = localStorage.getItem('maton_admin_token');
    const savedUser = localStorage.getItem('maton_admin_user');
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUsername(savedUser);
      setIsAuthenticated(true);
    } else {
      checkSessionStatus();
    }
  }, []);

  // Window resize handler for mobile responsiveness
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Run on mount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch counts when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchCounts();
    }
  }, [isAuthenticated]);

  const checkSessionStatus = async () => {
    try {
      const res = await fetch(getApiUrl('auth.php?action=check'));
      const data = await res.json();
      if (res.ok && data.authenticated) {
        setIsAuthenticated(true);
        setUsername(data.username);
      }
    } catch (e) {
      console.error('Session check failed:', e);
    }
  };

  const fetchCounts = async () => {
    try {
      // Fetch jobs count
      const jobsRes = await fetch(getApiUrl('jobs.php'));
      const jobsData = await jobsRes.json();
      if (jobsRes.ok && jobsData.status === 'success') {
        setJobsCount(jobsData.jobs ? jobsData.jobs.length : 0);
      }

      // Fetch inquiries count
      const inqRes = await fetch(getApiUrl('settings.php?action=inquiries'), {
        headers: { 'Authorization': `Bearer ${token || localStorage.getItem('maton_admin_token')}` }
      });
      const inqData = await inqRes.json();
      if (inqRes.ok && inqData.status === 'success') {
        setInquiriesCount(inqData.inquiries ? inqData.inquiries.length : 0);
      }
    } catch (e) {
      console.error('Failed to retrieve item counts:', e);
    }
  };

  const handleLoginSuccess = (userToken: string, userLoginName: string) => {
    setToken(userToken);
    setUsername(userLoginName);
    setIsAuthenticated(true);
    localStorage.setItem('maton_admin_token', userToken);
    localStorage.setItem('maton_admin_user', userLoginName);
  };

  const handleLogout = async () => {
    try {
      await fetch(getApiUrl('auth.php'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'logout' })
      });
    } catch (e) {
      console.error('Logout API call failed:', e);
    }
    
    setIsAuthenticated(false);
    setToken('');
    localStorage.removeItem('maton_admin_token');
    localStorage.removeItem('maton_admin_user');
  };

  // Close dynamic mobile sidebar after clicking a menu option
  const handleMenuClick = (tab: 'settings' | 'jobs' | 'inquiries') => {
    setActiveTab(tab);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  // View: Login View
  if (!isAuthenticated) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div style={{ background: '#f5f7f8', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. Dark Slate Navy Master Header */}
      <header style={{
        background: '#041720',
        height: '74px',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1200,
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '0px' // Sharp brutalist corner
      }}>
        {/* Left Side: Hamburger Trigger & Search Box */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isSidebarOpen && isMobile ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div style={{ position: 'relative', width: '100%', maxWidth: '300px', display: isMobile ? 'none' : 'block' }}>
            <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)', display: 'flex' }}>
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search option logs..."
              style={{
                width: '100%',
                padding: '10px 16px 10px 44px',
                background: 'rgba(255,255,255,0.05)',
                border: 'none',
                borderRadius: '5px', // 5px border-radius
                outline: 'none',
                color: 'white',
                fontSize: '13px',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => e.target.style.background = 'rgba(255,255,255,0.08)'}
              onBlur={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
            />
          </div>
        </div>

        {/* Right Side: User Profile & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          
          {/* User profile card widget */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '16px' }}>
            <div style={{ textAlign: 'right', display: isMobile ? 'none' : 'block' }}>
              <h4 style={{ color: 'white', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', margin: 0, letterSpacing: '0.5px' }}>
                {username}
              </h4>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginTop: '2px' }}>
                Admin Console
              </span>
            </div>
            
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%', // Circular avatar
              border: '2px solid #00bfa5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 191, 165, 0.1)',
              color: '#00bfa5',
              fontSize: '12px',
              fontWeight: 800
            }}>
              AD
            </div>

            <button 
              onClick={handleLogout}
              title="Sign Out"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: '0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#e53e3e'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >
              <LogOut size={16} />
            </button>
          </div>

        </div>
      </header>

      {/* 2. Responsive Layout Setup */}
      <div style={{ display: 'flex', flex: 1, position: 'relative', overflowX: 'hidden' }}>
        
        {/* Mobile Sidebar Backdrop Overlay */}
        {isMobile && isSidebarOpen && (
          <div 
            onClick={() => setIsSidebarOpen(false)}
            style={{
              position: 'fixed',
              top: '74px',
              left: 0,
              width: '100%',
              height: 'calc(100vh - 74px)',
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(3px)',
              zIndex: 1099,
              transition: 'opacity 0.3s'
            }}
          />
        )}

        {/* Responsive Sidebar Component (Strict 0 Border-Radius) */}
        <aside style={{
          position: 'fixed',
          top: '74px',
          left: isSidebarOpen ? 0 : '-260px',
          width: '260px',
          height: 'calc(100vh - 74px)',
          background: '#041720',
          borderRight: '1px solid rgba(255,255,255,0.05)',
          zIndex: 1100,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '24px 16px',
          boxShadow: '4px 0 15px rgba(0,0,0,0.05)',
          transition: 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          borderRadius: '0px' // Strict 0 border-radius
        }}>
          {/* Sidebar Menu Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ padding: '0 12px 16px 12px', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '16px' }}>
              <h5 style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
                System Directories
              </h5>
            </div>

            <button
              onClick={() => handleMenuClick('jobs')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 16px',
                border: 'none',
                background: activeTab === 'jobs' ? 'rgba(0,191,165,0.1)' : 'transparent',
                color: activeTab === 'jobs' ? '#00bfa5' : 'rgba(255,255,255,0.6)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                textAlign: 'left',
                borderRadius: '5px', // 5px border-radius
                cursor: 'pointer',
                transition: 'all 0.2s',
                borderLeft: activeTab === 'jobs' ? '4px solid #00bfa5' : '4px solid transparent'
              }}
            >
              <Briefcase size={16} />
              <span style={{ flex: 1 }}>Careers</span>
              <span style={{
                background: activeTab === 'jobs' ? 'rgba(0,191,165,0.15)' : 'rgba(255,255,255,0.05)',
                color: activeTab === 'jobs' ? '#00bfa5' : 'rgba(255,255,255,0.4)',
                padding: '2px 8px',
                fontSize: '11px',
                fontWeight: 700,
                borderRadius: '5px' // 5px border-radius
              }}>
                {jobsCount}
              </span>
            </button>

            <button
              onClick={() => handleMenuClick('inquiries')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 16px',
                border: 'none',
                background: activeTab === 'inquiries' ? 'rgba(0,191,165,0.1)' : 'transparent',
                color: activeTab === 'inquiries' ? '#00bfa5' : 'rgba(255,255,255,0.6)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                textAlign: 'left',
                borderRadius: '5px', // 5px border-radius
                cursor: 'pointer',
                transition: 'all 0.2s',
                borderLeft: activeTab === 'inquiries' ? '4px solid #00bfa5' : '4px solid transparent'
              }}
            >
              <Mail size={16} />
              <span style={{ flex: 1 }}>Inquiries</span>
              <span style={{
                background: activeTab === 'inquiries' ? 'rgba(0,191,165,0.15)' : 'rgba(255,255,255,0.05)',
                color: activeTab === 'inquiries' ? '#00bfa5' : 'rgba(255,255,255,0.4)',
                padding: '2px 8px',
                fontSize: '11px',
                fontWeight: 700,
                borderRadius: '5px' // 5px border-radius
              }}>
                {inquiriesCount}
              </span>
            </button>

            <button
              onClick={() => handleMenuClick('settings')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 16px',
                border: 'none',
                background: activeTab === 'settings' ? 'rgba(0,191,165,0.1)' : 'transparent',
                color: activeTab === 'settings' ? '#00bfa5' : 'rgba(255,255,255,0.6)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                textAlign: 'left',
                borderRadius: '5px', // 5px border-radius
                cursor: 'pointer',
                transition: 'all 0.2s',
                borderLeft: activeTab === 'settings' ? '4px solid #00bfa5' : '4px solid transparent'
              }}
            >
              <Settings size={16} />
              <span>Settings</span>
            </button>
          </div>

          {/* Logout Sidebar Footer Widget */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 8px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: '#00bfa5',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: 800,
                borderRadius: '50%' // Circular avatar
              }}>
                AD
              </div>
              <div style={{ overflow: 'hidden' }}>
                <span style={{ color: 'white', fontSize: '12px', fontWeight: 800, display: 'block', textTransform: 'uppercase' }}>
                  {username}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', display: 'block', textTransform: 'uppercase' }}>
                  Active Console
                </span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid rgba(229,62,62,0.2)',
                background: 'rgba(229,62,62,0.05)',
                color: '#ff8a8a',
                fontSize: '11px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                borderRadius: '5px', // 5px border-radius
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(229,62,62,0.15)';
                e.currentTarget.style.color = '#ff6b6b';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(229,62,62,0.05)';
                e.currentTarget.style.color = '#ff8a8a';
              }}
            >
              <LogOut size={13} />
              Sign Out Securely
            </button>
          </div>
        </aside>

        {/* 3. Main Workspace Container Panel */}
        <main style={{ 
          flex: 1, 
          minWidth: '0px', // Prevent parent flexbox from expanding beyond screen width
          overflow: 'hidden', // Contain horizontal overflow cleanly
          paddingTop: '106px', 
          paddingBottom: '80px',
          paddingLeft: isMobile ? '24px' : (isSidebarOpen ? '284px' : '24px'), // Dynamic fold/expand transition
          paddingRight: '24px',
          transition: 'padding-left 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <div style={{ width: '100%', overflowX: 'hidden' }}>
            
            {/* Header Row: Title & Subtitle */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start', 
              flexWrap: 'wrap', 
              gap: '16px', 
              marginBottom: '32px',
              borderBottom: '2px solid #e5ecef',
              paddingBottom: '20px'
            }}>
              <div>
                <h1 style={{
                  fontFamily: 'var(--font-heading)',
                  textTransform: 'uppercase',
                  fontSize: '28px',
                  fontWeight: 900,
                  color: '#051f2b',
                  letterSpacing: '-0.5px',
                  margin: 0
                }}>
                  {activeTab === 'settings' && 'Portal Settings'}
                  {activeTab === 'jobs' && 'Careers'}
                  {activeTab === 'inquiries' && 'Contact Inquiries'}
                </h1>
                <p style={{ color: '#8c9ea6', fontSize: '13px', marginTop: '6px', margin: '6px 0 0 0' }}>
                  {activeTab === 'settings' && 'Configure dynamic controls, active telephone numbers, and visibility settings.'}
                  {activeTab === 'jobs' && 'View and manage all active job opening listings.'}
                  {activeTab === 'inquiries' && 'Monitor website contact submissions and logged customer enquiries.'}
                </p>
              </div>
              
              {/* Quick Action Info Status */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{
                  background: 'rgba(0,191,165,0.08)',
                  color: '#00bfa5',
                  padding: '6px 14px',
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderRadius: '5px' // 5px border-radius
                }}>
                  Console Active
                </span>
              </div>
            </div>

            {/* 4. Active Section Component Display */}
            <div style={{ minHeight: '400px' }}>
              {activeTab === 'settings' && <SettingsTab token={token} />}
              {activeTab === 'jobs' && <JobsTab token={token} />}
              {activeTab === 'inquiries' && <InquiriesTab token={token} />}
            </div>

          </div>
        </main>
      </div>

    </div>
  );
};

export default DashboardPage;
