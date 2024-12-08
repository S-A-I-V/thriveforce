const nextConfig = {
  reactStrictMode: true,
  env: {
    NOTION_API_KEY: process.env.NOTION_API_KEY,
    PAGE_ID: process.env.PAGE_ID,
  },
};

export default nextConfig;
