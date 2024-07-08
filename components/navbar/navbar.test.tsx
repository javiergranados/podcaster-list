import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, test, vi } from 'vitest'
import { Navbar } from './index'

vi.mock('next/navigation', () => ({
  useSearchParams: vi.fn(),
}))

describe('<Navbar />', () => {
  test('renders properly', async () => {
    expect(Navbar).toBeTruthy()
    render(<Navbar />)

    const element = screen.getByTestId('spotahome-logo')
    expect(element).toBeDefined()
  })

  test('theme selector button toggles properly', async () => {
    render(<Navbar />)

    const sunButton = screen.getByTestId('sun')
    const moonButton = screen.getByTestId('moon')

    expect(sunButton).toHaveClass('hidden')
    expect(moonButton).not.toHaveClass('hidden')

    fireEvent(
      moonButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    expect(sunButton).not.toHaveClass('hidden')
    expect(moonButton).toHaveClass('hidden')
  })
})
