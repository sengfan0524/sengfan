"use client";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export default function NavBar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (!isMobileMenuOpen && previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


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
        <div className="lg:hidden">
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={toggleMobileMenu}
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 min-h-screen w-64 bg-slate-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden z-50`}
        >
          <div className="flex flex-row items-center pb-4">
            <button
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 text-slate-600 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-4 p-4 justify-center items-center my-auto min-h-screen">
            <a
              href="#"
              className="text-lg font-semibold text-gray-900 dark:text-white"
            >
              About me
            </a>
            <a
              href="#experience"
              className="text-lg font-semibold text-gray-900 dark:text-white"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-lg font-semibold text-gray-900 dark:text-white"
            >
              Projects
            </a>
            <a
              href="#connect"
              className="text-lg font-semibold text-gray-900 dark:text-white"
            >
              Connect
            </a>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
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
        </div>
      </motion.nav>

      {/* <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className=" sticky top-0 z-100 scroll flex items-center justify-between p-6 lg:px-8 bg-gray-900 shadow-md"
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
      </motion.nav> */}
    </>
  );
}
