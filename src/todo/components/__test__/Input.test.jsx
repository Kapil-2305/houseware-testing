import {fireEvent, render, screen} from '@testing-library/react';
import {Input} from '../Input';
import '@testing-library/jest-dom';

describe('Input component', () => {
    it('should render the input component', async ()=>{
        render(<Input />);
        const inputElement = screen.getByTestId("input");
        expect(inputElement).toBeInTheDocument();
    });

    it('should render the input text component', async ()=>{
        render(<Input />);
        const inputElement = screen.getByTestId("text-input");
        expect(inputElement).toBeInTheDocument();
    });

    it('should render the input label', async ()=>{
        render(<Input label="What needs to be done?" />);
        const inputElement = screen.getByLabelText(/what needs to be done/i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should render the input placeholder', async ()=>{
        render(<Input placeholder="What needs to be done?" />);
        const inputElement = screen.getByPlaceholderText(/what needs to be done/i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should render the input default value', async ()=>{
        render(<Input defaultValue="What needs to be done?" />);
        const inputElement = screen.getByDisplayValue(/what needs to be done/i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type in input', ()=>{
        render(<Input placeholder={"Go Grocery Shopping"}/>);
        const inputElement = screen.getByPlaceholderText(/Go Grocery Shopping/i);
        fireEvent.change(inputElement, {target: {value: "Go Grocery Shopping"}});
        expect(inputElement.value).toBe("Go Grocery Shopping");
    });

    it('should call onBlur when input is blurred', ()=>{
        const onBlur = jest.fn();
        render(<Input onBlur={onBlur} />);
        const inputElement = screen.getByTestId("text-input");
        fireEvent.blur(inputElement);
        expect(onBlur).toHaveBeenCalled();
    });

    it('should have empty input value when enter key is pressed', ()=>{
        render(<Input />);
        const inputElement = screen.getByTestId("text-input");
        fireEvent.keyDown(inputElement, {key: "Enter", code: "Enter"});
        expect(inputElement.value).toBe("");
    });
});