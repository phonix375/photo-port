import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();
  const mockContactSelected = jest.fn();
  const mockSetContactSelected = jest.fn();

  
afterEach(cleanup);

describe('Nav component', ()=>{
    //baseline test
    test('renders', ()=>{
        render(<Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
          contactSelected={mockContactSelected}
          setContactSelected={mockSetContactSelected}
          />)
    });

    it("matches snapshot", ()=> {
        const {asFragment} = render(<Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
          contactSelected={mockContactSelected}
          setContactSelected={mockSetContactSelected}
          />);

        expect(asFragment()).toMatchSnapshot();
        //asset value comparison
    });
    //snapshot test
});

describe('emoji is visible', () => {
    it('insers emoji into the h2', ()=>{
        //Arrange
        const { getByLabelText } = render(<Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
          contactSelected={mockContactSelected}
          setContactSelected={mockSetContactSelected}
          />);
        //Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
        
    });
})

describe('link visability',()=>{
    it('inserts text into links', ()=>{
        //Arrange
        const { getByTestId  } = render(<Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
          contactSelected={mockContactSelected}
          setContactSelected={mockSetContactSelected}
          />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
})