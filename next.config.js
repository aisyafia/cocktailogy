/** @type {import('next').NextConfig} */
// const webpack = require("webpack");

// const { parsed: myEnv } = require("dotenv").config({
//   path: "/full/custom/path/to/env",
// });

// module.exports = {
//   webpack(config) {
//     config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
//     return config;
//   },
// };

const nextConfig = {
  env: {
    myKey: "bc7cc44426msh89c4c15308cc9b4p14e1e3jsn6e522166c0d8",
    myHost: "cocktail-by-api-ninjas.p.rapidapi.com",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.thecocktaildb.com",
        port: "",
        pathname: "/images/media/drink/**",
      },
    ],
  },
};

module.exports = nextConfig;
