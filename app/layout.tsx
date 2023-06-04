// import './globals.css'
import "../styles/style.css";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '글자 수 세기',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="../public/img/img-opengraph.png" />
        <meta property="og:title" content="글자 수 세기" />
        <meta property="og:description" content="글자 수 세기 :: 한글 영문 공백 특수문자 이모티콘 추가/제외 글자 수 세기" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
