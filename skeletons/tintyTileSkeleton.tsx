export default function TinyTileSkeleton() {
  return (
    <div className="relative mt-6 h-36 w-80 cursor-pointer bg-base-100 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-neutral">
      <div className="skeleton absolute -top-8 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full"></div>
      <div className="flex h-full flex-col items-center justify-end p-0 pb-4 text-center">
        <div className="skeleton mb-2 h-4 w-28"></div>
        <div className="skeleton h-4 w-60"></div>
      </div>
    </div>
  )
}
