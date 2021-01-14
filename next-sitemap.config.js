module.exports = {
  siteUrl: "https://join-us-or-nextjs.netlify.app/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/shop?*", "/shop/*?*"],
      },
    ],
  },
};
