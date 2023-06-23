import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import App from '../App';

jest.mock('axios');

describe('App component integration', () => {
  it('allows form use and renders expected results', async () => {
    // Mock the API response
    const mockResponse = {
      data: {
        count: 1,
        results: [{ name: 'Take thing 1', url: 'http://example.com/1' }],
      },
    };
    axios.get.mockResolvedValueOnce(mockResponse);

    render(<App />);

    // Simulate form usage
    const urlInput = screen.getByTestId('form-input');
    const postSpan = screen.getByText('POST');
    const button = screen.getByText('GO!');

    fireEvent.change(urlInput, { target: { value: 'http://example.com' } });
    fireEvent.click(postSpan);
    fireEvent.click(button);

    // Ensure the expected results are rendered
    const pre = await screen.findByTestId('results-pre');
    expect(pre).toHaveTextContent('Take thing 1');

    const methodDiv = screen.getByTestId('app-div-method');
    expect(methodDiv).toHaveTextContent('Request Method: POST');

    const urlDiv = screen.getByTestId('app-div-url');
    expect(urlDiv).toHaveTextContent('URL: http://example.com');
  });
});
