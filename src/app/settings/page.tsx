import Image from "next/image";
import React from "react";

export default function SettingsPage() {
  return (
    <div className="flex justify-center items-center gap-16 flex-col my-10">
      <div className="text-5xl lg:text-7xl font-medium text-center leading-[1.2]">
        SCAN YOUR ASSETS IN <br /> LESS THAN <span className="grad">90</span>{" "}
        SECONDS
      </div>
      <div className="lg:scale-100 scale-75">
        <Image
          src="/settings-btn.svg"
          alt="btn"
          width={377}
          height={128}
          className="hover:cursor-pointer"
        />
      </div>
    </div>
  );
}
