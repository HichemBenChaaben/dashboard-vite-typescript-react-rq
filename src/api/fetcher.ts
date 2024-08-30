/**
 * Generic async fetcher instance
 * fetcher<T>
 * @param url
 * @returns Promise<T>
 */
const fetcher = async <T>(url: string): Promise<T> => {
  // shouldn't fallback to hardcoded value, testing only: to remove
  const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
  const response = await fetch(`${baseUrl}${url}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default fetcher;
