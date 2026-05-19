import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { getApiUrl } from '../../utils/api';

interface SettingsMap {
  careers_visible: string;
  contact_phone: string;
  recipient_email: string;
}

interface SettingsTabProps {
  token: string;
}

const SettingsTab: React.FC<SettingsTabProps> = ({ token }) => {
  const [settings, setSettings] = useState<SettingsMap>({ 
    careers_visible: '1', 
    contact_phone: '',
    recipient_email: ''
  });
  const [settingsLoading, setSettingsLoading] = useState<boolean>(false);
  const [settingsMessage, setSettingsMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch(getApiUrl('settings.php?action=public'));
      const data = await res.json();
      if (res.ok && data.status === 'success') {
        setSettings({
          careers_visible: data.settings.careers_visible || '1',
          contact_phone: data.settings.contact_phone || '',
          recipient_email: data.settings.recipient_email || 'info@matonoilandgas.com'
        });
      }
    } catch (e) {
      console.error('Failed to load settings:', e);
    }
  };

  const toggleCareersPortal = async () => {
    const newValue = settings.careers_visible === '1' ? '0' : '1';
    
    // Update local state instantly for premium visual experience
    setSettings(prev => ({ ...prev, careers_visible: newValue }));
    
    try {
      const res = await fetch(getApiUrl('settings.php'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          action: 'update_settings',
          careers_visible: newValue,
          // Always send current active settings so they are not blanked in settings.php
          contact_phone: settings.contact_phone || '+234 913 444 9881',
          recipient_email: settings.recipient_email || 'info@matonoilandgas.com'
        })
      });

      const data = await res.json();
      if (res.ok && data.status === 'success') {
        setSettingsMessage({ type: 'success', text: `Portal visibility is now ${newValue === '1' ? 'ENABLED' : 'DISABLED'}.` });
        setTimeout(() => setSettingsMessage(null), 3000);
      } else {
        // Revert local state if API request failed
        setSettings(prev => ({ ...prev, careers_visible: prev.careers_visible === '1' ? '0' : '1' }));
        setSettingsMessage({ type: 'error', text: data.message || 'Failed to update visibility.' });
      }
    } catch (err) {
      console.error('Toggle error:', err);
      // Revert local state
      setSettings(prev => ({ ...prev, careers_visible: prev.careers_visible === '1' ? '0' : '1' }));
      setSettingsMessage({ type: 'error', text: 'Network error toggling portal.' });
    }
  };

  const handleUpdateSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsLoading(true);
    setSettingsMessage(null);

    try {
      const res = await fetch(getApiUrl('settings.php'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          action: 'update_settings',
          careers_visible: settings.careers_visible,
          contact_phone: settings.contact_phone,
          recipient_email: settings.recipient_email
        })
      });

      const data = await res.json();

      if (res.ok && data.status === 'success') {
        setSettingsMessage({ type: 'success', text: 'Settings updated successfully!' });
      } else {
        setSettingsMessage({ type: 'error', text: data.message || 'Failed to update settings.' });
      }
    } catch (err) {
      console.error(err);
      setSettingsMessage({ type: 'error', text: 'Connection error while saving settings.' });
    } finally {
      setSettingsLoading(false);
      setTimeout(() => setSettingsMessage(null), 4000);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div className="settings-card">
        <h3 style={{ textTransform: 'uppercase', fontSize: '18px', fontWeight: 800, borderBottom: '1px solid #e2e8f0', paddingBottom: '12px', marginBottom: '24px' }}>
          Portal Configuration
        </h3>

        <form onSubmit={handleUpdateSettings} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Career Toggle Switch */}
          <div className="settings-toggle-container">
            <div style={{ flex: 1 }}>
              <h4 style={{ textTransform: 'uppercase', fontSize: '14px', fontWeight: 800, color: '#051f2b', margin: 0 }}>
                Careers Page Portal
              </h4>
              <p style={{ color: '#8c9ea6', fontSize: '12px', margin: '4px 0 0' }}>
                Toggle to show/hide the careers portal page and navigation buttons instantly.
              </p>
            </div>

            {/* Rounded Toggle switch */}
            <button
              type="button"
              onClick={toggleCareersPortal}
              style={{
                width: '60px',
                height: '30px',
                borderRadius: '30px', // Fully rounded container
                border: '1px solid #cbd5e0',
                background: settings.careers_visible === '1' ? '#00bfa5' : 'rgba(0,0,0,0.1)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s',
                flexShrink: 0 // Prevent squashing on mobile
              }}
            >
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%', // Perfectly circular knob
                background: 'white',
                position: 'absolute',
                top: '2px',
                left: settings.careers_visible === '1' ? '32px' : '2px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }} />
            </button>
          </div>

          {/* Phone Number Input */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#4a5568' }}>
              Active Customer Phone Number
            </label>
            <input
              type="text"
              value={settings.contact_phone}
              onChange={(e) => setSettings(prev => ({ ...prev, contact_phone: e.target.value }))}
              placeholder="e.g. +234 913 444 9881"
              required
              style={{
                padding: '14px 16px',
                border: '1px solid #e2e8f0',
                borderRadius: '5px', // 5px border-radius
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                outline: 'none',
                width: '100%',
                background: '#fff'
              }}
            />
          </div>

          {/* Recipient Email Input */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#4a5568' }}>
              Notifications Recipient Email Address
            </label>
            <input
              type="email"
              value={settings.recipient_email}
              onChange={(e) => setSettings(prev => ({ ...prev, recipient_email: e.target.value }))}
              placeholder="e.g. info@matonoilandgas.com"
              required
              style={{
                padding: '14px 16px',
                border: '1px solid #e2e8f0',
                borderRadius: '5px', // 5px border-radius
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                outline: 'none',
                width: '100%',
                background: '#fff'
              }}
            />
            <p style={{ color: '#8c9ea6', fontSize: '11.5px', margin: '2px 0 0' }}>
              Contact form inquiries and newsletter notification updates will be automatically routed to this address.
            </p>
          </div>

          {/* Notifications */}
          {settingsMessage && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px',
              borderRadius: '5px', // 5px border-radius
              fontSize: '13px',
              borderLeft: '4px solid',
              borderColor: settingsMessage.type === 'success' ? '#00bfa5' : '#e53e3e',
              background: settingsMessage.type === 'success' ? 'rgba(0,191,165,0.05)' : 'rgba(229,62,62,0.05)',
              color: settingsMessage.type === 'success' ? '#00796b' : '#c53030'
            }}>
              {settingsMessage.type === 'success' ? <CheckCircle size={16} /> : <AlertTriangle size={16} />}
              {settingsMessage.text}
            </div>
          )}

          <button
            type="submit"
            disabled={settingsLoading}
            className="btn btn-primary"
            style={{ width: 'auto', padding: '14px 32px', fontSize: '12px', borderRadius: '5px' }}
          >
            Save Configuration
          </button>

        </form>
      </div>
    </motion.div>
  );
};

export default SettingsTab;
