/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://touhou-emperor.github.io',
  generateRobotsTxt: true,
  output: 'export',
};
