import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Joki Holdings homepage without crashing', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /We make your business visible/i });
  expect(heading).toBeInTheDocument();
  
  const brandName = screen.getAllByAltText(/Joki Holdings Ltd/i);
  expect(brandName.length).toBeGreaterThan(0);
});

test('uses the required Joki header navigation and contact CTA', () => {
  render(<App />);

  const nav = screen.getByRole('navigation');
  const labels = Array.from(nav.querySelectorAll('a'))
    .map((link) => link.textContent.replace(/\s+/g, ' ').trim())
    .filter((label) => ['Home', 'Design', 'Print', 'Web', 'About', 'Contact'].includes(label));

  expect(labels).toEqual(['Home', 'Design', 'Print', 'Web', 'About', 'Contact']);
  expect(screen.getAllByRole('link', { name: /Talk to Us/i })[0]).toHaveAttribute('href', '/contact');
});
