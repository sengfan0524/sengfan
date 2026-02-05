export default function Timeline() {
  return (
    <>
      <div
        className="flex justify-center items-center mx-auto max-w-5xl pt-32 sm:pt-24 pb-24 sm:pb-16"
        id="experience"
      >
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">
          Experience
        </h1>
      </div>

      <div className="mx-auto max-w-4xl pb-32 sm:pb-24">
        <ol className="relative border-s border-default">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
            <time className="text-sm font-normal leading-none">
              November 2022 – February 2023
            </time>
            <h3 className="text-lg font-semibold text-heading my-2">
              Uni Enrol (Internship)
            </h3>
            <ul className="list-disc px-8 tracking-wide mb-4 text-base font-normal">
              <li>
                Independently researched the requirements and developed an
                application integrating a suitable
                <span className="text-violet-400 text-base font-normal">
                  &nbsp;OCR (Optical Character Recognition)&nbsp;
                </span>
                machine learning model to automatically read users’ academic
                transcripts, eliminating the need for manual grade entry and
                enhancing the overall user experience
              </li>
              <li>
                Achieved over
                <span className="text-violet-400 text-base font-normal">
                  &nbsp;90% recognition accuracy&nbsp;
                </span>
                on sample data using a fine-tuned PaddleOCR model integrated
                into the final application
              </li>
              <li>
                Identified low-quality images using confidence scores from the
                model and performed preprocessing by correcting orientation and
                enhancing lighting, optimising the model's performance
              </li>
              <li>
                Processed images submitted through the web application by
                labelling words using similarity checks against a predefined
                dictionary and drawing boundary boxes. Stored both original and
                labelled images in a S3 bucket for easy access and retrieval
              </li>
            </ul>
            {/* <a
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
            </a> */}
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
            <time className="text-sm font-normal leading-none">
              December 2021 – February 2022
            </time>
            <h3 className="text-lg font-semibold text-heading my-2">
              PwC Malaysia (Internship)
            </h3>
            <ul className="list-disc px-8 tracking-wide mb-4 text-base font-normal">
              <li>
                Facilitated and involved in a
                <span className="text-violet-400 text-base font-normal">
                  &nbsp;security incident response stimulation&nbsp;
                </span>
                 to assess the client’s
                readiness and refine their response to a cybersecurity incident
              </li>
              <li>
                Collaborated with the team to prepare testing materials,
                outlining recommendations for client management to enhance
                incident response plans and increase client’s awareness
              </li>
              <li>
                Developed understanding of post-attack recovery processes and
                emphasised the importance of clear communication between
                affected departments, management, and IT experts
              </li>
              <li>
                Proactively engaged in internal discussions and applied project
                management skills to take detailed notes, share key team
                decisions, and provide personal insights following meetings
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  );
}
