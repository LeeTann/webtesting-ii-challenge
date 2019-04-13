import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'

import DashBoard from './Dashboard'

describe('<Dashboard />', () => {
    it('should render without crashing', () => {
        render(<DashBoard />)
    })

    it('should render some data', () => {
        const player1 = {
            balls: 0,
            strikes: 0
        }
        const { getByTestId } = render(
            <DashBoard
                balls={player1.balls}
                strikes={player1.strikes}
             />)
        
        const ballBtn = getByTestId('balls')
        const strikeBtn = getByTestId('strikes')

        fireEvent.click(ballBtn)
        fireEvent.click(strikeBtn)

        expect(ballBtn).toHaveTextContent(/balls/i)
        expect(strikeBtn).toHaveTextContent(/strikes/i)
    })

})