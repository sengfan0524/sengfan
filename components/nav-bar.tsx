"use client";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useState, useEffect, useCallback } from "react";

export default function NavBar() {
  const { scrollY } = useScroll();
  const [ hidden, setHidden ] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="sticky top-0 z-100 scroll flex items-center justify-between p-6 lg:px-8 bg-gray-900 shadow-md" 
      >
        <div className="flex gap-x-12 items-center justify-center mx-auto w-screen">
          <a
            href="#"
            className="text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            About me
          </a>
          <a
            href="#experience"
            className="text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            Projects
          </a>
          <a
            href="#connect"
            className="text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            Connect
          </a>
        </div>
      </motion.nav>
    </>
  );
}
