// src/components/__tests__/Button.test.tsx
import { render } from '@testing-library/react'
import Button from '../task1/Button/Button'


describe('Button component', () => {
  it('renders the button with the correct label', () => {
    const {getByText} = render(<Button title="Click Me" icon={undefined}  />)
    const buttonText = getByText('Click Me');
    expect(buttonText).toBeTruthy();
  })
})
