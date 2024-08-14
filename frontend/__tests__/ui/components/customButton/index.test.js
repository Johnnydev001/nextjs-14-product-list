import { render, fireEvent } from '@testing-library/react';
import {CustomButton} from "../../../../src/ui/components/customButton/CustomButton";

describe('Custom button component tests', () => {
    it('should render the custom button component with default props and match the snapshot', () => {
        const {container, getByText } = render(<CustomButton onClick={jest.fn()}/>)

        expect(container).toMatchSnapshot()
    })

    it('should render the custom button component with custom props and match the snapshot', () => {
        const props = {
            onClick: jest.fn(),
            children: (<div>Button text</div>),
            className: 'text-lg'
        }
        const {container, getByRole } = render(<CustomButton {...props}/>)

        expect(getByRole('button')).toHaveClass('text-lg')

        expect(container).toMatchSnapshot()
    })

    it('should handle the button click', () => {
        const props = {
            onClick: jest.fn(),
            children: (<div>Button text</div>),
            className: 'text-lg'
        }
        const {getByText } = render(<CustomButton {...props}/>)

        const button = getByText('Button text')

        fireEvent.click(button)

        expect(props.onClick).toHaveBeenCalled()
    })
})