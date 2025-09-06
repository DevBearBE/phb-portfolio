import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/over",
      missing: [
        {
          type: "cookie",
          key: "consent",
        },
      ],
      permanent: false,
      destination: "/",
    },
    {
      source: "/aanbod/diagnostisch-onderzoek",
      missing: [
        {
          type: "cookie",
          key: "consent",
        },
      ],
      permanent: false,
      destination: "/",
    },
    {
      source: "/aanbod/begeleiding",
      missing: [
        {
          type: "cookie",
          key: "consent",
        },
      ],
      permanent: false,
      destination: "/",
    },
    {
      source: "/team",
      missing: [
        {
          type: "cookie",
          key: "consent",
        },
      ],
      permanent: false,
      destination: "/",
    },
      {
          source: '/tarieven',
          missing: [
              {
                  type: "cookie",
                  key: "consent",
              },
          ],
          permanent: false,
          destination: "/",
      },
    {
      source: "/contact",
      missing: [
        {
          type: "cookie",
          key: "consent",
        },
      ],
      permanent: false,
      destination: "/",
    },
    {
      source: "/aanbod",
      destination: "/aanbod/diagnostisch-onderzoek",
      permanent: true,
    },
      {
          source: "/tarieven",
          destination: "/tarieven/diagnostisch-onderzoek",
          permanent: true,
      }
  ],
};

export default nextConfig;
