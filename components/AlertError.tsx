export default function AlertError({ onDismissAlert }) {
  const handleDismissAlert = () => {
    onDismissAlert(false)
  }

  return (
    <div className=" flex min-h-full items-center justify-center  text-center sm:p-0">
      <div className="relative transform overflow-hidden rounded-lg shadow-xl transition-all sm:my-2 sm:w-full sm:max-w-lg">
        <div className="min-h-full rounded-md bg-red-50 p-4 ">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800"> Wrong password. Access denied ❌</p>
            </div>
            <div className="ml-auto pl-3 ">
              <div className="-mx-1.5 -my-1.5 ">
                <button
                  type="button"
                  className="inline-flex bg-red-50 p-1.5  text-red-500  hover:bg-red-100 focus:outline-none "
                  onClick={handleDismissAlert}
                >
                  <span className="sr-only">Dismiss</span>
                  ✖️
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
