"use client";

import React from "react";
import { TbDental, TbSparkles, TbSun, TbScissors } from "react-icons/tb";
import { FaTooth, FaCrown, FaRegSmile } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";

interface ServiceIconProps {
  slug: string;
  className?: string;
}

export default function ServiceIcon({ slug, className }: ServiceIconProps) {
  const defaultClass = "w-12 h-12 lg:w-14 lg:h-14 stroke-[1.5]";

  switch (slug) {
    case "orthodontics":
      return <TbDental className={className || `${defaultClass} text-[#1765A8]`} />;
    case "bridges-and-crowns":
      return <FaCrown className={className || `w-11 h-11 lg:w-13 lg:h-13 text-[#E83A9B]`} />;
    case "veneers":
      return <TbSparkles className={className || `${defaultClass} text-[#E83A9B]`} />;
    case "scaling-and-polishing":
      return <MdCleaningServices className={className || `${defaultClass} text-[#1765A8]`} />;
    case "teeth-whitening":
      return <TbSun className={className || `${defaultClass} text-[#E83A9B]`} />;
    case "cosmetic-dentistry":
      return <FaRegSmile className={className || `w-11 h-11 lg:w-13 lg:h-13 text-[#1765A8]`} />;
    case "dental-implants":
      return <FaTooth className={className || `w-11 h-11 lg:w-13 lg:h-13 text-[#1765A8]`} />;
    case "tooth-extraction":
      return <TbScissors className={className || `${defaultClass} text-[#1765A8]`} />;
    case "dental-filling":
      return <BsShieldCheck className={className || `w-11 h-11 lg:w-13 lg:h-13 text-[#E83A9B]`} />;
    default:
      return <TbDental className={className || `${defaultClass} text-[#1765A8]`} />;
  }
}
