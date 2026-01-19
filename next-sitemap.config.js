/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://carkeysinstockport.co.uk",
  generateRobotsTxt: true,
  exclude: ["/api/*", "/admin/*"],
  additionalPaths: async (config) => [
    await config.transform(config, "/services/car-key-replacement"),
    await config.transform(config, "/services/auto-keys-programming"),
    await config.transform(config, "/services/lockout-assistance"),
    await config.transform(config, "/areas/stockport"),
    await config.transform(config, "/areas/cheadle"),
    await config.transform(config, "/areas/bramhall"),
    await config.transform(config, "/services/key-fob-programming"), // Added new service page path
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    additionalSitemaps: ["https://carkeysinstockport.co.uk/sitemap.xml"],
  },
}
