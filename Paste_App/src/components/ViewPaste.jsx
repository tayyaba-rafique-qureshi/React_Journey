import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ViewPaste = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const allPastes = useSelector((state) => state.paste.pastes)
  const paste = allPastes.find((p) => p._id === id)

  if (!paste) return (
    <div style={{ padding: '32px 24px', color: 'var(--text)' }}>Paste not found!</div>
  )

  function handleCopy() {
    navigator.clipboard.writeText(paste.content)
    toast.success('Copied!')
  }

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '32px 24px', width: '100%', boxSizing: 'border-box', textAlign: 'left' }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div>
          <h2 style={{ marginBottom: '4px' }}>{paste.title}</h2>
          <p style={{ fontSize: '12px', color: 'var(--text)' }}>
            {new Date(paste.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <button onClick={() => navigate(-1)} style={{
          background: 'none', border: '1px solid var(--border)', borderRadius: '8px',
          padding: '6px 14px', cursor: 'pointer', fontSize: '13px',
          color: 'var(--text)', fontFamily: 'var(--sans)'
        }}>← Back</button>
      </div>

      <div style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 16px', background: 'var(--code-bg)', borderBottom: '1px solid var(--border)'
        }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e', display: 'block' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', display: 'block' }} />
          </div>
          <button onClick={handleCopy} title='Copy' style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--text)', display: 'flex', alignItems: 'center'
          }}>
            <svg width='16' height='16' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-4 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z' />
            </svg>
          </button>
        </div>

        <textarea
          value={paste.content}
          disabled
          rows={20}
          style={{
            width: '100%', padding: '16px 20px', fontSize: '14px',
            fontFamily: 'var(--mono)', color: 'var(--text-h)', background: 'var(--bg)',
            border: 'none', outline: 'none', resize: 'none', boxSizing: 'border-box', lineHeight: '1.6'
          }}
        />
      </div>
    </div>
  )
}

export default ViewPaste