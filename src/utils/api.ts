/**
 * Helper to dynamically get the correct relative backend path.
 * Supports both local testing under `/dist/` on XAMPP (routes to `../backend/`)
 * and live production root hosting on cPanel (routes to `./backend/`).
 */
export const getApiUrl = (endpoint: string): string => {
  const path = window.location.pathname;
  if (path.includes('/dist/')) {
    return `../backend/${endpoint}`;
  }
  return `./backend/${endpoint}`;
};
