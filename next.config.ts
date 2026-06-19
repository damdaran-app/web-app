import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://goshtdamdaran-aplication-api.liara.run/project/api/:path*",

      },
    ];
  },
  
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mehrab-project.s3.ir-thr-at1.arvanstorage.ir'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;




// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         destination: "https://goshtdamdaran-aplication-api.liara.run/project/api/:path*",
//       },
//     ];
//   },
  
//   webpack(config, { isServer }) {
//     if (!isServer) {
//       config.resolve.fallback = {
//         ...config.resolve.fallback,
//         fs: false,
//         net: false,
//         tls: false,
//       };
//     }
//     return config;
//   },
  
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'mehrab-project.s3.ir-thr-atl.atl.arvanstorage.ir', // اصلاح شده
//         port: '',
//         pathname: '/mehrab-project/uploads/**', 
//       },
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
  
//   compiler: {
//     removeConsole: process.env.NODE_ENV === "production",
//   },
// };

// export default nextConfig;