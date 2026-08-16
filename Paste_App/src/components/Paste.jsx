import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromPastes, resetAllPastes } from '../redux/pasteSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const IconBtn = ({ onClick, title, children, hoverColor = 'var(--accent)' }) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <button onClick={onClick} title={title} style={{
      background: 'none', border: 'none', cursor: 'pointer', padding: '6px',
      borderRadius: '6px',
      color: hovered ? hoverColor : 'var(--text)',
      background: hovered ? 'var(--accent-bg)' : 'transparent',
      display: 'flex', alignItems: 'center', transition: 'all 0.15s'
    }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  )
}

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleEdit = (id) => navigate(`/?pasteId=${id}`)
  const handleDelete = (id) => dispatch(removeFromPastes(id))
  const handleCopy = (content) => { navigator.clipboard.writeText(content); toast.success('Copied!') }
  const handleView = (id) => navigate(`/pastes/${id}`)

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '32px 24px', width: '100%', boxSizing: 'border-box', textAlign: 'left' }}>

      <input
        type='search'
        placeholder='Search paste here...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%', padding: '10px 16px', borderRadius: '10px',
          border: '1px solid var(--border)', background: 'var(--bg)',
          color: 'var(--text-h)', fontSize: '14px', outline: 'none',
          fontFamily: 'var(--sans)', marginBottom: '24px', boxSizing: 'border-box'
        }}
        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
        onBlur={e => e.target.style.borderColor = 'var(--border)'}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h2 style={{ margin: 0 }}>All Pastes</h2>
        {pastes.length > 0 && (
          <button onClick={() => dispatch(resetAllPastes())} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#ef4444', fontSize: '13px', fontWeight: 500, fontFamily: 'var(--sans)'
          }}>Clear All</button>
        )}
      </div>

      {filteredData.length === 0 ? (
        <p style={{ color: 'var(--text)', fontSize: '14px' }}>No pastes found.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredData.map((paste) => (
            <div key={paste._id} style={{
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '16px',
              background: 'var(--bg)',
              transition: 'box-shadow 0.15s'
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              {/* Left */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h2 style={{ marginBottom: '4px', fontSize: '18px' }}>{paste.title}</h2>
                <p style={{ fontSize: '13px', color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {paste.content}
                </p>
              </div>

              {/* Right */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', flexShrink: 0 }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <IconBtn onClick={() => handleEdit(paste._id)} title='Edit'>
                    <svg width='15' height='15' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15.232 5.232l3.536 3.536M9 13l6.536-6.536a2 2 0 012.828 2.828L11.828 15.828a2 2 0 01-1.414.586H9v-2a2 2 0 01.586-1.414z' /></svg>
                  </IconBtn>
                  <IconBtn onClick={() => handleDelete(paste._id)} title='Delete' hoverColor='#ef4444'>
                    <svg width='15' height='15' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0a2 2 0 00-2-2H9a2 2 0 00-2 2m10 0H5' /></svg>
                  </IconBtn>
                  <IconBtn onClick={() => handleView(paste._id)} title='View' hoverColor='#22c55e'>
                    <svg width='15' height='15' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' /><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' /></svg>
                  </IconBtn>
                  <IconBtn onClick={() => handleCopy(paste.content)} title='Copy'>
                    <svg width='15' height='15' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-4 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z' /></svg>
                  </IconBtn>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--text)' }}>
                  <svg width='13' height='13' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' /></svg>
                  {new Date(paste.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Paste