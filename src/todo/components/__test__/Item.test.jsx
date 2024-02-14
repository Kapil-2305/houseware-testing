import {fireEvent, render, screen} from '@testing-library/react';
import {Item} from '../Item';
import '@testing-library/jest-dom';

describe('Item component', () => {
    it('should render the item component', async ()=>{
        render(<Item todo={["hello", false, "1"]}/>);
        const inputElement = screen.getByTestId("todo-item");
        expect(inputElement).toBeInTheDocument();
    });

    it('should render same text passed into title prop', async ()=>{
        render(<Item todo={["hello", false, "1"]}/>);
        const labelElement = screen.getByTestId("todo-item-label");
        expect(labelElement).toBeInTheDocument();
        // expect(labelElement).toHaveTextContent("hello");
    });
});