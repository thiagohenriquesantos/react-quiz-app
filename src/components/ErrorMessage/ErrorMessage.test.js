import '@testing-library/jest-dom'
import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import ErrorMessage from './ErrorMessage';

describe("ErrorMessage", () => {
  describe("Quando ele é renderizado com children", () => {
    it("Ele renderiza o texto passado", () => {
        const testMessage = 'Test Message'
        render(<ErrorMessage>{testMessage}</ErrorMessage>)
        expect(screen.getByText(testMessage)).toBeInTheDocument()
    })
  })
});