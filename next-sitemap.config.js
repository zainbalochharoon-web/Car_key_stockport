/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://carkeysinstockport.co.uk",
  generateRobotsTxt: true,
  exclude: ["/api/*", "/admin/*"],
  additionalPaths: async (config) => [
    // Service pages
    await config.transform(config, "/services/car-key-replacement"),
    await config.transform(config, "/services/auto-keys-programming"),
    await config.transform(config, "/services/lockout-assistance"),
    await config.transform(config, "/services/key-fob-programming"),
    await config.transform(config, "/services/emergency-service"),
    await config.transform(config, "/services/ignition-repair"),
    await config.transform(config, "/services/remote-key-fobs"),
    await config.transform(config, "/services/van-lockout"),
    await config.transform(config, "/services/testimonials"),
    await config.transform(config, "/services/terms"),

    // Area pages
    await config.transform(config, "/areas/stockport"),
    await config.transform(config, "/areas/cheadle"),
    await config.transform(config, "/areas/bramhall"),
    await config.transform(config, "/areas/stockport/bury"),
    await config.transform(config, "/areas/stockport/manchester"),
    await config.transform(config, "/areas/stockport/oldham"),
    await config.transform(config, "/areas/stockport/rochdale"),
    await config.transform(config, "/areas/stockport/salford"),
    await config.transform(config, "/areas/stockport/tameside"),
    await config.transform(config, "/areas/stockport/trafford"),

    // Other main pages
    await config.transform(config, "/about"),
    await config.transform(config, "/contact"),
    await config.transform(config, "/faq"),
    await config.transform(config, "/terms-and-conditions"),
    await config.transform(config, "/privacy-policy"),
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
