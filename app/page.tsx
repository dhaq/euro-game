import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";
import { appURL } from "@/utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Basic Frames.js example",
    other: {
      ...(await fetchMetadata(new URL("/frames", appURL()))),
    },
  };
}

export default async function Home() {
  return (
    <div>
      Basic Frames.js example.
    </div>
  );
}
