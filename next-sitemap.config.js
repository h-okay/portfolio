/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hakanokay.dev',
  changefreq: 'yearly',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
