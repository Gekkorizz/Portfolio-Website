export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      {children}
    </div>
  )
}