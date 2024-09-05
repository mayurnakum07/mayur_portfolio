import ReactGA from 'react-ga';

export const initGA = () => {
    if (!window.GA_INITIALIZED) {
        ReactGA.initialize('G-6LPQ391VTF');
        window.GA_INITIALIZED = true;
    }
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};