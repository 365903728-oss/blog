import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cpp-problems",
  images: {
    unoptimized: true,
  },
  devIndicators: {
    position: "bottom-right",
  },
};

export default withContentCollections(nextConfig);
