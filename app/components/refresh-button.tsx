'use client'
import { useRouter } from 'next/navigation'

const RefreshButton = () => {
  const router = useRouter()
  return (
    <button
      className="bg-indigo-600 px-3 py-1 text-white rounded hover:bg-indigo-700 font-medium"
      onClick={() => {
        router.refresh()
      }}
    >
      Refresh current route
    </button>
  )
}

export default RefreshButton
