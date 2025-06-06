import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";

// Image imports
import Img2 from '../public/bg.png';
import Img3 from '../public/girlbg.png';
import Img4 from '../public/imag.png';
import Img5 from '../public/ps5.png';
import Img6 from '../public/sky.png';

const App = () => {
  const [showContent, setShowContent] = useState(false);

  //useGSAP Animation to animate SVG
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  //useGSAP Animation to animate main content
  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", { scale: 1, rotate: 0, duration: 2, ease: "Expo.easeInOut" });
    gsap.to([".sky", ".bg", ".girl", ".text", ".lines"], {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: 0.2,
      ease: "Expo.easeInOut",
    });

    // Parallax animation
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", { x: `${xMove * 0.5}%` });
      gsap.to(".sky", { x: xMove });
      gsap.to(".bg", { x: xMove * 0.7 });
    });
  }, [showContent]);

  return (
    <>
      {/* SVG Loader Animation */}
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href={Img2}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {/* Main Content */}
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing relative w-full min-h-screen bg-black overflow-hidden">
            {/* Navbar */}
            <div className="navbar absolute top-0 left-0 z-10 w-full py-6 px-6 sm:px-10">
              <div className="logo flex items-center gap-6">
                <div className="lines flex flex-col gap-1 scale-[1.2] rotate-[-10deg]">
                  <div className="line w-10 h-1 bg-gray-200"></div>
                  <div className="line w-8 h-1 bg-gray-200"></div>
                  <div className="line w-5 h-1 bg-gray-200"></div>
                </div>
                <div className="text-2xl sm:text-4xl text-gray-200">Rockstar</div>
              </div>
            </div>

            {/* Hero Section */}
            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              <img className="sky absolute scale-[1.5] rotate-[-20deg] w-full h-full object-cover" src={Img6} alt="Sky" />
              <img className="bg absolute scale-[1.8] rotate-[-3deg] w-full h-full object-cover" src={Img2} alt="Background" />
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 px-4 text-center">
                <h1 className="text-[15vw] sm:text-[10rem] leading-none">grand</h1>
                <h1 className="text-[15vw] sm:text-[10rem] leading-none">theft</h1>
                <h1 className="text-[15vw] sm:text-[10rem] leading-none">auto</h1>
              </div>
              <img className="girl absolute scale-[0.95] rotate-[-10deg] -bottom-[45%] left-1/2 -translate-x-1/2 w-[80%] sm:w-auto" src={Img3} alt="Girl" />
            </div>

            {/* Bottom Bar */}
            <div className="btmbar text-gray-200 absolute bottom-0 left-0 w-full py-8 px-6 sm:px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-2xl sm:text-4xl ri-arrow-down-line"></i>
                <h3 className="text-lg sm:text-xl font-[Helvetica_Now_Display]">Scroll Down</h3>
              </div>
              <img className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={Img5} alt="PS5" />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex items-center justify-center w-full min-h-screen px-4 py-10 bg-black">
            <div className="cntnr flex flex-col lg:flex-row text-white w-full max-w-7xl gap-10">
              {/* Left Image */}
              <div className="limg w-full lg:w-1/2 flex items-center justify-center">
                <img className="w-full max-w-full h-auto object-contain" src={Img4} alt="Character" />
              </div>

              {/* Right Text */}
              <div className="rimg w-full lg:w-1/2">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl">Still Running,</h1>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl">Not Hunting</h1>
                <p className="mt-8 text-xl sm:text-3xl text-[#feafc4] font-[Helvetica_Now_Display] leading-snug">
                  Jason wants an<br /> easy life, but<br /> things just keep<br /> getting harder.
                </p>
                <p className="mt-5 text-base sm:text-xl font-[Helvetica_Now_Display] text-gray-200 leading-relaxed">
                  Jason grew up around grifters and crooks. After a stint in the Army<br />
                  trying to shake off his troubled teens, he found himself in the Keys<br />
                  doing what he knows best — working for local drug runners.<br />
                  It might be time to try something new.
                </p>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <button className="download flex items-center justify-center text-2xl sm:text-4xl font-[Helvetica_Now_Display] bg-amber-400 w-full h-20">
            Download
          </button>
        </div>
      )}
    </>
  );
};

export default App;
