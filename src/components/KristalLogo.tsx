import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  withLink?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function KristalLogo({
  variant = "dark",
  withLink = true,
  size = "md",
  className = "",
}: LogoProps) {
  const isLight = variant === "light";

  // Natural aspect ratio ~ 3.16 : 1 based on authentic cropped logo dimensions (430x136)
  const sizeClasses = {
    sm: "h-10 w-[126px]",
    md: "h-12 sm:h-14 w-[152px] sm:w-[177px]",
    lg: "h-14 sm:h-16 w-[177px] sm:w-[202px]",
    xl: "h-16 sm:h-20 w-[202px] sm:w-[253px]",
  };

  const content = (
    <div
      className={`inline-flex items-center select-none transition-transform duration-200 hover:scale-[1.02] ${
        isLight
          ? "bg-white px-3.5 py-2 rounded-xl shadow-md border border-white/30 inline-block"
          : ""
      } ${className}`}
    >
      {/* Only the official uploaded logo mark & typography */}
      <div className={`relative ${sizeClasses[size]} shrink-0`}>
        <Image
          src="/images/kristal-logo-official.png"
          alt="Kristal Dentale Clinic"
          fill
          priority
          sizes="(max-width: 768px) 180px, 240px"
          className="object-contain"
        />
      </div>
    </div>
  );

  if (withLink) {
    return (
      <Link
        href="/"
        className="inline-block transition-opacity hover:opacity-95 focus:outline-none"
        aria-label="Kristal Dentale Clinic Akure"
      >
        {content}
      </Link>
    );
  }

  return content;
}
