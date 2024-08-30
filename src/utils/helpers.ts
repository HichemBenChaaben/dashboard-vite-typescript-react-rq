interface FormatCurrencyOptions {
  currency?: string; // Default is from env or 'USD'
  locale?: string; // Default is from env or 'en-US'
}

const defaultCurrency = "USD";
const defautLocale = "en-US";

export const formatCurrency = (
  value: number,
  {
    currency = import.meta.env.VITE_DEFAULT_CURRENCY || defaultCurrency,
    locale = import.meta.env.VITE_DEFAULT_LOCALE || defautLocale,
  }: FormatCurrencyOptions = {}
): string => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  });

  return formatter.format(value);
};

interface FormatDateOptions {
  locale?: string; // Optional locale parameter, default is 'en-US'
}

export const formatDate = (
  dateString: string,
  { locale = defautLocale }: FormatDateOptions = {}
): string => {
  // Create a Date object from the date string
  const date = new Date(dateString);

  // Define the options for the date formatting
  const options: Intl.DateTimeFormatOptions = {
    month: "numeric", // Full name of the month (e.g., December)
    day: "numeric", // Day of the month (e.g., 23)
    year: "numeric", // Full year (e.g., 2020)
  };

  // Create a new DateTimeFormat object and format the date
  return new Intl.DateTimeFormat(locale, options).format(date);
};

export const getStoredFacets = (key: string) => {
  const storedFacets = localStorage.getItem(key);
  return storedFacets ? JSON.parse(storedFacets) : null;
};

export const setStoredFacets = (
  key: string,
  facets: { valueType: string; period: string }
) => {
  localStorage.setItem(key, JSON.stringify(facets));
};
