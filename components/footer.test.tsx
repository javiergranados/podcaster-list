import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, test } from 'vitest'
import { Footer } from './footer'

describe('<Footer />', () => {
  test('renders properly', async () => {
    expect(Footer).toBeTruthy()
    render(<Footer />)

    const title = screen.queryByText('Javier Granados')
    expect(title).toBeDefined()
  })
})
