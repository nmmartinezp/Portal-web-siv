import type { Metadata } from "next";
import { Page as Historia, metadata as meta } from "@/features/Historia";

export const metadata: Metadata = meta;

export default function page() {
  return <Historia />;
}
