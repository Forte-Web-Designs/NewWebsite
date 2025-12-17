// Redirect configuration for old location URLs to new hierarchical structure
// Add this to next.config.js redirects array

const locationRedirects = [
  {
    source: '/locations/dallas-web-designer',
    destination: '/locations/texas/dallas',
    permanent: true,
  },
  {
    source: '/locations/fort-worth-web-designer',
    destination: '/locations/texas/fort-worth',
    permanent: true,
  },
  {
    source: '/locations/dfw-web-designer',
    destination: '/locations/texas',
    permanent: true,
  },
  {
    source: '/locations/plano-web-designer',
    destination: '/locations/texas/plano',
    permanent: true,
  },
  {
    source: '/locations/frisco-web-designer',
    destination: '/locations/texas/frisco',
    permanent: true,
  },
  {
    source: '/locations/arlington-web-designer',
    destination: '/locations/texas/arlington',
    permanent: true,
  },
];

module.exports = locationRedirects;
