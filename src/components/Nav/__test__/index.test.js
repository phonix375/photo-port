import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', ()=>{
    //baseline test
    test('renders', ()=>{
        render(<Nav />)
    });

    it("matches snapshot", ()=> {
        const {asFragment} = render(<Nav />);

        expect(asFragment()).toMatchSnapshot();
        //asset value comparison
    });
    //snapshot test
});

describe('emoji is visible', () => {
    it('insers emoji into the h2', ()=>{
        //Arrange
        const { getByLabelText } = render(<Nav />);
        //Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

describe('link visability',()=>{
    it('inserts text into links', ()=>{
        //Arrange
        const { getByTestId  } = render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
        //Assert
    })
})