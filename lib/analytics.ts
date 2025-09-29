// Analytics and tracking utilities for Meta Ads and Google Ads

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Google Analytics 4 tracking
export const trackGAEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Meta Pixel tracking
export const trackMetaEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

// Google Ads conversion tracking
export const trackGoogleConversion = (conversionId: string, conversionLabel: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': `${conversionId}/${conversionLabel}`,
      'value': value || 1.0,
      'currency': 'USD'
    });
  }
};

// Meta conversion tracking
export const trackMetaConversion = (eventName: string, value?: number, currency: string = 'USD') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, {
      value: value,
      currency: currency
    });
  }
};

// Combined tracking for both platforms
export const trackConversion = (eventName: string, value?: number) => {
  // Track in Google Analytics
  trackGAEvent(eventName, {
    value: value,
    currency: 'USD'
  });
  
  // Track in Meta Pixel
  trackMetaEvent(eventName, {
    value: value,
    currency: 'USD'
  });
};

// Specific conversion events
export const trackAppDownload = () => {
  trackConversion('app_download', 1.0);
  trackMetaConversion('Lead', 1.0);
  // Add your Google Ads conversion ID and label here
  // trackGoogleConversion('AW-XXXXXXXXX', 'XXXXXXXXX', 1.0);
};

export const trackEmailSignup = () => {
  trackConversion('email_signup', 1.0);
  trackMetaConversion('CompleteRegistration', 1.0);
  // Add your Google Ads conversion ID and label here
  // trackGoogleConversion('AW-XXXXXXXXX', 'YYYYYYYYY', 1.0);
};

export const trackPDFDownload = () => {
  trackConversion('pdf_download', 1.0);
  trackMetaConversion('ViewContent', 1.0);
  // Add your Google Ads conversion ID and label here
  // trackGoogleConversion('AW-XXXXXXXXX', 'ZZZZZZZZZ', 1.0);
};

export const trackCalculatorUsage = (calculatorType: string) => {
  trackConversion('calculator_usage', 1.0);
  trackMetaConversion('ViewContent', 1.0);
  trackGAEvent('calculator_usage', {
    calculator_type: calculatorType
  });
};

export const trackPageView = (pageName: string) => {
  trackGAEvent('page_view', {
    page_title: pageName
  });
  trackMetaEvent('PageView');
};

// UTM parameter tracking
export const getUTMParameters = () => {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_term: urlParams.get('utm_term'),
    utm_content: urlParams.get('utm_content')
  };
};

// Enhanced conversion tracking with UTM parameters
export const trackEnhancedConversion = (eventName: string, value?: number) => {
  const utmParams = getUTMParameters();
  
  trackGAEvent(eventName, {
    value: value,
    currency: 'USD',
    ...utmParams
  });
  
  trackMetaEvent(eventName, {
    value: value,
    currency: 'USD',
    ...utmParams
  });
};
