import { Manrope, Geist_Mono } from 'next/font/google'
import '../globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { PreviewProvider } from '@/components/PreviewProvider'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages();
  const meta = messages.metadata;

  return {
    metadataBase: new URL('https://njenz.vercel.app'),
    title: meta.title,
    description: meta.description,
    verification: {
      google: 'w0sJTEejQ87iy4qE7HHMu6XtVeTuRo0YxUo8E-EKh4s',
    },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      type: 'website',
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      url: locale === 'id' ? 'https://njenz.vercel.app/id' : 'https://njenz.vercel.app/en',
      siteName: locale === 'id' ? 'Portofolio Arifin' : 'Arifin Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.ogTitle,
      description: meta.ogDescription,
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  // Validate that the incoming locale is supported
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Get messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body
        className={`${manrope.variable} ${geistMono.variable} text-white antialiased selection:bg-white/30 selection:text-white`}
      >
        <NextIntlClientProvider messages={messages}>
          <PreviewProvider>
            <AnimatedBackground />
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </PreviewProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
