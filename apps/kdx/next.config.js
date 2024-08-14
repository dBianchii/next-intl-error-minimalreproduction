
import createNextIntlPlugin from "@kdx/locales/next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

// Import env files to validate at build time. Use jiti so we can load .ts files in here.

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  experimental: {
    serverComponentsExternalPackages: ["@node-rs/argon2"],
  },

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@kdx/api",
    "@kdx/auth",
    "@kdx/db",
    "@kdx/ui",
    "@kdx/validators",
    "@kdx/dayjs",
    "@kdx/shared",
    "@kdx/locales",
  ],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       source: "/api/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" },
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  //         },
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value:
  //             "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  //         },
  //       ],
  //     },
  //   ];
  // },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default withNextIntl(config);
