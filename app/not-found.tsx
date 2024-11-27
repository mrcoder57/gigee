import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl flex items-center w-full">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-center justify-between w-full space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
           <Image src={"/not-found.png"} width={500} height={500} alt="404" className=' lg:w-[500px] lg:h-[500px] w-[320px] h-[320px]' />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center md:text-left">
              So sorry!
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-gray-700 text-center md:text-left">
              The page you are looking for cannot be found.
            </p>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 text-center md:text-left">Possible reasons:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 text-center md:text-left">
                <li>The page may have been moved or deleted</li>
                <li>You might have typed the wrong URL</li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <Link 
                href="/"
                className="inline-flex focus:outline-none items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-500 hover:bg-rose-500  focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out"
              >
                Go back home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

