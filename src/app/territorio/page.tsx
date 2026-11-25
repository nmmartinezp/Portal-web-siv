import type { Metadata } from "next";
import { Page as Territorio, metadata as meta } from "@/features/Territorio";

export const metadata: Metadata = meta;

export default function page() {
  return <Territorio />;
}
