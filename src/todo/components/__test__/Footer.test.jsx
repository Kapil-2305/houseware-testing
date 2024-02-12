import {render, screen} from '@testing-library/react';
import {Footer} from '../Footer';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const MockFooter = (props) => {
    return(
        <BrowserRouter>
            <Footer {...props} />
        </BrowserRouter>
    )
}

describe('Footer component', () => {
    it('should render the footer component', async ()=>{
        render(<MockFooter todos={["kdjfljdlfj", "ldfjdlkjf"]}/>);
        const footerElement = screen.getByTestId("footer");
        expect(footerElement).toBeInTheDocument();
    });

    it('should render the correct amount of incomplete tasks', async ()=>{
        render(<MockFooter todos={["kdjfljdlfj", "ljdflkdjfl"]}/>);
        const footerElement = screen.getByText(/2 items left/i);
        expect(footerElement).toBeInTheDocument();
    });

    it('should render "item" when the number of incomplete tasks are one', async ()=>{
        render(<MockFooter todos={["kdjfljdlfj"]}/>);
        const footerElement = screen.getByText(/1 item left/i);
        expect(footerElement).toBeInTheDocument();
    });

    it('should render the footer navigation', async ()=>{
        render(<MockFooter todos={["kdjfljdlfj", "ljdflkdjfl"]}/>);
        const footerElement = screen.getByTestId("footer-navigation");
        expect(footerElement).toBeInTheDocument();
    });

    it('should render the "All" filter', async ()=>{
        render(<MockFooter todos={["kdjfljdlfj", "ljdflkdjfl"]}/>);
        const footerElement = screen.getByText(/all/i);
        expect(footerElement).toBeInTheDocument();
    });

    it('should render the "Active" filter', async ()=>{
        render(<MockFooter todos={["kdjfljdlfj", "ljdflkdjfl"]}/>);
        const footerElement = screen.getByText(/active/i);
        expect(footerElement).toBeInTheDocument();
    });

    it('should render the "Completed" filter', async ()=>{
        render(<MockFooter todos={["kdjfljdlfj", "ljdflkdjfl"]}/>);
        const footerElement = screen.getAllByText(/completed/i);
        expect(footerElement).toBeTruthy();
    });

    it('should render the "Clear completed" button', async ()=>{
        render(<MockFooter todos={["kdjfljdlfj", "ljdflkdjfl"]}/>);
        const footerElement = screen.getByText(/clear completed/i);
        expect(footerElement).toBeInTheDocument();
    });

    it('should disable the "Clear completed" button when there are no completed tasks', async ()=>{
        render(<MockFooter todos={["kdjfljdlfj", "ljdflkdjfl"]}/>);
        const footerElement = screen.getByText(/clear completed/i);
        expect(footerElement).toBeDisabled();
    });

    it('should enable the "Clear completed" button when there are completed tasks', async ()=>{
        render(<MockFooter todos={["kdjfljdlfj", "ljdflkdjfl", {completed: true}]}/>);
        const footerElement = screen.getByText(/clear completed/i);
        expect(footerElement).toBeEnabled();
    });

    it('should not render the footer component when there are no tasks', async ()=>{
        render(<MockFooter todos={[]}/>);
        const footerElement = screen.queryByTestId("footer");
        expect(footerElement).not.toBeInTheDocument();
    });
});