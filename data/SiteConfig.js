const config = {
  siteTitle: "gatsby tfs starter", // Site title.
  siteTitleShort: "tfs starter", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "gatsbyJS tfs starter", // Alternative site title for SEO.
  siteLogo: "", // Logo used for SEO and manifest.
  siteUrl: "https://gatsby-tfs-starter.netlify.com/", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-tfs-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "A GatsbyJS stater with Advanced design in mind and with theme-ui", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "", // Username to display in the author segment.
  userEmail: "", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription: "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  avatar: {
    description:
      "I am learning to code ReactJS (from scratch) and I have built this starter to learn how Gatsby works and to build by blog!",
    photo: "https://avatars1.githubusercontent.com/u/11288873?s=400&v=4"
  },
  userLinks: [
    {
      label: "github",
      url: "https://github.com/tiagofsanchez/tfs-starter"
    },
    {
      label: "linkedin",
      url: "https://www.linkedin.com/in/tiago-formosinho-sanchez-3764225/"
    },
    {
      label: "email",
      url: "mailto:tiagofsanchez@gmail.com"
    }
  ],
  menuLinks: [
    {
      name: "Me",
      url: "/about"
    },
    {
      name: "Articles",
      url: "/blog"
    }
  ],
  copyright: "Copyright © 2019. Advanced User", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
