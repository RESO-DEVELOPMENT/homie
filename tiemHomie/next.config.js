/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
      "firebasestorage.googleapis.com",
    ]
  }
}

module.exports = nextConfig
// const nextConfig = {
//     webpack: (config) => {
//       config.module.rules.push({
//         test: /\.(png|jpe?g|gif|svg)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               publicPath: '/_next/static/images/',
//               outputPath: 'static/images/',
//               name: '[name].[hash].[ext]',
//             },
//           },
//         ],
//       });
  
//       return config;
//     },
//   };
  
//   module.exports = nextConfig;
  