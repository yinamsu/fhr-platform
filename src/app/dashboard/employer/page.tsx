import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import Link from 'next/link'

export default async function EmployerDashboard() {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/auth/signin')
  }

  if (user.role !== 'EMPLOYER') {
    redirect('/dashboard/worker')
  }

  const hasProfile = !!user.employerProfile

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              FHR Platform
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-foreground-secondary">Welcome, {user.name}</span>
              <form action="/api/auth/signout" method="POST">
                <button type="submit" className="btn btn-outline">
                  Sign Out
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {!hasProfile ? (
          /* Profile Setup Prompt */
          <div className="max-w-2xl mx-auto text-center">
            <div className="card-glass">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Complete Your Company Profile</h2>
              <p className="text-foreground-secondary mb-8">
                Set up your company profile to start browsing and connecting with skilled foreign workers.
              </p>
              <Link href="/profile/employer/create" className="btn btn-primary btn-lg">
                Create Company Profile
              </Link>
            </div>
          </div>
        ) : (
          /* Dashboard Content */
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Employer Dashboard</h1>
              <p className="text-foreground-secondary text-lg">
                Find and connect with talented foreign workers
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-3 gap-6 mb-12">
              <div className="card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground-secondary text-sm">Available Workers</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground-secondary text-sm">Saved Profiles</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-success-500/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground-secondary text-sm">Contacted</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/workers" className="card group hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Browse Workers</h3>
                    <p className="text-foreground-secondary">
                      Search and filter through available foreign worker profiles
                    </p>
                  </div>
                  <svg className="w-6 h-6 text-foreground-secondary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link href="/profile/employer/edit" className="card group hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Manage Profile</h3>
                    <p className="text-foreground-secondary">
                      Update your company information and preferences
                    </p>
                  </div>
                  <svg className="w-6 h-6 text-foreground-secondary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
