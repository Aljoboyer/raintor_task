// src/components/__tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../task1/Button/Button'


describe('Button component', () => {
  it('renders the button with the correct label', () => {
    const handleClick = jest.fn()
    const {getByText} = render(<Button title="Click Me"  />)
    const buttonText = getByText('Click Me');
    expect(buttonText).toBeTruthy();
  })
})
