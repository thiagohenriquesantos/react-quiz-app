import '@testing-library/jest-dom'
import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Footer from './Footer';

describe("Footer", () => {
  describe("Quando ele é renderizado", () => {
    it("Ele renderiza o texto passado", () => {
        const testMessage = 'Made with ♥ by'
        render(<Footer>{testMessage}</Footer>)
        expect(screen.getByText(testMessage)).toBeInTheDocument()
    })
  })
});