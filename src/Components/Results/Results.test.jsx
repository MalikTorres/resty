// import '@testing-library/jest-dom';
// import { fireEvent, render, screen } from '@testing-library/react';

// import Results from './Results';

// describe('Results Component', () => {
//   it('should render the data when it is provided', () => {
//     const data = {
//       count: 2,
//       results: [
//         { name: 'fake thing 1', url: 'http://fakethings.com/1' },
//         { name: 'fake thing 2', url: 'http://fakethings.com/2' },
//       ],
//     };

//     const { getByText } = render(<Results data={data} />);

//     // Check if the rendered component contains the data
//     const preElement = getByText(JSON.stringify(data, undefined, 2));
//     expect(preElement).toBeInTheDocument();
//   });

//   it('should not render anything when data is null', () => {
//     const { container } = render(<Results data={null} />);

//     // Check if the component doesn't render anything
//     expect(container.firstChild).toBeNull();
//   });
// });
