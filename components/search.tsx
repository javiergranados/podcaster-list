'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { useDebouncedCallback } from 'use-debounce'

type SearchProps = {
  numberOfPodcasts: number
}

export function Search({ numberOfPodcasts }: SearchProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleSearch = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchParams)

    if (value) {
      params.set('query', value)
    } else {
      params.delete('query')
    }

    router.replace(`${pathname}?${params.toString()}`)
    if (!value) {
      router.refresh()
    }
  }, 300)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="indicator self-end">
      <span className="badge indicator-item badge-primary indicator-start">{numberOfPodcasts}</span>
      <input
        ref={inputRef}
        type="text"
        placeholder="Filter podcasts"
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get('query')?.toString()}
        className="input input-bordered input-primary mb-8 h-10 min-h-10 w-full max-w-lg rounded-md"
      />
    </div>
  )
}
