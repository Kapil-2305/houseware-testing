import {render, screen} from '@testing-library/react';
import {Header} from '../Header';
import '@testing-library/jest-dom'

// testing the Header component
// 1 -> using getBy attributes
test('should render same text passed into title prop', async ()=>{
    render(<Header heading="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});

it('should render one heading tag with specific heading', async ()=>{
    render(<Header heading="Todos" />);
    const headingElement = screen.getByRole("heading", {name: /todos/i});
    expect(headingElement).toBeInTheDocument();
});

it('should render a tag with specific title', async ()=>{
    render(<Header heading="Todos" />);
    const headingElement = screen.getByTitle(/todos heading/i);
    expect(headingElement).toBeInTheDocument();
});

it('should render a tag with specific test-id', async ()=>{
    render(<Header heading="Todos" />);
    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
});

// 2 -> using findBy attributes
it('should render same text passed into title prop', async ()=>{
    render(<Header heading="Todos" />);
    const headingElement = await screen.findByText(/todos/i);
    expect(headingElement).toBeInTheDocument();
});

// 3 -> using queryBy attributes
it('should not render same text passed into title prop', async ()=>{
    render(<Header heading="Todos" />);
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
});

// 4 -> using getAllBy attributes
it('should render all heading tags', async ()=>{
    render(<Header heading="Todos" />);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(1);
});