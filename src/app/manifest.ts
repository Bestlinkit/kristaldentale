import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kristal Dentale Clinic",
    short_name: "Kristal Dentale",
    description: "Professional dental care in Oke Aro, Akure, Ondo State.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#07152F",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
