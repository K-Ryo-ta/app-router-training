import NotesList from './components/notes-list'
import TimerCounter from './components/timer-counter'
import { Suspense } from 'react'
import Spinner from './components/spinner'
import RefreshButton from './components/refresh-button'

export default function Home() {
  return (
    <main>
      <div className="m-10 text-center">
        <Suspense fallback={<Spinner />}>
          <NotesList />
        </Suspense>
        <TimerCounter />
        <RefreshButton />
      </div>
    </main>
  )
}
