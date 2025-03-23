'use client'

const Error = ({ error }: { error: Error }) => {
  return (
    <div>
      <p className="mt-6 text-center text-red-500">
        Data fetching in server failed
        {error.message}
      </p>
    </div>
  )
}

export default Error
