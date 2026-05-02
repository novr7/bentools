import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shared.akamai.steamstatic.com",
        pathname: "/store_item_assets/steam/apps/**"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "bentools.online"
          }
        ],
        destination: "https://bentools.site/:path*",
        permanent: true
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.bentools.online"
          }
        ],
        destination: "https://bentools.site/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
