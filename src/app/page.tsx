import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 mb-8">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-primary-700">외국인 노동자 매칭 플랫폼</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Find Your Perfect Match
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground-secondary mb-4">
              외국인 노동자와 고용주를 연결하는 스마트 플랫폼
            </p>
            
            <p className="text-lg text-foreground-secondary mb-12 max-w-2xl mx-auto">
              Connecting skilled foreign workers with employers. 
              Browse profiles, find the perfect fit, and build your team with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/auth/signup?role=employer" className="btn btn-primary btn-lg group">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                고용주로 시작하기
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/auth/signup?role=worker" className="btn btn-secondary btn-lg group">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                노동자로 등록하기
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Sign In Link */}
            <div className="mt-8">
              <p className="text-foreground-secondary">
                Already have an account?{' '}
                <Link href="/auth/signin" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  Sign In →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose FHR Platform?</h2>
            <p className="text-xl text-foreground-secondary">Simple, efficient, and effective matching</p>
          </div>

          <div className="grid grid-3 gap-8">
            {/* Feature 1 */}
            <div className="card-glass text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Search</h3>
              <p className="text-foreground-secondary">
                Advanced filtering by skills, experience, nationality, and availability
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card-glass text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Verified Profiles</h3>
              <p className="text-foreground-secondary">
                Detailed worker profiles with verified experience and qualifications
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card-glass text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-success-500 to-primary-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Matching</h3>
              <p className="text-foreground-secondary">
                Quick and efficient process to connect employers with the right candidates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-foreground-secondary">Get started in three simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Create Account</h3>
                <p className="text-foreground-secondary">
                  Sign up as an employer or worker in minutes
                </p>
              </div>
              {/* Connector Line */}
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 -z-10"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Build Profile</h3>
                <p className="text-foreground-secondary">
                  Complete your profile with skills and experience
                </p>
              </div>
              {/* Connector Line */}
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-secondary-500 to-success-500 -z-10"></div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-success-500 to-primary-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Start Matching</h3>
              <p className="text-foreground-secondary">
                Browse profiles and connect with the perfect match
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of employers and workers finding their perfect match
          </p>
          <Link href="/auth/signup" className="btn btn-lg bg-white text-primary-600 hover:bg-gray-100 hover:shadow-2xl">
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground-secondary">
            © 2025 FHR Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
