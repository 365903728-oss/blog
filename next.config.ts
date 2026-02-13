import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/blog",
  images: {
    unoptimized: true,
  },
  devIndicators: {
    position: "bottom-right",
  },
};

export default withContentCollections(nextConfig);
