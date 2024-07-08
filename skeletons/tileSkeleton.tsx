export function TileSkeleton() {
  return (
    <div className="relative top-0 mt-6 flex h-96 max-w-72 flex-col items-start bg-base-100 p-4 shadow-md transition-all dark:bg-neutral md:sticky">
      <div className="skeleton h-44 w-44 self-center rounded-md"></div>
      <div className="divider my-4"></div>
      <div className="skeleton mb-2 h-4 w-36"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="divider my-2"></div>
      <div className="skeleton mb-2 h-4 w-32"></div>
      <div className="skeleton h-4 w-48"></div>
    </div>
  )
}
