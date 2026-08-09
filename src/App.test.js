import { render, screen } from '@testing-library/react';
import App from './App';

// Carousel/animation libraries aren't relevant to a routing/render smoke test
// and pull in browser-only APIs the jsdom test environment doesn't provide.
jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div data-testid="swiper-mock">{children}</div>,
  SwiperSlide: ({ children }) => <div data-testid="swiper-slide-mock">{children}</div>,
}), { virtual: true });
jest.mock('swiper/modules', () => ({
  Autoplay: {},
  EffectFade: {},
  Navigation: {},
  Pagination: {},
  Thumbs: {},
  FreeMode: {},
}), { virtual: true });
jest.mock('swiper/css', () => ({}), { virtual: true });
jest.mock('swiper/css/effect-fade', () => ({}), { virtual: true });
jest.mock('swiper/css/navigation', () => ({}), { virtual: true });
jest.mock('swiper/css/pagination', () => ({}), { virtual: true });
jest.mock('swiper/css/thumbs', () => ({}), { virtual: true });
jest.mock('swiper/css/free-mode', () => ({}), { virtual: true });

test('renders the Nyumba Dynamics homepage without crashing', () => {
  render(<App />);
  // The site tagline appears in the header/hero on every page.
  const taglineMatches = screen.getAllByText(/Hire The Right Professionals/i);
  expect(taglineMatches.length).toBeGreaterThan(0);
});
