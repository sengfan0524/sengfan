export default function Timeline() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-32">
      <ol className="relative border-s border-default">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
          <time className="text-sm font-normal leading-none">
            February 2022
          </time>
          <h3 className="text-lg font-semibold text-heading my-2">
            Application UI code in Tailwind CSS
          </h3>
          <p className="mb-4 text-base font-normal">
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-gray-400 bg-neutral-secondary-medium rounded-lg border border-neutral-tertiary-medium hover:bg-neutral-tertiary-medium hover:text-white shadow-xs  font-medium tracking-wide rounded-base text-sm px-4 py-2.5"
          >
            Learn more
            <svg
              className="w-4 h-4 ms-1.5 -me-0.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="3"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </a>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
          <time className="text-sm font-normal leading-none">
            March 2022
          </time>
          <h3 className="text-lg font-semibold text-heading my-2">
            Marketing UI design in Figma
          </h3>
          <p className="text-base font-normal">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
          <time className="mb-1 text-sm font-normal leading-none">
            April 2022
          </time>
          <h3 className="text-lg font-semibold text-heading my-2">
            E-Commerce UI code in Tailwind CSS
          </h3>
          <p className="text-base font-normal">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
      </ol>
    </div>
  );
}
