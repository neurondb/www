import Link from 'next/link'
import PageTemplate from '@/components/templates/PageTemplate'
import HeroTemplate from '@/components/templates/HeroTemplate'
import FooterTemplate from '@/components/templates/FooterTemplate'

export default function NotFound() {
  return (
    <PageTemplate>
      <HeroTemplate height="default" className="text-white text-center pt-20">
        <div className="container-extra-wide relative z-10 w-full">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
              >
                Go Home
              </Link>
              <Link
                href="/docs"
                className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </HeroTemplate>
      <FooterTemplate />
    </PageTemplate>
  )
}





