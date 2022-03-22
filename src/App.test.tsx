import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import App from './App';

test('renders learn react link', () => {
  render(<RecoilRoot>
    <App />
  </RecoilRoot>
  );
  const linkElement = screen.getByText(/Welcome to Puzzle game/i);
  expect(linkElement).toBeInTheDocument();
});
