import React from 'react'
import Counter from './Counter'
import { render, fireEvent, cleanup } from 'react-testing-library'

describe('Counter', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup)

  test('is 1 when click in button', function() {
    const myCounter = render(<Counter />)
    const button = myCounter.getByText('count')
    const counterLabel = myCounter.getByTestId('counter-value')
  
    fireEvent.click(button)
  
    expect(counterLabel.textContent).toEqual('1')
  })
  
  test('is init to zero', function() {
    const { getByTestId } = render(<Counter />)
    const counterLabel = getByTestId('counter-value')
    expect(counterLabel.textContent).toEqual('0')
  })
})
