import React from "react";
import SectionTitle from "../global/SectionTitle";

function Introduction() {
  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="Introduction" />

      <div className="max-w-5xl m-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Profile Picture */}
        <div className="flex justify-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-fun-pink-light shadow-lg">
            <img
              src="/static/profile.png" // <-- replace with your image
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Intro Box (styled like testimonial) */}
        <div className="relative bg-fun-pink-darker border border-fun-pink-light p-6 rounded-lg h-full flex flex-col justify-between">
          <img
            className="sqD top-[-40px] left-[-20px] w-14"
            src="/static/doodles/testimonials/yay.svg"
            alt="decor"
          />
          <p className="text-base italic relative testimonialQuote">
            "Hi, I’m Mrunal More, a passionate blockchain developer with
            experience in smart contracts, DeFi, and Web3 integrations. I enjoy
            building decentralized apps and exploring innovative solutions that
            push blockchain adoption."
          </p>
          <p className="mt-4 text-xs text-fun-gray">
            <b className="text-fun-pink font-monospace">Mrunal More</b> – Web3
            Developer
          </p>
          <img
            className="sqD bottom-[-20px] right-[-15px] w-11"
            src="/static/doodles/testimonials/squiggle2.svg"
            alt="decor"
          />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
