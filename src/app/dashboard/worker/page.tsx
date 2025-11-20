import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import Link from 'next/link'

export default async function WorkerDashboard() {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/auth/signin')
  }

  if (user.role !== 'WORKER') {
    redirect('/dashboard/employer')
  }

  const hasProfile = !!user.workerProfile
  const profile = user.workerProfile

  // Calculate profile completion
  let completionPercentage = 0
  if (profile) {
    const fields = [
      profile.nationality,
      profile.phone,
      profile.bio,
      profile.visaStatus,
      profile.profilePhoto,
      profile.koreanLevel,
      profile.workExperiences?.length > 0,
      profile.skills?.length > 0,
    ]
    const completed = fields.filter(Boolean).length
    completionPercentage = Math.round((completed / fields.length) * 100)
  }

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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Create Your Worker Profile</h2>
              <p className="text-foreground-secondary mb-8">
                Build your professional profile to get discovered by employers looking for your skills.
              </p>
              <Link href="/profile/worker/create" className="btn btn-primary btn-lg">
                Create Profile
              </Link>
            </div>
          </div>
        ) : (
          /* Dashboard Content */
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Worker Dashboard</h1>
              <p className="text-foreground-secondary text-lg">
                Manage your profile and track your visibility
              </p>
            </div>

            {/* Profile Completion Card */}
            <div className="card-glass mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Profile Completion</h3>
                  <p className="text-foreground-secondary">Complete your profile to increase visibility</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-primary-600">{completionPercentage}%</p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-border rounded-full h-3 mb-4">
                <div 
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full transition-all"
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>

              {completionPercentage < 100 && (
                <div className="flex items-start gap-2 p-4 bg-warning-500/10 border border-warning-500 rounded-lg">
                  <svg className="w-5 h-5 text-warning-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-warning-500">Incomplete Profile</p>
                    <p className="text-sm text-foreground-secondary">
                      Add more information to make your profile stand out to employers
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-3 gap-6 mb-12">
              <div className="card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground-secondary text-sm">Profile Views</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground-secondary text-sm">Messages</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-success-500/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground-secondary text-sm">Saved By</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/profile/worker/edit" className="card group hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Edit Profile</h3>
                    <p className="text-foreground-secondary">
                      Update your information, skills, and experience
                    </p>
                  </div>
                  <svg className="w-6 h-6 text-foreground-secondary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link href={`/workers/${profile.id}`} className="card group hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Preview Profile</h3>
                    <p className="text-foreground-secondary">
                      See how employers view your profile
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
