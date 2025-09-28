import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },{
        protocol:'https',
        hostname:'www.anahuac.mx'
      },{
        protocol:'https',
        hostname:'cdn-icons-png.flaticon.com'
      }
    ]
  }
};

export default nextConfig;
