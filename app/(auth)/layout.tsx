
export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-c">{children}</div>
  }