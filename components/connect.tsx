export default function Connect() {
  return (
    <>
      <div
        className="flex justify-center items-center mx-auto max-w-5xl pt-32 sm:pt-24"
        id="connect"
      >
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">
          Connect
        </h1>
      </div>
      <div className="pt-20 sm:pt-13 pb-32 sm:pb-24">
        <div className="flex text-5xl gap-10 mx-auto justify-center">
          <a
            href="https://github.com/sengfan0524"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github hover:text-violet-400"></i>
          </a>

          <a
            href="www.linkedin.com/in/seng-fan-tan-891ba1252"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin hover:text-violet-400"></i>
          </a>
          <a
            href="mailto:sengfan2002@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-envelope hover:text-violet-400"></i>
          </a>
        </div>
      </div>
    </>
  );
}
