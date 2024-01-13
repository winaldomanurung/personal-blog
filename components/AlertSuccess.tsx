export default function AlertSuccess({ onDismissAlert }) {
  const handleDismissAlert = () => {
    onDismissAlert(false)
  }

  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0"></div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">
            You are authorized. Access granted ✅
          </p>
        </div>
        <div className="ml-auto pl-3 ">
          <div className="-mx-1.5 -my-1.5 ">
            <button
              type="button"
              className="inline-flex bg-green-50 p-1.5 text-green-500 hover:bg-green-100 "
              onClick={handleDismissAlert}
            >
              <span className="sr-only">Dismiss</span>
              ✖️
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
