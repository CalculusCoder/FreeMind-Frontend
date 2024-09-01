export const GA_TRACKING_ID = "G-7M4W89VRGE"; // Replace with your GA Measurement ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: any) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, params }: any) => {
  window.gtag("event", action, params);
};
