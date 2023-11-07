import fs from 'fs';
import { Feed } from 'feed';
import { getSortedPost } from './mdx';

export default async function generateRssFeed() {
    const allPosts = await getSortedPost();
    const site_url = 'https::/wordscount.kr';

    const feedOptions = {
        title: 'Words Count | RSS Feed',
        description: 'Welcome to this Words Count!',
        id: site_url,
        link: site_url,
        image: `${site_url}/images/opengraph.png`,
        favicon: `${site_url}/favicon.png`,
        copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
        generator: 'Feed for Node.js',
        feedLinks: {
            rss2: `${site_url}/rss.xml`,
        },
    };

    const feed = new Feed(feedOptions);

    allPosts.forEach((post) => {
        feed.addItem({
            title: post.title,
            id: `${site_url}/blog/${post.slug}`,
            link: `${site_url}/blog/${post.slug}`,
            description: post.description,
            date: new Date(post.date),
        });
    });

    fs.writeFileSync('./public/rss.xml', feed.rss2());
}