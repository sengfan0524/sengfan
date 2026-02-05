export default function NavBar() {
  return (
    <>
      <header className="sticky top-0 z-50">
        <nav className="relative flex items-center justify-between p-6 lg:px-8">
          <div className="flex gap-x-12 items-center justify-center mx-auto w-screen">
            <a
              href="#"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Product
            </a>
            <a
              href="#"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Features
            </a>
            <a
              href="#"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Company
            </a>
          </div>
        </nav>
      </header>
    </>
  )
}
