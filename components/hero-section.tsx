import React from "react";
import Script from "next/script";

export default function HeroSection() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 relative h-screen">

        <div className="relative isolate px-6 pt-8 lg:px-8">
          {/* Left background bubbles */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
          </div>
          <div className="mx-auto max-w-4xl py-32 sm:py-32 lg:py-32">
            <div className="text-center">
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                Hello, I am
              </p>
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">
                Tan Seng Fan
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                A fresh graduate web developer passionate about problem-solving,
                eager to extend my technical capabilities and prove my value in
                real-world projects.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 group"
                >
                  View CV <i aria-hidden="true" className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                </a>
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 group"
                >
                  Contact Me <i aria-hidden="true" className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Right background bubbles */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"></div>
          </div>
        </div>
      </div>
    </>
  );
}
