import '@testing-library/jest-dom'
import * as React from 'react'
import {render, fireEvent, screen, waitFor} from '@testing-library/react'
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe("Header", () => {
  describe("Quando ele é renderizado", () => {
    it("Ele renderiza o texto", () => {
        const testMessage = 'Intuitive Quiz Hub'
        render(<BrowserRouter><Header></Header></BrowserRouter>)
        expect(screen.getByText(testMessage)).toBeInTheDocument()
    })
  })

  describe("Quando ele clica no Header", () => {
    it("Ele vai para rota '/'", async() => {
        const testMessage = 'Intuitive Quiz Hub'
        render(<BrowserRouter><Header></Header></BrowserRouter>)
        await waitFor(() => {
          fireEvent.click(screen.getByText(testMessage))
        })
        expect(screen.getByText('Quiz Settings')).toBeInTheDocument()
    })
  })
});