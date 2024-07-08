export async function EpisodeListSkeleton() {
  return (
    <div className="mt-12 w-full list-none p-0 md:mt-4 md:p-8 md:pl-16 md:pt-0">
      <div className="mb-8 p-4 shadow-lg dark:bg-neutral">
        <div className="skeleton h-6 w-48"></div>
      </div>
      <div className="bg-base-100 p-0 shadow-lg dark:bg-neutral">
        <table className="table md:table-pin-rows">
          <thead>
            <tr>
              <th className="w-3/4 dark:bg-neutral">
                <div className="skeleton h-4 w-24"></div>
              </th>
              <th className="dark:bg-neutral">
                <div className="skeleton h-4 w-20"></div>
              </th>
              <th className="flex justify-end dark:bg-neutral">
                <div className="skeleton h-4 w-20"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {new Array(10).fill(0).map((_, index) => (
              <tr key={index}>
                <td>
                  <div className="skeleton h-4 w-96"></div>
                </td>
                <td>
                  <div className="skeleton h-4 w-36"></div>
                </td>
                <td className="flex justify-end">
                  <div className="skeleton h-4 w-16"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
