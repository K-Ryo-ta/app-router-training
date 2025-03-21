'use server'
import type { Database } from '@/database.types'
import { format } from 'date-fns'

type Note = Database['public']['Tables']['notes']['Row']

async function fetchNotes() {
  await new Promise((resolve) => setTimeout(resolve, 2000)) //データフェッチの非同期性がわかりやすいように2秒の遅延を入れる。
  const res = await fetch(`${process.env.url}/rest/v1/notes?select=*`, {
    headers: new Headers({
      apiKey: `${process.env.apikey as string}`,
    }),
  })
  if (!res.ok) {
    const errorMessage = await res.text()
    throw new Error(`Failed to fetch data: ${res.status} - ${errorMessage}`)
  }
  const notes: Note[] = await res.json()
  return notes
}

const NotesList = async () => {
  const notes = await fetchNotes()
  return (
    <div>
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">
        Notes
      </p>
      <ul className="m-3">
        {notes.map((note) => (
          <li key={note.id}>
            <p>{note.title}</p>
            <p>
              <strong className="mr-3">Created at:</strong>
              {note && format(new Date(note.created_at), 'yyyy-MM-dd HH:mm:ss')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NotesList
