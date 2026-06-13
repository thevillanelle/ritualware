import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { AuthProvider, useAuth } from './AuthContext'

// vi.mock is hoisted to the top of the file by vitest, so mock refs must be
// declared with vi.hoisted() to be available inside the factory.
const { mockGetSession, mockUnsubscribe, mockSignInWithOAuth, mockSignOut, mockOnAuthStateChange } =
  vi.hoisted(() => {
    const mockUnsubscribe = vi.fn()
    return {
      mockUnsubscribe,
      mockGetSession: vi.fn(),
      mockSignInWithOAuth: vi.fn(),
      mockSignOut: vi.fn(),
      mockOnAuthStateChange: vi.fn(() => ({
        data: { subscription: { unsubscribe: mockUnsubscribe } },
      })),
    }
  })

vi.mock('../lib/supabase', () => ({
  supabase: {
    auth: {
      getSession: mockGetSession,
      onAuthStateChange: mockOnAuthStateChange,
      signInWithOAuth: mockSignInWithOAuth,
      signOut: mockSignOut,
    },
  },
}))

function TestConsumer() {
  const { user, loading, signInWithGoogle, signOut } = useAuth()
  return (
    <div>
      <span data-testid="state">{loading ? 'loading' : user ? user.email : 'signed-out'}</span>
      <button onClick={signInWithGoogle}>sign in</button>
      <button onClick={signOut}>sign out</button>
    </div>
  )
}

function setup(sessionUser = null) {
  mockGetSession.mockResolvedValue({ data: { session: sessionUser ? { user: sessionUser } : null } })
}

beforeEach(() => {
  vi.clearAllMocks()
  mockOnAuthStateChange.mockReturnValue({ data: { subscription: { unsubscribe: mockUnsubscribe } } })
})

describe('AuthProvider', () => {
  it('renders children', async () => {
    setup()
    render(<AuthProvider><div>hello</div></AuthProvider>)
    await act(async () => {})
    expect(screen.getByText('hello')).toBeDefined()
  })

  it('resolves to signed-out when there is no session', async () => {
    setup(null)
    render(<AuthProvider><TestConsumer /></AuthProvider>)
    await act(async () => {})
    expect(screen.getByTestId('state').textContent).toBe('signed-out')
  })

  it('resolves to the user email when a session exists', async () => {
    setup({ email: 'elle@ritualware.app', user_metadata: {} })
    render(<AuthProvider><TestConsumer /></AuthProvider>)
    await act(async () => {})
    expect(screen.getByTestId('state').textContent).toBe('elle@ritualware.app')
  })

  it('calls signInWithOAuth with google provider', async () => {
    setup(null)
    render(<AuthProvider><TestConsumer /></AuthProvider>)
    await act(async () => {})
    await userEvent.click(screen.getByText('sign in'))
    expect(mockSignInWithOAuth).toHaveBeenCalledWith(expect.objectContaining({ provider: 'google' }))
  })

  it('calls supabase signOut', async () => {
    setup({ email: 'elle@ritualware.app', user_metadata: {} })
    render(<AuthProvider><TestConsumer /></AuthProvider>)
    await act(async () => {})
    await userEvent.click(screen.getByText('sign out'))
    expect(mockSignOut).toHaveBeenCalled()
  })

  it('unsubscribes from auth state changes on unmount', async () => {
    setup(null)
    const { unmount } = render(<AuthProvider><TestConsumer /></AuthProvider>)
    await act(async () => {})
    unmount()
    expect(mockUnsubscribe).toHaveBeenCalled()
  })
})
