'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

function SignUpForm({ initialRole }: { initialRole: string }) {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    role: initialRole.toUpperCase(),
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name,
          role: formData.role,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create account')
      }

      // Redirect to sign in page
      router.push('/auth/signin?registered=true')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <Link href="/">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              FHR Platform
            </h1>
          </Link>
          <div className="flex flex-col items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold">Create Your Account</h2>
            <p className="text-foreground-secondary">
              Join as {formData.role === 'EMPLOYER' ? 'an Employer' : 'an Employee'}
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="card-glass mt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div className="form-group">
              <label className="label">I am a</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'WORKER' })}
                  className={`py-8 px-4 rounded-lg border-2 transition-all flex items-center justify-center gap-3 ${
                    formData.role === 'WORKER'
                      ? 'border-transparent bg-gradient-to-br from-secondary-500 to-secondary-600 text-white ring-2 ring-secondary-500 ring-offset-2 shadow-lg scale-[1.02]'
                      : 'border-border hover:border-secondary-300 hover:bg-secondary-500/10'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="font-semibold">Employee</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'EMPLOYER' })}
                  className={`py-8 px-4 rounded-lg border-2 transition-all flex items-center justify-center gap-3 ${
                    formData.role === 'EMPLOYER'
                      ? 'border-transparent bg-gradient-to-br from-primary-500 to-primary-600 text-white ring-2 ring-primary-500 ring-offset-2 shadow-lg scale-[1.02]'
                      : 'border-border hover:border-primary-300 hover:bg-primary-500/10'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold">Employer</span>
                </button>
              </div>
            </div>

            {/* Name */}
            <div className="form-group">
              <label htmlFor="name" className="label">Full Name</label>
              <input
                id="name"
                type="text"
                required
                className="input"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

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
                placeholder="At least 8 characters"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword" className="label">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                required
                className="input"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
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
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-6 text-center">
            <p className="text-foreground-secondary text-sm">
              Already have an account?{' '}
              <Link href="/auth/signin" className="text-primary-600 font-semibold hover:text-primary-700">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SignUpPageContent() {
  const searchParams = useSearchParams()
  const defaultRole = searchParams.get('role') || 'WORKER'
  
  return <SignUpForm initialRole={defaultRole} />
}

export default function SignUpPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner w-8 h-8 border-4"></div>
      </div>
    }>
      <SignUpPageContent />
    </Suspense>
  )
}
