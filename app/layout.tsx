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
        {/* RSS */}
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" title="RSS" />
        <link rel="alternate" type="application/atom+xml" href="/rss-atom.xml" title="RSS Atom" />
        <link rel="alternate" type="application/json" href="/feed.json" title="JSON Feed" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/images/opengraph.png" />
        <meta property="og:title" content="글자 수 세기" />
        <meta property="og:description" content="블로그 체험단 자기소개서 이력서" />
        {/* 네이버 소유 확인용 메타 태크 */}
        <meta name="naver-site-verification" content="0ad57945475d97a7b3094f46d6a036700e6b1133" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7943148960429460" crossOrigin="anonymous"></script>
        {/* Page Description */}
        <meta name="description" content="블로그, 체험단, 자기소개서, 이력서 등에 활용 가능한 글자 수 세기입니다." />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
