import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
