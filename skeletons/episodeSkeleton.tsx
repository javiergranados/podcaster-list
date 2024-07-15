import { Fragment } from 'react'

export async function EpisodeSkeleton() {
  return (
    <div className="mt-12 h-full min-h-96 w-full list-none p-0 md:mt-4 md:p-8 md:pl-16 md:pt-0">
      <div className="bg-base-100 p-4 shadow-lg dark:bg-neutral">
        <div className="skeleton mb-4 h-6 w-60"></div>

        {new Array(4).fill(0).map((_, index) => (
          <Fragment key={index}>
            <div className="skeleton mb-1 h-2 w-72"></div>
            <div className="skeleton mb-1 h-2 w-96"></div>
            <div className="skeleton mb-1 h-2 w-80"></div>
          </Fragment>
        ))}
        <div className="skeleton mb-10 h-2 w-96"></div>
        <div className="skeleton h-8 w-full"></div>
      </div>
    </div>
  )
}
