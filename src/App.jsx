import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
// import the useGSAP hook
import { gsap } from "gsap";
//import remixicon
import "remixicon/fonts/remixicon.css";

const App = () => {
  let [showContent, setShowContent] = useState(false);
  //we use GSAP to animate the text
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
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;
    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      ease: "Expo.easeInOut",
    })
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: 0.2,
      ease: "Expo.easeInOut",
    })
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: 0.2,
      ease: "Expo.easeInOut",
    })
    gsap.to(".girl", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: 0.2,
      ease: "Expo.easeInOut",
    })
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: 0.2,
      ease: "Expo.easeInOut",
    })
    gsap.to(".lines", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: 0.2,
      ease: "Expo.easeInOut",
    })



    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${xMove * 0.5}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 0.7,
      });
    });
  }, [showContent]);
  // useGSAP(() => {
  //   const tl = gsap.timeline();
  //   tl.to(".vi-mask-group", {
  //     yPercent: -100,
  //     duration: 1,
  //     ease: "power2.inOut",
  //   }).to(".vi-mask-group", {
  //     yPercent: 0,
  //     duration: 1,
  //     ease: "power2.inOut",
  //   });
  // })
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          {/*it is important to set preserveAspectRatio='xMidYMid slice'*/}
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
            href="../public/bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-1 scale-[1.4] rotate-[-10deg]">
                  <div className="line w-10 h-1 bg-gray-200"></div>
                  <div className="line w-8 h-1 bg-gray-200"></div>
                  <div className="line w-5 h-1 bg-gray-200"></div>
                </div>
                <div className="text-4xl -mt-[11px] leading-none text-gray-200">
                  Rockstar
                </div>
              </div>
            </div>
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="sky absolute scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="../public/sky.png"
              />
              <img
                className="bg absolute scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                src="../public/bg.png"
              />
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2  ">
                <h1 className="text-[12rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[12rem] leading-none ml-20">theft</h1>
                <h1 className="text-[12rem] leading-none -ml-40">auto</h1>
              </div>
              <img
                className="girl absolute scale-[0.95] rotate-[-10deg] -bottom-[45%] left-120"
                src="../public/girlbg.png"
              />
            </div>
            <div className="btmbar text-gray-200 absolute bottom-0 left-0  w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="../public/ps5.png"
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-screen px-10 bg-black">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[1.2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="../public/imag.png"
                />
              </div>
              <div className="rimg">
                <h1 className="text-8xl">Still Running,</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="mt-10 text-5xl text-[#feafc4] font-[Helvetica_Now_Display]">
                  Jason wants an<br/> easy life, but<br/> things just keep<br/> getting harder.
                </p>
                <p className="mt-5 text-3xl font-[Helvetica_Now_Display]">
                  Jason grew up around grifters<br/> and crooks. After a stint in the<br/>
                  Army trying to shake off his<br/> troubled teens, he found himself<br/>
                  in the Keys doing what he knows best,<br/> working for local drug
                  runners.<br/> It might be time to try something new.
                </p>
              </div>
            </div>
          </div>
          <button className="download flex items-center justify-center text-4xl font-[Helvetica_Now_Display] bg-amber-400 w-full h-25">download</button>
        </div>
      )}
    </>
  );
};

export default App;

