import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav style={{
      borderBottom: '1px solid var(--border)',
      padding: '16px 32px',
      display: 'flex',
      gap: '32px',
      background: 'var(--bg)'
    }}>
      <Link to='/' style={{
        fontWeight: 600,
        fontSize: '14px',
        textDecoration: 'none',
        color: location.pathname === '/' ? 'var(--accent)' : 'var(--text)',
        transition: 'color 0.2s'
      }}>Home</Link>
      <Link to='/pastes' style={{
        fontWeight: 600,
        fontSize: '14px',
        textDecoration: 'none',
        color: location.pathname === '/pastes' ? 'var(--accent)' : 'var(--text)',
        transition: 'color 0.2s'
      }}>Paste</Link>
    </nav>
  )
}

export default Navbar