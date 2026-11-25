import type { Metadata } from "next";
import { Page as Turismo, metadata as meta } from "@/features/Turismo";

export const metadata: Metadata = meta;

export default function page() {
  return <Turismo />;
}
