// import './globals.css'
import "../styles/reset.css";
import "../styles/font.css";
import "../styles/ico.css";
import "../styles/common.css";
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
        <meta property="og:image" content="../images/opengraph.png" />
        <meta property="og:title" content="글자 수 세기" />
        <meta property="og:description" content="블로그 체험단 자기소개서 이력서" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7943148960429460" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
