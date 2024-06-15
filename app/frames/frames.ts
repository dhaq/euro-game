import { appURL } from "@/utils";
import { createFrames } from "frames.js/next";

export const frames = createFrames({
  basePath: "/examples/basic/frames",
  baseUrl: appURL(),
  debug: process.env.NODE_ENV === "development",
});
