import type { Metadata } from "next";
import { Page as Inicio, metadata as meta } from "@/features/Inicio";

export const metadata: Metadata = meta;

export default function page() {
  return <Inicio />;
}
