import { ReactNode } from "react";
import { ImageKitProvider as IKProvider } from "@imagekit/next";

export default function ImageKitProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <IKProvider urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}>
      {children}
    </IKProvider>
  );
}
