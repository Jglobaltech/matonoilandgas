import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, AlertTriangle } from 'lucide-react';
import { getApiUrl } from '../../utils/api';

interface LoginProps {
  onLoginSuccess: (token: string, username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [loginUser, setLoginUser] = useState<string>('');
  const [loginPass, setLoginPass] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);

    try {
      const res = await fetch(getApiUrl('auth.php'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'login',
          username: loginUser,
          password: loginPass
        })
      });

      const data = await res.json();

      if (res.ok && data.status === 'success') {
        onLoginSuccess(data.admin.token, data.admin.username);
      } else {
        setLoginError(data.message || 'Invalid username or password.');
      }
    } catch (err) {
      console.error(err);
      setLoginError('Failed to connect to authentication API.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(rgba(5, 10, 5, 0.95), rgba(5, 10, 5, 0.98)), url(./images/industry.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      paddingTop: '100px'
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          width: '100%',
          maxWidth: '440px',
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '50px 40px',
          borderRadius: '5px', // 5px border-radius
          boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
          textAlign: 'center'
        }}
      >
        <div style={{
          width: '64px',
          height: '64px',
          background: 'var(--color-primary)',
          borderRadius: '5px', // 5px border-radius
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          boxShadow: '0 10px 25px rgba(0, 170, 95, 0.3)'
        }}>
          <Lock size={28} color="white" />
        </div>

        <h2 style={{ color: 'white', textTransform: 'uppercase', fontWeight: 900, fontSize: '24px', letterSpacing: '1px', marginBottom: '8px' }}>
          Admin Portal
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '32px' }}>
          Access the Maton Oil & Gas dashboard.
        </p>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)', display: 'flex' }}>
              <User size={18} />
            </span>
            <input
              type="text"
              value={loginUser}
              onChange={(e) => setLoginUser(e.target.value)}
              placeholder="Username"
              required
              style={{
                width: '100%',
                padding: '16px 16px 16px 48px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '5px', // 5px border-radius
                outline: 'none',
                color: 'white',
                fontFamily: 'var(--font-body)',
                fontSize: '14px'
              }}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)', display: 'flex' }}>
              <Lock size={18} />
            </span>
            <input
              type="password"
              value={loginPass}
              onChange={(e) => setLoginPass(e.target.value)}
              placeholder="Password"
              required
              style={{
                width: '100%',
                padding: '16px 16px 16px 48px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '5px', // 5px border-radius
                outline: 'none',
                color: 'white',
                fontFamily: 'var(--font-body)',
                fontSize: '14px'
              }}
            />
          </div>

          {loginError && (
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', background: 'rgba(229,62,62,0.1)', borderLeft: '3px solid #e53e3e', color: '#ff8a8a', padding: '12px', fontSize: '13px', textAlign: 'left', borderRadius: '5px' }}>
              <AlertTriangle size={16} style={{ flexShrink: 0 }} />
              {loginError}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoggingIn}
            style={{
              padding: '16px 0',
              fontSize: '13px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              justifyContent: 'center',
              borderRadius: '5px', // 5px border-radius
              boxShadow: '0 10px 30px rgba(0, 170, 95, 0.25)'
            }}
          >
            {isLoggingIn ? 'Verifying...' : 'Sign In'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
