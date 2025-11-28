'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function Home() {
  const { t } = useTranslation()

  // 배지 링크 인라인 스타일 (이전 설정 유지)
  const badgeStyle = {
    paddingLeft: '48px', 
    paddingRight: '48px', 
    backgroundColor: 'transparent',
    borderColor: 'rgb(59 130 246 / 0.5)', 
    borderWidth: '1px',
    color: 'white', 
  };

  return (
    <div className="min-h-screen">
      <LanguageSwitcher />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background-secondary">
        <div className="hero-section w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl mb-section">
          <div className="flex flex-col items-center text-center">
            {/* Badge as Link */}
            {/* <div className="flex justify-center mb-section">
              <Link 
                href="/auth/signup?role=employer" 
                className="inline-flex items-center py-2.5 rounded-full"
                style={badgeStyle}
              >
                <span className="text-xs sm:text-sm font-semibold whitespace-nowrap inline-block">
                  {t.hero.badge}
                </span>
              </Link>
            </div> */}

            {/* Main Heading */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-section leading-tight text-center"
            >
              {t.hero.title}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-foreground-secondary mb-section max-w-3xl mx-auto leading-relaxed force-center">
  {t.hero.subtitle}
</p>

            {/* English Description */}
            <p className="text-sm sm:text-base md:text-lg text-foreground-secondary mb-section leading-relaxed text-center px-8 whitespace-pre-line max-w-4xl mx-auto">
              {t.hero.description}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-5 mb-section">
              <Link
                href="/auth/signup?role=employer"
                className="btn btn-primary btn-lg group w-full md:w-auto min-w-[240px]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.hero.cta.employer}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/auth/signup?role=worker"
                className="btn btn-secondary btn-lg group w-full sm:w-auto min-w-[240px]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {t.hero.cta.worker}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Sign In Link */}
            <p className="text-sm text-foreground-secondary">
              {t.hero.alreadyHaveAccount}{' '}
              <Link href="/auth/signin" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                {t.hero.cta.signIn} →
              </Link>
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-36 bg-background-secondary">
        <div className="container mx-auto px-6 max-w-6xl mb-extreme">
          <div className="text-center mb-section">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-section">
              {t.features.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground-secondary mb-section">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.features.items.map((feature, index) => {
              const icons = [
                <path key="search" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
                <path key="shield" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                <path key="lightning" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              ]
              const gradients = [
                'from-primary-500 to-primary-600',
                'from-secondary-500 to-secondary-600',
                'from-success-500 to-primary-500'
              ]

              return (
                <div key={index} className="card-glass text-center group hover:scale-105 transition-transform">
                  <div className={`w-16 h-16 mx-auto mb-section bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {icons[index]}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-section">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl mb-section">
          <div className="text-center mb-section">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-section">
              {t.howItWorks.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground-secondary mb-section">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.howItWorks.steps.map((step, index) => {
              const gradients = [
                'from-primary-500 to-primary-600',
                'from-secondary-500 to-secondary-600',
                'from-success-500 to-primary-500'
              ]

              return (
                <div key={index} className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-hero bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl`}>
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-section">{step.title}</h3>
                  <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-6 max-w-4xl text-center mb-section">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-section">
            {t.cta.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-section leading-relaxed">
            {t.cta.subtitle}
          </p>
          <Link 
            href="/auth/signup" 
            className="btn btn-lg bg-white text-primary-600 hover:bg-gray-100 hover:shadow-2xl transition-all inline-flex items-center gap-2"
          >
            {t.cta.button}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background-secondary border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs sm:text-sm text-foreground-secondary">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  )
}