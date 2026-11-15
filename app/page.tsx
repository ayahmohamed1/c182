import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

export const metadata: Metadata = {
  metadataBase: new URL('https://happybirthdayadel.vercel.app/'),
  title: 'Happy Birthday adel! 🎂',
  description: 'A special birthday message for adel 🤍',
  openGraph: {
    title: 'Happy Birthday adel! 🎂',
    description: 'A special birthday message for adel 🤍',
    url: 'https://happybirthdayadel.vercel.app/',
    siteName: 'Birthday Gift',
    type: 'website',
    images: [
      {
        url: 'https://happybirthdayadel.vercel.app/images/og-cat.jpg',
        secureUrl: 'https://happybirthdayadel.vercel.app/images/og-cat.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Happy Birthday adel Cat 🐱🎂',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Birthday adel! 🎂',
    description: 'A special birthday message for adel 🤍',
    images: ['https://happybirthdayadel.vercel.app/images/og-cat.jpg'],
  },
}

export default function Home() {
  const data = giftData.ahmed || giftData.amir
  return <GiftClient data={data} />
}