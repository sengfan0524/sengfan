"use client";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Projects() {
  const cardRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: cardRef }); // Scope the animations to the container

  // Create context-safe functions for mouse enter and leave
  const onEnter = contextSafe((event: { currentTarget: gsap.TweenTarget }) => {
    // All GSAP calls here are scoped and automatically cleaned up
    gsap.to(event.currentTarget, {
      y: -10,
      duration: 0.2,
      ease: "power2.out",
      boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
    });
  });

  const onLeave = contextSafe((event: { currentTarget: gsap.TweenTarget }) => {
    // All GSAP calls here are scoped and automatically cleaned up
    gsap.to(event.currentTarget, {
      y: 0,
      duration: 0.2,
      ease: "power2.out",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    });
  });

  return (
    <>
      <div
        className="flex justify-center items-center mx-auto max-w-5xl pt-32 sm:pt-24 pb-24 sm:pb-16"
        id="projects"
      >
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">
          Projects
        </h1>
      </div>
      <div className="container mx-auto px-6 pb-32">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center"
          ref={cardRef}
        >
          {/* <!-- AFL Page --> */}
          <div
            className="flex flex-wrap min-w-fit bg-gray-800 rounded-md p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 project-card text-gray-900 dark:text-white group"
            onMouseEnter={onEnter} // Use the context-safe function
            onMouseLeave={onLeave} // Use the context-safe function
            ref={cardRef}
          >
            <a
              href="https://fit3164-39974.web.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-between mb-4">
                <p className="text-2xl font-bold items-center">
                  AFL ELO Ranking System
                </p>
                <a className="flex justify-end text-gray-500 group-hover:text-violet-400 transition-colors text-2xl">
                  <i className="fa-solid fa-external-link"></i>
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <h3 className="text-md">
                  The AFL (Australian Football League) ELO Ranking system
                  calculates ELO Ratings for teams over a season and uses a
                  machine learning model to predict future match outcomes.
                </h3>
              </div>
              <img src="afl-page.png" className="py-5"></img>
              <div className="flex flex-wrap mx-3 border-gray-200 px-1 md:gap-x-10 gap-x-3 gap-y-3">
                <span className="text-sm text-gray-600 dark:text-white font-medium">
                  React
                </span>
                <span className="text-sm text-gray-600 dark:text-white font-medium">
                  Express.js
                </span>
                <span className="text-sm text-gray-600 dark:text-white font-medium">
                  Docker
                </span>
                <span className="text-sm text-gray-600 dark:text-white font-medium">
                  Tailwind CSS
                </span>
                <span className="text-sm text-gray-600 dark:text-white font-medium">
                  Puppeteer
                </span>

                <span className="text-sm text-gray-600 dark:text-white font-medium">
                  R
                </span>
                <span className="text-sm text-gray-600 dark:text-white font-medium">
                  TanStack
                </span>
                <span className="text-sm text-gray-600 dark:text-white font-medium">
                  Python
                </span>
                <span className="text-sm text-gray-600 dark:text-white font-medium">
                  Firebase
                </span>
              </div>
            </a>
          </div>

          {/* <!-- Contacts Page --> */}
          <div
            className="relative flex flex-wrap min-w-fit bg-gray-800 rounded-md p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 project-card text-gray-900 dark:text-white group"
            onMouseEnter={onEnter} // Use the context-safe function
            onMouseLeave={onLeave} // Use the context-safe function
          >
            <a>
              <div className="justify-between flex flex-row mb-4 ">
                <p className="text-2xl font-bold items-center">Contacts Page</p>
                <div className="flex flex-row-reverse justify-end gap-5">
                  <a
                    className=" text-gray-500 group-hover:text-violet-400 transition-colors text-2xl"
                    href="https://contacts-app-1.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-external-link"></i>
                  </a>
                  <a
                    className=" text-gray-500 group-hover:text-violet-400 transition-colors text-2xl "
                    href="https://github.com/sengfan0524/Contacts-App/tree/main/contacts-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-6">
                <h3 className="text-md">
                  A simple and responsive Contacts application that groups
                  contacts by their initials, and sorts the names within each
                  group.
                </h3>
              </div>
              <img src="contacts-page.png" className="py-5"></img>
              <div className="flex mx-3 border-gray-200 pb-3 pt-2 px-1 md:gap-x-10 gap-x-3 gap-y-3 ">
                <span className="text-sm text-gray-600 dark:text-white font-medium">
                  React
                </span>
                <span className="text-sm text-gray-600 dark:text-white font-medium">
                  Tailwind CSS
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
