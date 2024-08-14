import {render} from "@testing-library/react";
import LoadingProducts from "../../../src/app/loading";

describe('Loading products page tests', () => {
    it('should render the loading products page and match snapshot', () => {
        const {container, getByText } = render(<LoadingProducts/>)

        expect(getByText('Loading products...')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})