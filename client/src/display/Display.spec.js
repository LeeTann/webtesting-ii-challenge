import React from 'react'
import { render} from 'react-testing-library'
import 'jest-dom/extend-expect'

import Display from './Display'

describe('<Display />', () => {
    it('should render without crashing', () => {
        render(<Display />)
    })

    it('should render some data', () => {
        const player1 = {
            balls: 0,
            strikes: 0
        }
        const { getByTestId } = render(<Display count={player1} />)
        const balls = getByTestId(/balls/i)
        const strikes = getByTestId(/strikes/i)

        expect(balls).toHaveTextContent(/0/i)
        expect(strikes).toEqual(strikes)
    })

})