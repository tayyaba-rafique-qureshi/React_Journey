import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToPastes, updateToPastes } from '../redux/pasteSlice'
import { toast } from 'react-toastify'

const CopyIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-4 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z' />
  </svg>
)

const Home = () => {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const pasteId = searchParams.get('pasteId')

  const dispatch = useDispatch()
  const allPastes = useSelector((state) => state.paste.pastes)

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId)
      if (paste) {
        setTitle(paste.title)
        setValue(paste.content)
      }
    } else {
      setTitle('')
      setValue('')
    }
  }, [pasteId])

  function createPaste() {
    if (!title.trim() || !value.trim()) {
      toast.error('Title and content cannot be empty!')
      return
    }
    const paste = {
      title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }
    if (pasteId) {
      dispatch(updateToPastes(paste))
    } else {
      dispatch(addToPastes(paste))
    }
    setTitle('')
    setValue('')
    setSearchParams({})
  }

  function handleCopy() {
    if (!value.trim()) return
    navigator.clipboard.writeText(value)
    toast.success('Copied!')
  }

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '32px 24px', width: '100%', boxSizing: 'border-box', textAlign: 'left' }}>

      {/* Title + Button */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <input
          type='text'
          placeholder='Enter Title Here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            flex: 1,
            padding: '10px 16px',
            borderRadius: '10px',
            border: '1px solid var(--border)',
            background: 'var(--bg)',
            color: 'var(--text-h)',
            fontSize: '14px',
            outline: 'none',
            fontFamily: 'var(--sans)',
          }}
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        />
        <button
          onClick={createPaste}
          style={{
            padding: '10px 20px',
            borderRadius: '10px',
            border: 'none',
            background: 'var(--accent)',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'var(--sans)',
            whiteSpace: 'nowrap'
          }}
        >
          {pasteId ? 'Update My Paste' : 'Create My Paste'}
        </button>
      </div>

      {/* Editor Box */}
      <div style={{
        border: '1px solid var(--border)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow)'
      }}>
        {/* Top bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 16px',
          background: 'var(--code-bg)',
          borderBottom: '1px solid var(--border)'
        }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e', display: 'block' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', display: 'block' }} />
          </div>
          <button onClick={handleCopy} title='Copy content' style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--text)', display: 'flex', alignItems: 'center'
          }}>
            <CopyIcon />
          </button>
        </div>

        <textarea
          value={value}
          placeholder='Write Your Content Here....'
          onChange={(e) => setValue(e.target.value)}
          rows={20}
          style={{
            width: '100%',
            padding: '16px 20px',
            fontSize: '14px',
            fontFamily: 'var(--mono)',
            color: 'var(--text-h)',
            background: 'var(--bg)',
            border: 'none',
            outline: 'none',
            resize: 'none',
            boxSizing: 'border-box',
            lineHeight: '1.6'
          }}
        />
      </div>
    </div>
  )
}

export default Home