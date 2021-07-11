import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

  const mockonClose = jest.fn();


afterEach(cleanup);

describe('Modal is rendering', ()=>{

    it('renders', ()=> {
        render(<Modal currentPhoto={currentPhoto} onClose={mockonClose}/>)
    })

    it('matches snapshot', () => {
        const { asFragment } =   render(<Modal currentPhoto={currentPhoto} onClose={mockonClose}/>)
        expect(asFragment()).toMatchSnapshot()
    })

    
describe('Click Event', () => {
    it('calls onClose handler', () => {
      const { getByText } = render(<Modal
        onClose={mockonClose}
        currentPhoto={currentPhoto}
      />);
      fireEvent.click(getByText('Close this modal'));
  
      expect(mockonClose).toHaveBeenCalledTimes(1);
    });
  }) 


})

