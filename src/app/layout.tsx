/* eslint-disable simple-import-sort/imports */
import { Metadata } from 'next'
import { Open_Sans, Outfit, Poppins } from 'next/font/google'
import React from 'react'

import { AdminBar } from './_components/AdminBar'
import { Footer } from './_components/Footer'
import { Header } from './_components/Header/old-index'
import { Providers } from './_providers'
// import { InitTheme } from './_providers/Theme/InitTheme'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'

import './_css/app.scss'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: '400',
})

const open_sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open_sans',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <InitTheme /> */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${outfit.variable} ${poppins.variable} ${open_sans.variable}`}>
        <Providers>
          <AdminBar />
          {/* @ts-expect-error Server Component */}
          <Header />
          <div className="pt-[100px]">{children}</div>
          {/* @ts-expect-error */}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://payloadcms.com'),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
  openGraph: mergeOpenGraph(),
}
