'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: 'rgba(10, 14, 39, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontSize: '24px',
          fontWeight: '800',
          textDecoration: 'none',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          📺 SrV Creation IPTV
        </Link>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
        }} className="desktop-menu">
          <Link href="#features" style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s ease',
          }} onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}>
            Features
          </Link>
          <Link href="#about" style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s ease',
          }} onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}>
            About
          </Link>
          <Link href="#pricing" style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s ease',
          }} onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}>
            Pricing
          </Link>
          <Link href="#contact" style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s ease',
          }} onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}>
            Contact
          </Link>
          <a
            href="https://www.srvcreationservices.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              fontSize: '14px',
              padding: '10px 24px',
              textDecoration: 'none',
            }}>
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
          }}
          className="mobile-menu-btn"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          background: 'rgba(10, 14, 39, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '20px',
          display: 'none',
        }} className="mobile-menu-content">
          <Link href="#features" style={{
            display: 'block',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '12px 0',
            fontWeight: '500',
          }} onClick={() => setIsOpen(false)}>
            Features
          </Link>
          <Link href="#about" style={{
            display: 'block',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '12px 0',
            fontWeight: '500',
          }} onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#pricing" style={{
            display: 'block',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '12px 0',
            fontWeight: '500',
          }} onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link href="#contact" style={{
            display: 'block',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '12px 0',
            fontWeight: '500',
          }} onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <a
            href="https://www.srvcreationservices.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              width: '100%',
              marginTop: '12px',
              display: 'block',
              textAlign: 'center',
              textDecoration: 'none',
            }}>
            Get Started
          </a>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu-content {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
