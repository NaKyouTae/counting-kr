/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        loader: 'imgix',
        path: 'https://wordscount.kr/images/', // 배포 경로
    },
    async rewrites() {
        return [
            // RSS 피드를 위한 라우트 추가
            {
                source: '/rss.xml',
                destination: '/rss.xml',
            },
        ];
    },
}

module.exports = nextConfig
