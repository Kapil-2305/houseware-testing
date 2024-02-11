import {render, screen} from '@testing-library/react';
import {Footer} from '../Footer';
import '@testing-library/jest-dom';

it('should render the correct amount of incomplete tasks', async ()=>{
    render(<Footer todos={todos} />);
    const headingElement = screen.getByRole("heading", {name: /todos/i});
    expect(headingElement).toBeInTheDocument();
});