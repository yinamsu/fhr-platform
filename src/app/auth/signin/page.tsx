'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

function SuccessMessage() {
  const searchParams = useSearchParams()
  const registered = searchParams.get('registered')

  if (!registered) return null

  return (
    <div className="mb-6 p-4 bg-success-500/10 border border-success-500 rounded-lg">
      <p className="text-success-500 text-sm text-center">
        Account created successfully! Please sign in.
      </p>
    </div>
  )
}

export default function SignInPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to sign in')
      }

      // Redirect based on role
      if (data.user.role === 'EMPLOYER') {
        router.push('/dashboard/employer')
      } else {
        router.push('/dashboard/worker')
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              FHR Platform
            </h1>
          </Link>
          <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
          <p className="text-foreground-secondary">
            Sign in to your account to continue
          </p>
        </div>

        {/* Success Message */}
        <Suspense fallback={null}>
          <SuccessMessage />
        </Suspense>

        {/* Form Card */}
        <div className="card-glass">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="label">Email Address</label>
              <input
                id="email"
                type="email"
                required
                className="input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password" className="label">Password</label>
              <input
                id="password"
                type="password"
                required
                className="input"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-error-500/10 border border-error-500 rounded-lg">
                <p className="text-error-500 text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full btn-lg"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="spinner w-5 h-5 border-2"></div>
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-foreground-secondary text-sm">
              Don't have an account?{' '}
              <Link href="/auth/signup" className="text-primary-600 font-semibold hover:text-primary-700">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
