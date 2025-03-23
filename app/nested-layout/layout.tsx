export default function FirstLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="mt-5 text-center">
      <p>Layout 1</p>
      {children}
    </main>
  )
}
