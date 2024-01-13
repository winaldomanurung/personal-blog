import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Password({ onSubmitPassword }) {
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const router = useRouter()

  const handleChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitPassword(password)
  }

  return (
    // <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
      <div>
        <form
          className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all dark:bg-gray-500 sm:my-8 sm:w-full sm:max-w-lg"
          onSubmit={handleSubmit}
        >
          <div className="bg-gray-50 px-4 pb-4 pt-5 dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:ml-4 sm:mr-4 sm:mt-0 sm:text-left">
                <div className="text-base font-bold uppercase leading-6">⚠️ Password</div>
                <div className="mt-2">
                  <p className="text-sm text-gray-700 hover:text-primary-500 dark:text-gray-300">
                    This article is protected. Please type the password so we can give you the
                    access to read it.
                  </p>
                </div>
                <div className="mt-5 sm:flex sm:items-center">
                  <div className="sm:max-w-s w-full">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-500/40 dark:text-gray-300 dark:ring-gray-400 placeholder:dark:text-red-100 sm:text-sm
                        sm:leading-6
                        "
                      placeholder="Type password..."
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                  {/* <button
                        type="submit"
                        className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
                      >
                        Submit
                      </button> */}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 px-4 py-3 dark:bg-gray-950/70 dark:shadow-gray-950/40 sm:flex sm:flex-row-reverse sm:px-10">
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 sm:ml-3 sm:w-auto"
            >
              Submit
            </button>
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto "
              onClick={() => router.back()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    // </div>
  )
}
