import React from 'react';
import { render, screen } from "@testing-library/react"
import HomeScreen from "./HomeScreen";

describe('Login', ()=>{
    it('renders a button', ()=>{
        render(<HomeScreen />)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
})