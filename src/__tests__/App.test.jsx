import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('App component integration', () => {
  it('allows form use and renders expected results', () => {
    render(<App />);
    let urlInput = screen.getByTestId('form-input');
    let postSpan = screen.getByTestId('form-span-post');
    let button = screen.getByTestId('form-button');

    fireEvent.change(urlInput, {target: {value: 'test.com'}});
    fireEvent.click(postSpan);
    fireEvent.click(button);

    let pre = screen.getByTestId('results-pre');
    expect(pre).toHaveTextContent('Take thing 1');

    let methodDiv = screenbyTestId(ap)
  });
})
