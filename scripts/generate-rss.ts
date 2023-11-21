var fs = require('fs');
var RSS = require('rss');

const siteUrl = 'https://wordscount.kr/';

const master = {
    name: 'kevin',
    email: 'qppk@naver.com',
    link: siteUrl,
};

const feed = new RSS({
    title: '글자 수 세기',
    description: '블로그, 체험단, 자기소개서, 이력서 등에 활용 가능한 글자 수 세기입니다.',
    id: siteUrl,
    link: siteUrl,
    language: 'ko',
    image: `${siteUrl}/images/base.jpg`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved since 2023, ${master.name}`,
    generator: 'generate-rss',
    author: master,
});

feed.item({
    title: '글자 수 세기',
    description: '블로그, 체험단, 자기소개서, 이력서 등에 활용 가능한 글자 수 세기입니다.',
    url: siteUrl,
});

var xml = feed.xml();

fs.writeFileSync('public/rss.xml', xml, 'utf-8');
