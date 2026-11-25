import type { Metadata } from "next";
import { Page as Cultura, metadata as meta } from "@/features/Cultura";

export const metadata: Metadata = meta;

export default function page() {
  return <Cultura />;
}
