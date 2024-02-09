import {render, screen} from '@testing-library/react';
import {Header} from '../Header';
import '@testing-library/jest-dom'

test('should render same text passed into title prop', async ()=>{
    render(<Header heading="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});