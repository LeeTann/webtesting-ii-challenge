import React from 'react'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Display from './Display'

describe('<Display />', () => {
    it('should render without crashing', () => {
        render(<Display />)
    })
    
    it('display balls title', () => {
        const display = render(<Display />);
        const ballsCount = display.getByTestId(/balls/i);
        expect(ballsCount).toHaveTextContent(/balls/i);
      })
})